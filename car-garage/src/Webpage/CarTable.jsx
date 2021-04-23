
const CarTable = ({id,make,model, doors, colour, name, garage}) => {
	// console.log(cars)
	return (
		<>
			<td>{id}</td>
			<td>{make}</td>
			<td>{model}</td>
			<td>{doors}</td>
			<td>{colour}</td>
			<td>{name}</td>
			<td>{garage}</td>
		</>
	);
};
export default CarTable;
