import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./WorkCard.css";
function WorkCard(prop) {
    return (
        <Card style={{ width: '21rem' , marginLeft : 'auto' ,  }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
                <Card.Title>{prop.ProjectName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default WorkCard;