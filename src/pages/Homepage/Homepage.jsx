import Footer from "../../components/futa";
import FormExample from "../../components/Navbar";
import CollapsibleExample from "../../components/Navbar";
import HeroHome from "./HeroHome";
import SectionFourHome from "./SectionFourHome";
import SectionOneHome from "./SectionOneHome";
import SectionThreeHome from "./SectionThreeHome";
import SectionTwoHome from "./SectionTwoHome";

const Homepage = () => {
  return (
    <div>
      < CollapsibleExample/>
         
      {/* <NavScrollExample /> */}
      <HeroHome />
      <SectionOneHome />
      <SectionTwoHome/>
      <SectionThreeHome/>
      <SectionFourHome />
      <Footer/>
    </div>
  );
};

export default Homepage;
