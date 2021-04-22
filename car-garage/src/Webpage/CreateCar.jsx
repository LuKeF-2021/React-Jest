import { useState } from "react";
import axios from "axios";
import React from "react";

const CreateCarButton = (carObj) => {
	const header = { "Access-Control-Allow-Origin": "*" };
	const baseURL = "http://18.133.181.100:9092";
	return axios
		.post(`${baseURL}/car/create`, carObj, { header })
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.error(error);
		});
};

const CreateCar = () => {
	const [carColour, setCarColour] = useState("");
	const [carDoors, setCarDoors] = useState(0);
	const [carGarageId, setCarGarageId] = useState(0);
	const [carMake, setCarMake] = useState("");
	const [carModel, setCarModel] = useState("");
	const [carName, setCarName] = useState("");

	const carObj = {
		colour: carColour,
		doors: carDoors,
        garage: {id:carGarageId},
		make: carMake,
		model: carModel,
		name: carName,
	};

	const Placeholder = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<h2>Add Car</h2>

			<form onSubmit={Placeholder}>
				<label>Colour: </label>
				<input
					name="carColour"
					type="text"
					value={carColour}
					onChange={(e) => setCarColour(e.target.value)}
				></input>


				<label>Doors: </label>
				<input
					name="carDoors"
					type="text"
					value={carDoors}
					onChange={(e) => setCarDoors(e.target.value)}
				></input>

                <label>Garage ID: </label>
				<input
					name="carGarageId"
					type="text"
					value={carGarageId}
					onChange={(e) => setCarGarageId(e.target.value)}
				></input>



				<label>Make: </label>
				<input 
                name="carMake" 
                type="text" 
                value={carMake} 
                onChange={(e) => setCarMake(e.target.value)}
                ></input>
				
                
                
                <label>Model: </label>
				<input
					name="carModel"
					type="text"
					value={carModel}
					onChange={(e) => setCarModel(e.target.value)}
				></input>


                


				<label>Name: </label>
				<input 
                name="carName" 
                type="text" 
                value={carName} 
                onChange={(e) => setCarName(e.target.value)}
                ></input>


				<br></br>


				<button className="btn" id="add-car" onClick={() => CreateCarButton(carObj)}>
					Add Car
				</button>

				<button className="btn" id="find-car-by-name">
					Find Car By Name
				</button>
				<button className="btn" id="show-cars">
					Show All Cars
				</button>
				<button className="btn" id="find-car-by-id">
					Find Car By ID
				</button>
				
			</form>
		</>
	);
};
export default CreateCar;
