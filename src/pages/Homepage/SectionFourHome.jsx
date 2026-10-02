import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import firstImg from "../../assets/Logos-2048x1152 1 (2).png";
import secondImg from "../../assets/ball 8 (2).png";
import thirdImg from "../../assets/menu-burger 2 (2).png";
import ImageComponent from "../../components/ImageComponent";

const SectionFourHome = () => {
  const listArray = [
    {
      img: firstImg,
      text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
      text2:
        "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non ",
    },
    {
      img: secondImg,
      text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
      text2:
        "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non",
    },
    {
      img: thirdImg,
      text: "libero, Nunc faucibus Praesent Nam eget turpis volutpat est. volutpat gravida ultrices volutpat elit elit. facilisis quam ",
      text2:
        "nec orci non Nunc ac id vitae amet, lorem. Quisque Lorem tincidunt Praesent sodales. quam Cras odio malesuada faucibus non",
    },
  ];
  return (
    <Container
      style={{
        marginBottom: 151,
      }}
    >
      <Row className="justify-content-between">
        {listArray.map((rectangle, index) => {
          return (
            <Col
              md={3}
              style={{
                padding: 21,
                color:" white",
                backgroundColor:
                  index === 0 ? "#EE9C30" : index === 1 ? "#DF14D8" : "#389457",

              }}
              className="d-flex flex-column align-items-center"
            >
              <ImageComponent src={rectangle.img} />
              <p className="text-center">{rectangle.text}</p>

              <p className="text-center">{rectangle.text2}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SectionFourHome;
