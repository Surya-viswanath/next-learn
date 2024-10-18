import { Col, Row } from "react-bootstrap";
import image from './img.webp'
import Image from "next/image";


function Content() {
  return (
    <div>
        <Row style={{margin:'2% 5%'}}>
    <Col>

    <Image src={image} style={{width:'450px',height:'350px'}}/>
    </Col>
    <Col>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   
    </Col>
   </Row>
   <Row className="flex">
    <p>heyyy</p>
  <p>heloo</p>
   </Row>
   </div>
  )
};

export default Content;