import CreateCar from "./CreateCar";
import CarTable from "./CarTable";

import CreateGarage from "./CreateGarage";
import "./WebpageStyling.css";

const Homepage = () => {
	return (
		<>
			<CreateGarage />
			<br></br>
			<br></br>
			<CreateCar />
			<button type="button" class="btn">create car</button>
			<br></br>
			<br></br>
			<CarTable />
		</>
	);
};
export default Homepage;
