import axios from "axios";

const CarTable = () => {
	const Placeholder = (e) => {
		e.preventDefault();
	};

	// const car = [
	// 	{
	// 		colour: "red",
	// 		doors: 4,
	// 		id: 1,
	// 		make: "tesla",
	// 		model: "model 3",
	// 		name: "flash",
	// 	},
	// 	{
	// 		colour: "blue",
	// 		doors: 2,
	// 		id: 2,
	// 		make: "jaguar",
	// 		model: "XJ",
	// 		name: "shreddies",
	// 	},
	// 	{
	// 		colour: "grey",
	// 		doors: 4,
	// 		id: 3,
	// 		make: "bmw",
	// 		model: "x27",
	// 		name: "haydon",
	// 	},
	// ];

	const ReadAll = () => {
		const header = { "Access-Control-Allow-Origin": "*" };
		const baseURL = "http://18.133.181.100:9092";
		const allCarObj = axios
			.get(`${baseURL}/car/read/`, { header })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
			console.log(allCarObj);
			return allCarObj;
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
					{ReadAll.map((item) => (
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
