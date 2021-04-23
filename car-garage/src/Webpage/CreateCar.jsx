import { useEffect, useState } from 'react';
import axios from "axios";
import React from "react";
import CarTable from './CarTable';


const CreateCar = () => {

const header = { "Access-Control-Allow-Origin": "*" };
const baseURL = "http://18.133.181.100:9092";

 //set our data
 const [info, setInfo] = useState([]);
 // setting out error obj
 const [error,setError]= useState(null);
 // loading...
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
	 setTimeout(()=>{
	 axios
		 .get(`${baseURL}/car/read`)
		 .then((response)=>{
			 console.log(response.data);
			 // console.log(response.data.data);
			 setIsLoaded(true);
			setInfo(response.data)
		 //    console.log("info",info);
		 })
		 .catch((error)=>{
			 setIsLoaded(true);
		   setError(error);
		 })
	  },2000)
 },[])

 if(error){
	 return <h1>OH Noo something went wrong!!!! {error.message}</h1>
 }else if (!isLoaded){
	 return(
		 <>
			 <p>Please wait.... we are getting your request</p>
		 </>
	 )
 }else{

 return(
	 <table>
		 <thead>
			 <tr>
				 <th>Id</th>
				 <th>Make</th>
				 <th>Model</th>
				 <th>Doors</th>
				 <th>Colour</th>
				 <th>Name</th>
				 <th>Garage</th>
			 </tr>
		 </thead>
		 <tbody>
			 {
				 info.map(({id,...keys})=>(
					 <tr>
						 <CarTable key={id} {...keys}/>
					 </tr>
				 ))
			 }

		 </tbody>
	 </table>
 )
		 }
}

export default CreateCar;