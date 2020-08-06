import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person.js' ; 
import Button from 'react-bootstrap/Button';

//Hooks are used in functional component while states are used in class based component . 


class App extends Component {
	//The state object is where you store property values that belongs to the component
		    //When the state object changes, the component re-renders .
		state =  
		{ 
		persons : [
			{ name : 'Dhiraj' , age : '12'} , 
			{ name : 'Akash' , age : '21'} ,
			
						]
		} 
		switchNameHandler(data) {
			console.log(data)
		   if (this.state.persons[0].name==='Dhiraj' ) 
				{
		 		this.setState      ({
				persons : [
							{ name : 'Amruta' , age : '10' } , 
							{ name : data , age : '15'} 
						  ]
						            })
				}
		 	else 
				{
				this.setState      ({
				persons : [
							{ name : 'Dhiraj' , age : '12'} , 
							{ name : 'Akash' , age : '21'} 
						  ]
						            })
			 	
				}
		}

	   
		render() {
		return (
			// pass this data to component 
			// this refers to global object 
    		<div className="App">
		  		<h1> Hi there here is a React App !! </h1>
				<Button className='btn btn-danger btn-sm' onClick={()=>this.switchNameHandler('Amruta')} >Click here </Button>
				<Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} /> 
				<Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
    		</div>
				)
			
			//React.createElement('div' , {ClassName : 'App'} , React.createElement('h1', null , 'Dhiraj here' ) ) 
			//Here we have created element and returned to front page on calling function App . Which is default !!
			// the first parameter is tag , second is JavaScript object then there is a element !! 
  				
  				
};	};



export default App;
