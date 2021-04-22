const CreateGarage = () => {

    const Placeholder = e => {
        e.preventDefault();
    }

    return( 
        <>
        <h2>Add Garage</h2>
            <form onSubmit={Placeholder}>
            <label>ID: </label>
            <input name="ID" type="text"></input>
            <label>Name: </label>
            <input name="garageName" type="text"></input>
            </form>
        </>
    );
  }
export default CreateGarage;