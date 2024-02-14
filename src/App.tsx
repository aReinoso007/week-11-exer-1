
import { Container, Stack } from 'react-bootstrap';
import './App.css';
import TaskList from './components/TaskList';
import { Task } from './models/task.model';

function App() {
  
  const tasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'This is task 1', status: 'OPEN' },
    { id: '2', title: 'Task 2', status: 'IN_PROGRESS' },
    { id: '3', title: 'Task 3', description: 'This is task 3', status: 'DONE' },
  ]

  return (
    <Container>
      <h1>Task List</h1>
      <Stack direction='horizontal'>
        {tasks.map((task) => (
          <TaskList {...task} />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
