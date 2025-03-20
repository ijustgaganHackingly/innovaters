import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    InputBase,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem,
    TextField,
    Select,
    FormControl,
    InputLabel,
    CircularProgress,
    ImageList,
    ImageListItem
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleIcon from '@mui/icons-material/People';  // corrected line
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BASE_URL } from '../../../../constants';
import axiosInstance from '../../helper/axiosinstace';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const drawerWidth = 300;

function AdminDashboard() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [campusLeaderAnchorEl, setCampusLeaderAnchorEl] = useState(null);
    const [activeTab, setActiveTab] = useState('students');
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskDueDate, setNewTaskDueDate] = useState(new Date()); 
    const [assignTask, setAssignTask] = useState('');
    const [assignedStudent, setAssignedStudent] = useState('');
    const [signupData, setSignupData] = useState([]);
    const [formData, setFormData] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newRole, setNewRole] = useState('user');
    const [allUsers, setAllUsers] = useState([]);
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [editableRoles, setEditableRoles] = useState(['user', 'campusleader']);
    const [campusLeaders, setCampusLeaders] = useState([]);
    const [taskReviews, setTaskReviews] = useState({}); 
    const campusLeaderOpen = Boolean(campusLeaderAnchorEl);
    const [selectedLeaderId, setSelectedLeaderId] = useState(null);
    const [tasksForSelectedLeader, setTasksForSelectedLeader] = useState([]);
    const [completionImage, setCompletionImage] = useState(null);


    const handleCampusLeaderClick = (event) => {
        setCampusLeaderAnchorEl(event.currentTarget);
    };

    const handleCampusLeaderClose = () => {
        setCampusLeaderAnchorEl(null);
    };

    const handleMenuClick = (text) => {
        setSelectedMenu(text);
        setError(null);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };


    const handleAddTask = async () => {
        if (newTaskTitle.trim() && newTaskDescription.trim() && newTaskDueDate) {
            try {
                const response = await axiosInstance.post('/task/create', {
                    title: newTaskTitle,
                    description: newTaskDescription,
                    dueDate: newTaskDueDate,
                    assignedUsers: [],
                });

                setTasks([...tasks, response.data.task]);
                setNewTaskTitle('');
                setNewTaskDescription('');
                setNewTaskDueDate(new Date());
                fetchTasks();
            } catch (err) {
                setError(err.message || 'Error adding task');
                console.error('Error adding task:', err);
            }
        } else {
            alert('Please fill in all the task details: Title, Description, and Due Date.');
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);


    const handleAssignTask = async (taskId, studentId) => {
        if (taskId && studentId) {
            try {
                const response = await axiosInstance.put(`/task/assign-user/${taskId}`, { userId: studentId });
                alert(`Task assigned successfully!`);
                setAssignTask('');
                setAssignedStudent('');
                fetchTasks();
            } catch (err) {
                setError(err.message || 'Error assigning task');
                console.error('Error assigning task:', err);
            }
        }
    };

    const handleRoleChange = (event) => {
        setNewRole(event.target.value);
    };

    const updateRole = async () => {
        if (!selectedUserId || !newRole) return;
        try {
            const response = await axiosInstance.patch(`/auth/update-role/${selectedUserId}`, { role: newRole });
            setAllUsers(allUsers.map(user => user._id === selectedUserId ? { ...user, role: newRole } : user));
            alert(response.data.message);
        } catch (error) {
            console.error("Error updating role:", error);
            setError(error.message || 'Failed to update role');
        } finally {
            setSelectedUserId(null);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/campusLeader/excel-data`, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'campus_leaders.xlsx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

        } catch (err) {
            setError(err.message || 'Error downloading data');
            console.error('Error downloading data:', err);
        }
    };

    const fetchTasks = async () => {
        try {
            const response = await axiosInstance.get('/task/');
            setTasks(response.data);
        } catch (err) {
            setError(err.message || 'Failed to fetch tasks');
            console.error('Error fetching tasks:', err);
        }
    };
    const fetchCampusLeaders = async () => {
        try {
            const response = await axiosInstance.get('/auth/');
            const leaders = response.data.filter(user => user.role === 'campusleader');
            setCampusLeaders(leaders);
        } catch (error) {
            setError(error.message || 'Failed to fetch campus leaders');
            console.error('Error fetching campus leaders:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (selectedMenu === 'Signup Data') {
                    const response = await axiosInstance.get(`${BASE_URL}/auth/`);
                    const filteredData = response.data.filter(user => editableRoles.includes(user.role));
                    setSignupData(filteredData);
                    setAllUsers(response.data);

                } else if (selectedMenu === 'View Details') { 
                    const response = await axiosInstance.get('/campusLeader/');
                  
                    setFormData(response.data.applications);
                } else if (selectedMenu === 'View Student Database') {
                    const response = await axiosInstance.get('/auth/');
                    const campusLeaders = response.data.filter(user => user.role === 'campusleader');
                    setStudents(campusLeaders);
                }
                else if (selectedMenu === "Assign Task") {
                    const response = await axiosInstance.get(`${BASE_URL}/auth/`);
                    setAssignedUsers(response.data)
                }
            } catch (err) {
                setError(err.message || 'Failed to fetch data');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        if (selectedMenu) {
            fetchData();
        }
    }, [selectedMenu, editableRoles]);

    useEffect(() => {
        fetchTasks();
        fetchCampusLeaders()
    }, []);

    const getAvatarInitials = (name) => {
        if (!name) return '';

        const middleIndex = Math.floor(name.length / 2);

        const firstNameInitial = name[0] ? name[0].toUpperCase() : '';
        const lastNameInitial = name[middleIndex] ? name[middleIndex].toUpperCase() : '';

        return firstNameInitial + lastNameInitial;
    };

    const handleReviewChange = (taskId, userId, value) => {
        setTaskReviews(prev => ({
            ...prev,
            [taskId]: {
                ...prev[taskId],
                [userId]: value,
            },
        }));
    };

    const handleLeaderSelection = async (leaderId) => {
        setSelectedLeaderId(leaderId);
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(`/task/usertask/${leaderId}`);
            setTasksForSelectedLeader(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching tasks for selected leader:', error);
            setError(error.message || 'Failed to fetch tasks for this user');
            setTasksForSelectedLeader([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitReviews = async () => {
        if (!selectedLeaderId) {
            alert('Please select a Campus Leader.');
            return;
        }

        try {
            let totalNewScore = 0;
            for (const taskId in taskReviews) {
                if (taskReviews[taskId] && taskReviews[taskId][selectedLeaderId]) {
                    totalNewScore += parseInt(taskReviews[taskId][selectedLeaderId], 10) || 0;
                }
            }

            if (isNaN(totalNewScore)) {
                alert('Invalid score entered. Please enter a valid number.');
                return;
            }

            await axiosInstance.patch(`/auth//score/${selectedLeaderId}`, { newScore: totalNewScore });
            alert('Reviews submitted and score updated successfully!');

            setTaskReviews({});
            setSelectedLeaderId(null);
            setTasksForSelectedLeader([]);

        } catch (error) {
            console.error('Error submitting reviews and updating score:', error);
            setError(error.message || 'Failed to submit reviews and update score');
        }
    };


    const renderContent = () => {
        if (loading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <CircularProgress />
                </Box>
            );
        }

        if (error) {
            return <Typography color="error">Error: {error}</Typography>;
        }

        switch (selectedMenu) {
            case 'Signup Data':
                return (
                    <Paper sx={{ width: '100%', mt: 2, height: "100vh", overflow: "scroll" }}>
                        <TableContainer>
                            <Table aria-label="signup data table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Role</TableCell>
                                        <TableCell>Signup date</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {signupData.map((data) => (
                                        <TableRow key={data._id}>
                                            <TableCell>{data._id}</TableCell>
                                            <TableCell>{data.email}</TableCell>
                                            <TableCell>{data.role}</TableCell>
                                            <TableCell>{new Date(data.createdAt).toLocaleDateString()}</TableCell>
                                            <TableCell>

                                                {(editableRoles.includes(data.role)) ? (
                                                    selectedUserId === data._id ? (
                                                        <Box>
                                                            <FormControl size="small">
                                                                <InputLabel id="role-select-label">Role</InputLabel>
                                                                <Select
                                                                    labelId="role-select-label"
                                                                    id="role-select"
                                                                    value={newRole}
                                                                    label="Role"
                                                                    onChange={handleRoleChange}
                                                                >
                                                                    <MenuItem value="user">User</MenuItem>
                                                                    <MenuItem value="campusleader">Campus Leader</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                            <Button size="small" onClick={updateRole}>Save</Button>
                                                        </Box>
                                                    ) : (
                                                        <Button size="small" onClick={() => { setSelectedUserId(data._id); setNewRole(data.role); }}>
                                                            Edit Role
                                                        </Button>
                                                    )
                                                ) : (
                                                    <Typography>Cannot Edit</Typography>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                );
            case 'View Details':
                return (
                    <Paper sx={{ width: '100%', mt: 2 }}>
                        <TableContainer>
                            <Table aria-label="form data table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Campus Leader Name</TableCell>
                                        <TableCell>email</TableCell>
                                        <TableCell>College</TableCell>
                                        <TableCell>Number</TableCell>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Purpose</TableCell>
                                        <TableCell>State</TableCell>
                                        <TableCell>Form Date</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {formData.map((data) => (
                                        <TableRow key={data._id}>
                                            <TableCell>{data._id}</TableCell>
                                            <TableCell>{data.name}</TableCell>
                                            <TableCell>{data.email}</TableCell>
                                            <TableCell>{data.college}</TableCell>
                                            <TableCell>{data.number}</TableCell>
                                            <TableCell>{data.position}</TableCell>
                                            <TableCell>{data.purpose}</TableCell>
                                            <TableCell>{data.state}</TableCell>
                                            <TableCell>{new Date(data.createdAt).toLocaleDateString()}</TableCell>
                                            <TableCell>{data.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                );
            case 'Add Task':
                return (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6">Existing Tasks:</Typography>
                        <List>
                            {tasks.map(task => (
                                <ListItem key={task._id}>
                                    <ListItemText primary={task.title} secondary={task.description} />
                                </ListItem>
                            ))}
                        </List>

                        <TextField
                            label="Task Title"
                            variant="outlined"
                            fullWidth
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Task Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={newTaskDescription}
                            onChange={(e) => setNewTaskDescription(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="date"
                            label="Due Date"
                            type="date"
                            defaultValue={new Date().toISOString().substr(0, 10)}  // Set default to today
                            onChange={(e) => setNewTaskDueDate(e.target.value)}
                            sx={{ width: 220, mb: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        
                        <Button variant="contained" onClick={handleAddTask} sx={{ backgroundColor: '#51437d' }}>
                            Add Task
                        </Button>
                    </Box>
                );
            case 'Assign Task':
                return (
                    <Box sx={{ height: "100%", overflow: "scroll" }}>
                        {tasks.map(task => (
                            <Paper key={task._id} sx={{ p: 2, mb: 2 }}>
                                <Typography variant="h6">{task.title}</Typography>
                                <Typography variant="subtitle1">Assigned Users:</Typography>
                                <List>
                                    {task.assignedUsers && task.assignedUsers.length > 0 ? (
                                        task.assignedUsers.map(assignedUser => {
                                            const userName = assignedUser.user ? assignedUser.user.name : 'Unknown User';
                                            return (
                                                <ListItem key={assignedUser._id || assignedUser.user._id || assignedUser.user}>
                                                    <ListItemText primary={userName} />
                                                </ListItem>
                                            );
                                        })
                                    ) : (
                                        <ListItem>
                                            <ListItemText primary="No users assigned" />
                                        </ListItem>
                                    )}
                                </List>

                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <InputLabel id={`assign-student-label-${task._id}`}>Assign Campus Leader</InputLabel>
                                    <Select
                                        labelId={`assign-student-label-${task._id}`}
                                        id={`assign-student-${task._id}`}
                                        value={assignedStudent}
                                        label="Campus Leader"
                                        onChange={(e) => setAssignedStudent(e.target.value)}
                                    >
                                        {assignedUsers.filter(user => user.role === 'campusleader').map(campusLeader => (
                                            <MenuItem key={campusLeader._id} value={campusLeader._id}>{campusLeader.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Button
                                    variant="contained"
                                    onClick={() => handleAssignTask(task._id, assignedStudent)}
                                    sx={{ backgroundColor: '#51437d' }}
                                >
                                    Assign Task
                                </Button>
                            </Paper>
                        ))}
                    </Box>
                );

            case 'View Student Database':
                return (
                    <Paper sx={{ width: '100%', mt: 2 }}>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="student table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
                                        <TableCell>Photo</TableCell>
                                        <TableCell>Student Name</TableCell>
                                        <TableCell>Registration ID</TableCell>
                                        <TableCell>Programme</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Contact No.</TableCell>
                                        <TableCell>Email ID</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map((student, index) => (
                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>
                                                <Avatar
                                                    sx={{
                                                        bgcolor: '#51437d',
                                                        width: 30,
                                                        height: 30,
                                                        fontSize: '0.8rem'
                                                    }}
                                                >
                                                    S
                                                </Avatar>
                                            </TableCell>
                                            <TableCell>{student.name}</TableCell>
                                            <TableCell>{student._id}</TableCell>
                                            <TableCell>{student.role}</TableCell>
                                            <TableCell>{student.age}</TableCell>
                                            <TableCell>{student.gender}</TableCell>
                                            <TableCell>{student.contact}</TableCell>
                                            <TableCell>{student.email}</TableCell>
                                            <TableCell>
                                                <IconButton size="small">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                );
            case 'Download Details':
                return (
                    <Box sx={{ mt: 2 }}>
                        <Typography>Download Campus Leader details here.</Typography>
                        <Button
                            variant="contained"
                            startIcon={<CloudDownloadIcon />}
                            sx={{ mt: 2, backgroundColor: '#51437d' }}
                            onClick={handleDownload}
                        >
                            Download
                        </Button>
                    </Box>
                );
            case 'Review Tasks':
                return (
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="leader-select-label">Select Campus Leader</InputLabel>
                            <Select
                                labelId="leader-select-label"
                                id="leader-select"
                                value={selectedLeaderId || ''}
                                label="Campus Leader"
                                onChange={(e) => handleLeaderSelection(e.target.value)}
                            >
                                {campusLeaders.map(leader => (
                                    <MenuItem key={leader._id} value={leader._id}>{leader.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {selectedLeaderId && (
                            <Paper sx={{ p: 2, mb: 2 }}>
                                <Typography variant="h6">Tasks for {campusLeaders.find(leader => leader._id === selectedLeaderId)?.name}</Typography>
                                <List>
                                    {tasksForSelectedLeader.map(task => {
                                        const assignedUser = task.assignedUsers.find(au => au.user === selectedLeaderId);
                                        const imageUrl = assignedUser ? assignedUser.completionImage : null; 

                                        return (
                                            <ListItem key={task._id} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <ListItemText primary={task.title} />
                                                {imageUrl && (
                                                    <Box sx={{ mt: 1, mb: 1 }}>
                                                        <img src={imageUrl} alt={`Completion for ${task.title}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                                    </Box>
                                                )}
                                                <TextField
                                                    label="Review/Marks"
                                                    type="number"
                                                    value={taskReviews[task._id]?.[selectedLeaderId] || ''}
                                                    onChange={(e) => handleReviewChange(task._id, selectedLeaderId, e.target.value)}
                                                    sx={{ width: '100px', ml: 2 }}
                                                />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                                <Button variant="contained" onClick={handleSubmitReviews} sx={{ backgroundColor: '#51437d' }}>
                                    Submit Reviews
                                </Button>
                            </Paper>
                        )}
                    </Box>
                );
            default:
                return <Typography>Hello {user.name}  !</Typography>;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: 'linear-gradient(to bottom, #1d1441, #2b1d5c, #52447e)',
                        color: 'white',
                    },
                }}
            >
                <Toolbar>
                <div className='p-11'>
            <Link to='/'>
              <img src="/8.png" alt="" />
            </Link>
            </div>
                </Toolbar>
                <List>
                    {[
                        { text: 'Signup Data', icon: <PeopleIcon /> },
                        {
                            text: 'Campus Leader',
                            icon: <SchoolIcon />,
                            onClick: handleCampusLeaderClick,
                            subMenu: true,
                        },
                    ].map((item, index) => (
                        <ListItem
                              component="button"
                            key={item.text}
                            onClick={item.subMenu ? item.onClick : () => handleMenuClick(item.text)}
                            sx={{
                                pl: 3,
                                '&:hover': {
                                    backgroundColor: alpha('#fff', 0.1),
                                },
                            }}
                        >
                            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Menu
                anchorEl={campusLeaderAnchorEl}
                open={campusLeaderOpen}
                onClose={handleCampusLeaderClose}
            >
                <MenuItem onClick={() => { handleMenuClick('Add Task'); handleCampusLeaderClose(); }}>Add Task</MenuItem>
                <MenuItem onClick={() => { handleMenuClick('Assign Task'); handleCampusLeaderClose(); }}>Assign Task</MenuItem>
                <MenuItem onClick={() => { handleMenuClick('View Student Database'); handleCampusLeaderClose(); }}>View Student Database</MenuItem>
                <MenuItem onClick={() => { handleMenuClick('Download Details'); handleCampusLeaderClose(); }}>Download Details</MenuItem>
                <MenuItem onClick={() => { handleMenuClick('View Details'); handleCampusLeaderClose(); }}>Forms</MenuItem>
                <MenuItem onClick={() => { handleMenuClick('Review Tasks'); handleCampusLeaderClose(); }}>Review Tasks</MenuItem>

            </Menu>

            <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f5f5', height: "100vh", overflow: 'scroll', p: 3 }}>
                <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3 }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Search sx={{ backgroundColor: '#f0f0f0', borderRadius: 2, width: 300 }}>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: '#888' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ color: '#333' }}
                            />
                        </Search>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton color="inherit">
                                <NotificationsIcon />
                            </IconButton>
                            <Avatar sx={{ ml: 2, width: 40, height: 40 }} >
                                {getAvatarInitials(user.name)}
                            </Avatar>
                        </Box>
                    </Toolbar>
                </AppBar>

                {renderContent()}
            </Box>
        </Box>
    );
}

export default AdminDashboard;
