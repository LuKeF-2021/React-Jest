const CarTable = () => {
	const Placeholder = (e) => {
		e.preventDefault();
	};

	const car = [
		{
			colour: "red",
			doors: 4,
			id: 1,
			make: "tesla",
			model: "model 3",
			name: "flash",
		},
		{
			colour: "blue",
			doors: 2,
			id: 2,
			make: "jaguar",
			model: "XJ",
			name: "shreddies",
		},
		{
			colour: "grey",
			doors: 4,
			id: 3,
			make: "bmw",
			model: "x27",
			name: "haydon",
		},
	];

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
				{car.map((item) => (
					<tr key={item.id}>
						<th>{item.colour}</th>
						<th>{item.doors}</th>
						<th>{item.id}</th>
						<th>{item.make}</th>
						<th>{item.model}</th>
						<th>{item.name}</th>
						<th>{item.garage}</th>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};
export default CarTable;
