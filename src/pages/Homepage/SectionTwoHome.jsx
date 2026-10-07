import React from "react";
import ImageComponent from "../../components/ImageComponent";
import Container from "react-bootstrap/esm/Container";
import img from "../../assets/ball 4 (4).png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const SectionTwoHome = () => {
  return (
    <Container className="my-4">
      <div
        style={{ backgroundColor: "#D9D9D9" }}
        className="d-flex justify-content-between px-2 pt-4 pb-2 pic-1"
      >
        <ImageComponent src={img} />

        <ImageComponent src={img} />

        <ImageComponent src={img} />

        <ImageComponent src={img} />
      </div>
    </Container>
  );
};

export default SectionTwoHome;
