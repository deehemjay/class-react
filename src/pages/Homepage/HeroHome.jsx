import ImageComponent from "../../components/ImageComponent";

const HeroHome = () => {
    const menu = 20;

    return (
        <>
            <ImageComponent
                src=""
                style={{}}
                classN="hero1 d-flex align-items-center w-100 justify-content-center "
                text="Welcome to my world"
                hstyle={{
                    color: "white",
                    padding: "0% 5%",
                    //  backgroundColor:"yellow",
                    fontSize: "40px",
                    width: "79%",
                }}
            />
        </>
    );
};

export default HeroHome;
