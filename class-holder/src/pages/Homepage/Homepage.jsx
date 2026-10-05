import Footer from "../../components/futa";
import NavScrollExample from "../../components/Navbar";
import HeroHome from "./HeroHome";
import SectionFourHome from "./SectionFourHome";
import SectionOneHome from "./SectionOneHome";
import SectionThreeHome from "./SectionThreeHome";
import SectionTwoHome from "./SectionTwoHome";

const Homepage = () => {
  return (
    <div>
      <NavScrollExample />
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
