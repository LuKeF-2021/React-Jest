import CreateCar from "./CreateCar";
import CreateGarage from "./CreateGarage";
import './WebpageStyling.css';

const Homepage = () => {
    return( 
    <>
    <CreateGarage/>
    <br></br>
    <br></br>
    <CreateCar/>
    </>
    );
  }
export default Homepage;