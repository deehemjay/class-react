import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ImageComponent from "./ImageComponent";
import image from "../assets/ball 8 (2).png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const textFooter = [
        {
            text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
            text2: "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non jdjjeje "
        }
    ]



  return (
      <Container-fluid>
        <Row className="bgColor">
            <Col md={3}>
                <div className="d-flex flex-column align-items-center gap-3">           
                    <ImageComponent src={image} />
                    {textFooter.map((footertext) => {
                        return (
                            <div className="d-flex flex-column text-white">
                                <p>{footertext.text}</p>
                                <p>{footertext.text2}</p>                            
                            </div>

                        )
                    })}
                </div>
                <div className="d-flex gap-2">
                    <FaFacebookF size={30} style={{color:"white"}} />
                    <FaXTwitter size={30} style={{color:"white"}}/>
                    <FaWhatsapp size={30} style={{color: "white"}}/>
                </div>
            </Col>

            <Col md={7}>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Col>
        </Row>

      </Container-fluid>
  );
};
export default Footer;
