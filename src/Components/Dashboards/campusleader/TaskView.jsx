import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../constants.js";
import axiosInstance from "../../helper/axiosinstace.js";

const TaskView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [taskCompletionImage, setTaskCompletionImage] = useState("")

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    try {

      const response = await axiosInstance.get(`${BASE_URL}/task/${id}`);
      console.log("TaskView response ->", response)
      const userId = localStorage.getItem('userId')

      // const assignedUserData = response.data.assignedUsers.find(
      //   (user) => user.user._id === userId
      // );

      // if (assignedUserData) {
      //   setTask({
      //     ...response.data,
      //     completionImage: assignedUserData.completionImage,
      //     completed: assignedUserData.completed,
      //     completionTime: assignedUserData.completionTime,
      //   });
      // } else {
      //   setTask(response.data);
      // }

      setTask(response.data);
      
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  console.log('task',task)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log('selectedFiles',selectedFile)

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("completionImage", selectedFile);
    formData.append("taskId", id);
    formData.append("userId", localStorage.getItem("userId"));

    try {
      setUploading(true);
      const response = await axiosInstance.put(
        `${BASE_URL}/task/upload-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTask((prevTask) => ({
        ...prevTask,
        status: "Completed",
        completionImage: response.data.imageUrl,
        completed: true
      }));
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  if (!task) {
    return <p className="text-center text-gray-500">Loading task details...</p>;
  }

  return (
    <div className="w-[98%] rounded-md h-[calc(95vh-85px)] bg-white p-6">
      <button onClick={() => navigate(-1)} className="mb-4 rounded-md">
        ← Back
      </button>

      <div className="font-bold text-2xl">{task.title}</div>
      <div className="mt-2 max-w-2xl text-gray-700">{task.description}</div>

      <div className="p-6 bg-white rounded-lg mt-4">
        <dl className="-my-3 divide-y divide-gray-200 text-sm">
          <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Due Date</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {new Date(task.dueDate).toLocaleDateString("en-IN")}
                </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Status</dt>
            <dd className="sm:col-span-2">
              {task.status === "Pending" && (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-md">
                  Pending
                </span>
              )}
              {task.status === "Completed" && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-md">
                  Completed
                </span>
              )}
            </dd>
          </div>

            {task.completionImage && (
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Uploaded Image</dt>
                <dd className="sm:col-span-2">
                  <img src={task.completionImage} alt="Completion" className="max-w-xs rounded-md shadow-md"/>
                </dd>
              </div>
            )}
        </dl>
      </div>

      {task.status === "Pending" && (
        <div className="mt-4">
          <input type="file" onChange={handleFileChange} className="mb-2" />

          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Completion Image"}
          </button>

        </div>
      )}
    </div>
  );
};

export default TaskView;