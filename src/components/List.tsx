import { Card, Col, Row } from "react-bootstrap";
import { Task } from "../models/task.model";

const TaskList: React.FC<Task> = (props) => {
    return (
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Body>
                {props.description || 'No description provided'}
                <p>{props.status}</p>
            </Card.Body>
        </Card>
    );
}

export default TaskList;