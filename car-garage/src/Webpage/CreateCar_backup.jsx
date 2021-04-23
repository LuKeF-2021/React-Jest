// import { useEffect, useState } from 'react';
// import axios from "axios";
// import React from "react";
// import CarTable from './CarTable';

// const header = { "Access-Control-Allow-Origin": "*" };
// const baseURL = "http://18.133.181.100:9092";

// const CreateCarButton = (carObj) => {
// 	return axios
// 		.post(`${baseURL}/car/create`, carObj, { header })
// 		.then((response) => {
// 			console.log(response);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// };

// const carObj = {
// 	colour: carColour,
// 	doors: carDoors,
// 	garage: {id:carGarageId},
// 	make: carMake,
// 	model: carModel,
// 	name: carName,
// };

// const Placeholder = (e) => {
// 	e.preventDefault();
// };

// const CreateCar = () => {
	// const [carColour, setCarColour] = useState("");
	// const [carDoors, setCarDoors] = useState(0);
	// const [carGarageId, setCarGarageId] = useState(0);
	// const [carMake, setCarMake] = useState("");
	// const [carModel, setCarModel] = useState("");
	// const [carName, setCarName] = useState("");

	// const [info, setInfo] = useState([]);
	// // setting out error obj
    // const [error,setError]= useState(null);
    // // loading...
    // const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		axios

	// 			.get(`${baseURL}/car/read`, { header })
	// 			.then(() => {

	// 				(json => setData(json.data))
	// 		  }, [])

					// // console.log(response);
					// // console.log(response.data.data);
					// setIsLoaded(true);
					// setInfo(response.data)
					// //    console.log("info",info);

					
	// 			.catch((error) => {
	// 				setIsLoaded(true);
    //           		setError(error);
	// 			})
	// 	}, 10000)
	// }, [])
    

// http://18.133.181.100:9092/


	// if(error){
    //     return <h1>OH Noo something went wrong!!!! {error.message}</h1>
    // }else if (!isLoaded){
	// 	return(
	// 		<>
	// 		<p>please wait</p>
	// 		</>
	// 	)
	// 	}else {
	// 		return (
		
			/* <h2>Add Car</h2>

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
				
			</form> */

			
// 				<table>
// 					<thead>
// 						<tr>
// 							<th>colour</th>
// 							<th>doors</th>
// 							<th>id</th>
// 							<th>make</th>
// 							<th>model</th>
// 							<th>name</th>
// 							<th>garage</th>
// 						</tr>
// 					</thead>

// 					<tbody>
// 						{
// 							info.map((carList) => (
// 								<tr>
// 									<CarTable key = {carList.id} carList = {carList}/>
// 								</tr>
// 							))
// 						}
// 					</tbody>
// 				</table>
			
					
// 	);
					
// };
// }
// export default CreateCar;
