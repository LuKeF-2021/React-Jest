import { useState } from "react";
import axios from 'axios';

const CreateGarageButton = (garageObj) => {
	    const header = {"Access-Control-Allow-Origin":"*"}
	    const baseURL = 'http://18.133.181.100:9092'
	    return(
		            axios.post(`${baseURL}/garage/create`, garageObj, {header})
		            .then(response => {
				                console.log(response)
				            }).catch(error => {
						                console.error(error)
						            })
		        );

}

const DeleteGarageButton = (id) => {
	    const header = {"Access-Control-Allow-Origin":"*"}
	    const baseURL = 'http://18.133.181.100:9092'
	    return(
		            axios.delete(`${baseURL}/garage/delete/${id}`, id, {header})
		            .then(response => {
				                console.log(response)
				            }).catch(error => {
						                console.error(error)
						            })
		        );

}

const ShowGarageButton = (garageObj) => {
	    const header = {"Access-Control-Allow-Origin":"*"}
	    const baseURL = 'http://18.133.181.100:9092'
	    return(
		            axios.get(`${baseURL}/garage/read`, garageObj, {header})
		            .then(response => {
				                console.log(response)
				            }).catch(error => {
						                console.error(error)
						            })
		        );

}
const ShowGarageByIDButton = (garageObj) => {
	    const header = {"Access-Control-Allow-Origin":"*"}
	    const baseURL = 'http://18.133.181.100:9092'
	    return(
		            axios.get(`${baseURL}/garage/read`, garageObj, {header})
		            .then(response => {
				                console.log(response)
				            }).catch(error => {
						                console.error(error)
						            })
		        );

}

const UpdateGarageButton = (id) => {
	    const header = {"Access-Control-Allow-Origin":"*"}
	    const baseURL = 'http://18.133.181.100:9092'
	    return(
		            axios.put(`${baseURL}/garage/update/${id}`, id, {header})
		            .then(response => {
				                console.log(response)
				            }).catch(error => {
						                console.error(error)
						            })
		        );

}


const CreateGarage = () => {

	    const [garageName, setGarageName] = useState("");

	    const garageObj = {
		            "name": garageName

		        }

	    const Placeholder = e => {
		            e.preventDefault();
		        }

	    return( 
		            <>
		            <h2>Add Garage</h2>
		                <form onSubmit={Placeholder}>
		                <label>Name: </label>
		                <input name="garageName" type="text" onChange={e => setGarageName(e.target.value)}></input>
		                <br></br>
		                <button className="btn" id="add-garage" onClick={() => CreateGarageButton(garageObj)}>Add Garage</button> 
		                <button className="btn" id="delete-garage" onClick={() => DeleteGarageButton(garageObj)}>Delete Garage</button>
		                <button className="btn" id="show-garages" onClick={() => ShowGarageButton(garageObj)}>Show All Garage</button>
		                <button className="btn" id="find-garages-by-id" onClick={() => ShowGarageByIDButton(garageObj)}>Find Garage By ID</button>
		                <button className="btn" id="update-garage" onClick={() => UpdateGarageButton(garageObj)}>Update Garage</button>
		                </form>
		            </>
		        );  
	  }
export default CreateGarage;
