import axios from "axios";
import { useEffect, useState } from 'react';

const CarTable = () => {


	const Placeholder = (e) => {
		e.preventDefault();
	};



	const DeleteCarButton = (carID) => {
		const header = { "Access-Control-Allow-Origin": "*" };
		const baseURL = "http://18.133.181.100:9092";
		return axios
			.delete(`${baseURL}/car/delete/${carID}`, { header })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

 //set our data
 const [info, setInfo] = useState([]);
 // setting out error obj
 const [error,setError]= useState(null);
 // loading...
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
	const header = { "Access-Control-Allow-Origin": "*" };
	const baseURL = "http://18.133.181.100:9092";

	setTimeout(()=>{
	axios
		.get(`${baseURL}/car/read/`, { header })
		.then((response)=>{
			// console.log(response);
			// console.log(response.data.data);
			setIsLoaded(true);
		   setInfo(response.data.data)
		//    console.log("info",info);
		})
		.catch((error)=>{
			setIsLoaded(true);
		  setError(error);
		})
	 },1000 )
},[])




	



	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>colour</th>
						<th>doors</th>
						<th>id</th>
						<th>make</th>
						<th>model</th>
						<th>name</th>
						<th>garage</th>
					</tr>
				</thead>

				<tbody>
					{info.map((item) => (
						<tr key={item.id}>
							<th>{item.colour}</th>
							<th>{item.doors}</th>
							<th>{item.id}</th>
							<th>{item.make}</th>
							<th>{item.model}</th>
							<th>{item.name}</th>
							<th>{item.garage}</th>
							<button className="btn" id="delete-car" onClick={() => DeleteCarButton(item.id)}>
								Delete Car
							</button>
							<button className="btn" id="update-car">
								Update Car
							</button>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default CarTable;
