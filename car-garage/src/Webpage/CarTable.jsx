import CarTableRow from "./CarTableRow";

const CarTable = () => {
	const Placeholder = (e) => {
		e.preventDefault();
	};

	const car = () => {
		//car api stuff
	};

	// DATA LAYOUT FROM API
	// [
	//     {
	//         colour: "string",
	//         doors: 0,
	//         id: 0,
	//         make: "string",
	//         model: "string",
	//         name: "string",
	//     },
	// ];

	return (
		<div>
			<table>
				<tr>
					<th>colour</th>
					<th>doors</th>
					<th>id</th>
					<th>make</th>
					<th>model</th>
					<th>name</th>
                    <th>garage</th>
				</tr>

				<CarTableRow />
			</table>
		</div>
	);
};
export default CarTable;
