import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ImageComponent from "../../components/ImageComponent"
import img from "../../assets/wp8724558 1 (3).png"

const SectionThreeHome = () => {
    return (
        <>
        <Container className="my-5">
            <Row className="justify-content-between">
                <Col md={5} className="text-md-start text-center" >
                <h4>Our services...</h4>
                    <p>
                        dui lorem. tincidunt in dignissim, efficitur. venenatis gravida vitae faucibus ultrices tincidunt quis venenatis vel Donec 

Ut In Donec risus volutpat sed sollicitudin. viverra libero, libero,<br /> sit tincidunt urna. Nunc quis id adipiscing ex dolor 

dui lorem. tincidunt in dignissim, efficitur. venenatis gravida vitae faucibus ultrices tincidunt quis venenatis vel Donec 

Ut In Donec risus volutpat sed sollicitudin. viverra libero, libero, sit tincidunt urna. Nunc quis id adipiscing ex dolor 

                    </p>
                </Col>
                <Col md={6}>
                    <ImageComponent src={img}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SectionThreeHome