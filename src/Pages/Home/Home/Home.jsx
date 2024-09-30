import About from "../About/About";
import Banner from "../Banner/Banner";
import CoreFeature from "../Feature/CoreFeature";
import PopulerProduct from "../PopulerProduct/PopulerProduct";
import ServiceContactInfo from "../ServiceContactInfo/ServiceContactInfo";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Textmonial from "../Textmonial/Textmonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceContactInfo></ServiceContactInfo>
            <PopulerProduct></PopulerProduct>
            <Team></Team>
            <CoreFeature></CoreFeature>
            <Textmonial></Textmonial>
        </div>
    );
};

export default Home;