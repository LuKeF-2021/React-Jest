const CarTableRow = (car) => {
	return (
		<>
			<tr>
				<td>{car.id}</td>
				<td>{car.colour}</td>
				<td>{car.doors}</td>
				<td>{car.name}</td>
				<td>{car.make}</td>
				<td>{car.model}</td>
				<td>{car.garage_id}</td>
			</tr>
		</>
	);
};
export default CarTableRow;
