import ImageComponent from "../components/ImageComponent";
import Navbar from "../components/Navbar";
import img from "../assets/ChatGPT Image Sep 24, 2026, 04_57_56 PM.png";

const Aboutpage = () => {
  return (
    <div>
      <Navbar
        text="for about"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5gitpx 40px",
        }}
        className="textChange"
      />
       <ImageComponent src={img} />
    </div>
  );
};

export default Aboutpage;
