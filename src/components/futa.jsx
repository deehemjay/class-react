import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ImageComponent from "./ImageComponent";
import image from "../assets/ball 8 (2).png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "../App.css"
const Footer = () => {
    const textFooter = [
        {
            text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
            text2: "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non "
        }
    ]



  return (
      <Container-fluid>
        <Row className="bgColor ps-3 pb-3 pt-3 ">
            <Col md={3} className="me-md-0 me-5">
                <div className="d-flex flex-column align-items-center gap-3">           
                    <ImageComponent src={image} />
                    {textFooter.map((footertext) => {
                        return (
                            <div className="d-flex flex-column text-white ps-5">
                                <p>{footertext.text}</p>
                                <p>{footertext.text2}</p>                            
                            </div>

                        )
                    })}
                </div>
                <div className="d-flex gap-2 ps-5">
                    <FaFacebookF size={30} style={{color:"white"}} />
                    <FaXTwitter size={30} style={{color:"white"}}/>
                    <FaWhatsapp size={30} style={{color: "white"}}/>
                </div>
            </Col>

            <Col md={7} className="ms-md-0 ms-5">
                <Row className="pt-5 pe-5">
                    <Col className="text-white">
                    <h5>QUICK LINKS</h5>
                    <div>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>CONTACT</p>
                        <p>BLOG</p>
                    </div>
                    </Col>
                    <Col className="text-white bat-1">
                    <h5>GET IN TOUCH</h5>
                    <div className="d-flex flex direction-column foot-1">
                    <IoLocationSharp size={30} />
                    <p>30,ADEFIMIHAN STREET.ILASAMAJA.LAGOS</p>
                    </div>
                    <div className="d-flex flex direction-column foot-2">
                    <MdEmail size={20} />
                    <p>TALKTOME@GMAIL.COM</p>
                    </div>
                    <div  className="d-flex flex direction-column foot-3">
                    <FaPhoneAlt size={20} />
                    <p>0801234567</p>
                    </div>
                    </Col>
                    <Col>   
                    <h5 className="text-white">OUR NEWSLETTER</h5>
                    <p className="text-white">libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam 
                    </p>
                    <div>
                        <input type="email" placeholder="Email"  className="foot-4" />
                        <button className="foot-5 text-white">button</button>
                    </div>
                   </Col>
                </Row>
            </Col>
        </Row>

      </Container-fluid>
  );
};
export default Footer;
