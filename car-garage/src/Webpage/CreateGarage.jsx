const CreateGarage = () => {

    const Placeholder = e => {
        e.preventDefault();
    }

    return( 
        <>
            <form onSubmit={Placeholder}>
            <label>ID: </label>
            <input name="ID" type="text"></input>
            <label>Colour: </label>
            <input name="garageName" type="text"></input>
            </form>
        </>
    );
  }
export default CreateGarage;