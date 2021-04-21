const CreateCar = () => {

    const Placeholder = e => {
        e.preventDefault();
    }

    return( 
        <>
            <form onSubmit={Placeholder}>
            <label>ID: </label>
            <input name="ID" type="text"></input>
            <label>Colour: </label>
            <input name="carColour" type="text"></input>
            <label>Doors: </label>
            <input name="carDoors" type="text"></input>
            <label>Make: </label>
            <input name="carMake" type="text"></input>
            <label>Model: </label>
            <input name="carModel" type="text"></input>
            <label>Name: </label>
            <input name="carName" type="text"></input>
            </form>
        </>
    );
  }
export default CreateCar;