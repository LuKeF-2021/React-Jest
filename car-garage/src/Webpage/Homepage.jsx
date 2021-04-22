import CreateCar from "./CreateCar";
import CarTable from "./CarTable";
import CreateGarage from "./CreateGarage";
import './WebpageStyling.css';

const Homepage = () => {
    return( 
    <>

  

    <CreateGarage/>
    <br></br>
    <br></br>
    <CreateCar/>
      <br></br>
    <br></br>
<CarTable/>

    </>
    );
  }
export default Homepage;