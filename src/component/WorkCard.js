import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./WorkCard.css";
function WorkCard(prop) {
    return (
        <Card style={{ width: '21rem' , margin : 'auto' ,  }}>
            <Card.Img variant="top" src={prop.SRC} />
            <Card.Body>
                <Card.Title>{prop.ProjectName}</Card.Title>
                <Card.Text>
                    {prop.Summary}
                </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default WorkCard;