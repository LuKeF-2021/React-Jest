// import axios from "axios";
// import { useEffect, useState } from 'react';

// const CarTable = ({carList}) => {


	// const DeleteCarButton = (carID) => {
	// 	const header = { "Access-Control-Allow-Origin": "*" };
	// 	const baseURL = "http://18.133.181.100:9092";
	// 	return axios
	// 		.delete(`${baseURL}/car/delete/${carID}`, { header })
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	//  //set our data
	//  const [info, setInfo] = useState([]);
	//  // setting out error obj
	//  const [error,setError]= useState(null);
	//  // loading...
	//  const [isLoaded, setIsLoaded] = useState(false);

	//  useEffect(() => {
	// 	const header = { "Access-Control-Allow-Origin": "*" };
	// 	const baseURL = "http://18.133.181.100:9092";

	// 	setTimeout(()=>{
	// 	axios
	// 		.get(`${baseURL}/car/read/`, { header })
	// 		.then((response)=>{
	// 			// console.log(response);
	// 			// console.log(response.data.data);
	// 			setIsLoaded(true);
	// 		   setInfo(response.data.data)
	// 		//    console.log("info",info);
	// 		})
	// 		.catch((error)=>{
	// 			setIsLoaded(true);
	// 		  setError(error);
	// 		})
	// 	 },1000 )
	// },[])

	// return (
		// <div>
		// 	<table>
		// 		<thead>
		// 			<tr>
		// 				<th>colour</th>
		// 				<th>doors</th>
		// 				<th>id</th>
		// 				<th>make</th>
		// 				<th>model</th>
		// 				<th>name</th>
		// 				<th>garage</th>
		// 			</tr>
		// 		</thead>

		// <tbody>
		// 	{cars.map((item) => (
		// 		<tr key={item.id}>
		// <>
		// 	<td>{carList.id}</td>
		// 	<td>{carList.make}</td>
		// 	<td>{carList.model}</td>
		// 	<td>{carList.doors}</td>
		// 	<td>{carList.colour}</td>
		// 	<td>{carList.name}</td>
		// 	<td>{carList.garage}</td>
			{/* <button className="btn" id="delete-car" onClick={() => DeleteCarButton(item.id)}>
								Delete Car
							</button> */}
						{/* <button className="btn" id="update-car">
									Update Car
						</button> */}
		
		// </>
		// 			))}
		// 		</tbody>
		// 	</table>
		// </div>
// 	);
// };
// export default CarTable;