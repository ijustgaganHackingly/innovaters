import React from 'react';
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => {
  console.log("from TaskList tasks -> ", tasks);

  return (
    <div className="relative overflow-x-auto   shadow-md sm:rounded-lg md:w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Task Title</th>
            <th scope="col" className="px-6 py-3 max-w-[400px]">Description</th>
            <th scope="col" className="px-6 py-3">Due Date</th>
            {/* <th scope="col" className="px-6 py-3">Status</th> */}
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task._id}
                className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div>
                    <div>{task.title}</div>
                  </div>
                </td>
                <td className="px-6 py-4 max-w-[400px] break-words">{task.description}</td>
                {/* <td className="px-6 py-4">{task.dueDate}</td> */}
                <dd className="text-gray-700 sm:col-span-2 pl-7">
                  {new Date(task.dueDate).toLocaleDateString("en-IN")}
                </dd>
               
                <td className="px-6 py-4">
                  <Link to={`${task._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default TaskList;