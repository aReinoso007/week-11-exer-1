
import { Container, Stack } from 'react-bootstrap';
import './App.css';
import TaskList from './components/List';
import { Task } from './models/task.model';

function App() {
  
  const taslList: Task[] = [
    { id: '1', title: 'Task 1', description: 'This is task 1', status: 'OPEN' },
    { id: '2', title: 'Task 2', status: 'IN_PROGRESS' },
    { id: '3', title: 'Task 3', description: 'This is task 3', status: 'DONE' },
  ]

  return (
    <Container>
      <h1>Task List</h1>
      <Stack direction='horizontal'>
        {taslList.map((task) => (
          <TaskList {...task} />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
