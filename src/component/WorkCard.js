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
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default WorkCard;