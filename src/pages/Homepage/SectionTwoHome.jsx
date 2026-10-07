import React from "react";
import ImageComponent from "../../components/ImageComponent";
import Container from "react-bootstrap/esm/Container";
import imgBall from "../../assets/ball 4 (4).png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../App.css";
const SectionTwoHome = () => {
    return (
        <Container className="my-4">
            <div
                style={{ backgroundColor: "#d9d9d9" }}
                className="d-flex justify-content-between px-2 pt-4 pb-2"
            >
                <div className="imgBall">
                    <ImageComponent src={imgBall} />
                </div>
                <div className="imgBall">
                    <ImageComponent src={imgBall} />
                </div>
                <div className="imgBall">
                    <ImageComponent src={imgBall} />
                </div>

                <div className="imgBall">
                    <ImageComponent src={imgBall} />
                </div>
            </div>
        </Container>
    );
};

export default SectionTwoHome;
