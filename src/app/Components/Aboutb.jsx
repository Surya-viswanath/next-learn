import Link from "next/link";
import { Col, Row } from "react-bootstrap";


function Aboutb() {
  return (
    <div>
       
        <Row style={{margin:'3% 10%'}}>
        <h1 style={{fontSize:'34px',textAlign:'center',marginBottom:'3%'}}>ABOUT</h1>
            <Col>
            <img src="https://backoffice.cadburygifting.in/media/Content-image-1_1440x960.jpg?optimize=high&width=660&height=440" style={{borderRadius:'5px'}}/></Col>
            <Col>
            <p>Mondelez India Foods Private Limited (formerly Cadbury India Ltd.) is a part of Mondelez International, a world leader in biscuits, chocolate, gum, candy and powdered beverages. We operate in four categories – chocolate, beverages, biscuits and candy. Our most popular chocolate brands consist of Cadbury Dairy Milk, Cadbury Dairy Milk Silk, and Cadbury Celebrations.</p>
            <p>We have been in India for close to seven decades. Over the years the company has won customer's hearts, making us the market leaders in the chocolate making. Our flagship brand Cadbury Dairy Milk (CDM) is considered the "gold standard" for chocolate, and is fondly enjoyed by millions.</p>
            </Col>
            
        </Row>
        <Link href="/Home" style={{float:'right',marginRight:'5%',paddingBottom:'5%'}}>Back to home</Link>
    </div>
  )
};

export default Aboutb;