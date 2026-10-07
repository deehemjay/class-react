import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ImageComponent from "./ImageComponent";
import image from "../assets/ball 8 (2).png";
import locate from "../assets/Vector (8).png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
const Footer = () => {
    return (
        <Container fluid>
            <Row
                className=""
                style={{
                    backgroundColor: "#2F2C31",
                    height: "270px",
                    paddingTop: "20px",
                }}
            >
                <Col style={{}} className=" w-75"  >
                    <div className=" w-50 d-flex justify-content-center">
                        <ImageComponent
                            style={{
                                width: "55px",
                                display: "flex",
                            }}
                            src={image}
                        />
                    </div>
                    <div className=" w-50">
                        <p
                            style={{
                                fontSize: "13px",
                                color: "white",
                                fontWeight: "5px",
                            }}
                        >
                            libero, Nunc faucibus Praesent Nam eget turpis
                            volutpat est. volutpat gravida ultrices <br />
                            <br />
                            nec orci non Nunc ac id vitae amet, lorem. Quisque
                            Lorem tincidunt Praesent sodales. quam{" "}
                        </p>
                    </div>
                    <div className=" w-50">
                        <FaFacebookF size={30} style={{ color: "white" }} />
                         <FaXTwitter size={30} style={{ color: "white" }} />
                         <FaWhatsapp size={30} style={{ color: "white" }} />
                    </div>
                </Col>

                <Col>
                    <h3 className="text-white">QUICK LINK</h3>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <a href="http://" className="link">
                            HOME
                        </a>
                        <a href="#" className="link">
                            ABOUT
                        </a>
                        <a href="http://" className="link">
                            CONTACT
                        </a>
                        <a href="http://" className="link">
                            BLOG
                        </a>
                    </div>
                </Col>

                <Col>
                    <h3 className="text-white">GET IN TOUCH</h3>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <img
                            style={{
                                width: "15px",
                                height: "18px",
                            }}
                            src={locate}
                            alt=""
                        />
                        <p className="text-white">
                            30, ADEFIMIHAN STREET.ILASAMAJA. LAGOS.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <img
                            style={{
                                width: "15px",
                                height: "18px",
                            }}
                            src={locate}
                            alt=""
                        />
                        <p className="text-white">
                            30, ADEFIMIHAN STREET.ILASAMAJA. LAGOS.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <img
                            style={{
                                width: "15px",
                                height: "18px",
                            }}
                            src={locate}
                            alt=""
                        />
                        <p className="text-white">
                            30, ADEFIMIHAN STREET.ILASAMAJA. LAGOS.
                        </p>
                    </div>
                </Col>

                <Col>
                    <h3 className="text-white">OUR NEWS LETTER</h3>
                    <p className="text-white">
                        libero, Nunc faucibus Praesent Nam eget turpis volutpat
                        est. volutpat gravida ultrices volutpat elit elit.
                        facilisis quam
                    </p>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <input
                                style={{
                                    border: "1 white solid",
                                    backgroundColor: "transparent",
                                    outline: "none",
                                    width: "231px",
                                    paddingTop: "8.3px",
                                    paddingRight: "17px",
                                    paddingBottom: "8.3px",
                                    color: "white",
                                }}
                                type="Email"
                                placeholder="EMAIL"
                            />
                            <button
                                style={{
                                    width: "130px",
                                    // height: "28px",
                                    backgroundColor: "transparent",
                                    border: "1 solid white",
                                    padding: "8px 33px",
                                    color: "white",
                                    borderRadius:"none"
                                }}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

// const Footer = () => {
//     const textFooter = [
//         {
//             text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
//             text2: "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non "
//         }
//     ]

//   return (
//       <Container-fluid>
//         <Row className="bgColor">
//             <Col md={3}>
//                 <div className="d-flex flex-column align-items-center gap-3">
//                     <ImageComponent src={image} />
//                     {textFooter.map((footertext) => {
//                         return (
//                             <div className="d-flex flex-column text-white">
//                                 <p>{footertext.text}</p>
//                                 <p>{footertext.text2}</p>
//                             </div>

//                         )
//                     })}
//                 </div>
//                 <div className="d-flex gap-2">
//                     <FaFacebookF size={30} style={{color:"white"}} />
//                     <FaXTwitter size={30} style={{color:"white"}}/>
//                     <FaWhatsapp size={30} style={{color: "white"}}/>
//                 </div>
//             </Col>

//             <Col md={7}>
//                 <Row>
//                     <Col>
//                     </Col>
//                     <Col>
//                     </Col>
//                     <Col>
//                     </Col>
//                 </Row>
//             </Col>
//         </Row>

//       </Container-fluid>
//   );
// };
export default Footer;
