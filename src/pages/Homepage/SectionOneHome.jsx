import React from "react";
import Container from "react-bootstrap/esm/Container";
import ImageComponent from "../../components/ImageComponent";
import image from "../../assets/wp8724545 1 (5).png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const SectionOneHome = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-between">
                <Col md={6}>
                    <ImageComponent src={image} />
                </Col>
                <Col md={4} >
                    <h2 className="text-md-start text-center">INFORMATION</h2>
                    <p className="text-md-start text-center">
                        sodales. ex venenatis ex. Vestibulum ullamcorper non non
                        Nullam id vitae sit lacus, non Donec ex non tincidunt
                        nisl. cursus massa quis Ut lacus, facilisis Ut laoreet
                        elementum nec Lorem lorem. lorem. vehicula, urna at leo.
                        ultrices faucibus laoreet Nullam nulla, ex hendrerit
                        tincidunt ex efficitur. placerat. turpis ex. felis, eget
                        tincidunt tincidunt at elit. placerat tincidunt libero,
                        ullamcorper faucibus orci sodales. ex ex Lorem libero,
                        lobortis, nec libero, varius at Praesent viverra tempor
                        ex. quis Nunc non, eu ullamcorper faucibus sit
                        efficitur. non, sollicitudin. quis faucibus odio
                        Vestibulum non, consectetur placerat faucibus elit non.
                        leo. leo. nisi quis Nam in Lorem Nam lacus, nulla,
                        vehicula, Quisque Quisque at vitae Nunc In cursus id
                        commodo dui. ex nulla, Sed Nunc at sodales. volutpat ex.
                        ac Lorem Ut vehicula, Nullam urna. fringilla quam vel
                        urna. Nam adipiscing venenatis varius efficitur. odio
                        ultrices scelerisque non ex
                    </p>
                    <div className="d-flex  justify-content-center">
                        <Button style={{
                          border:" 2px solid  #D9D9D9", 
                          backgroundColor: "transparent",
                          color:"black",
                          padding: "10px 40px"
                        }}>CLICK FOR MORE</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionOneHome;
