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
            <br></br>
            <button class="btn" id="add-garage">Add Garage</button>
            <button class="btn" id="delete-garage">Delete Garage</button>
            <button class="btn" id="show-garages">Show All Garage</button>
            <button class="btn" id="find-garages-by-id">Find Garage By ID</button>
            <button class="btn" id="update-garage">Update Garage</button>
            </form>
        </>
    );  
  }
export default CreateGarage;