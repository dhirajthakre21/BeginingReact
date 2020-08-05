import React from 'react';
import './App.css';
import Person from './Person/Person.js'

function App() {
		return (
    		<div className="App">
		  		<h1> Hi there here is a React App !! </h1>
				<Person />
    		</div>
			
			//React.createElement('div' , {ClassName : 'App'} , React.createElement('h1', null , 'Dhiraj here' ) ) 
			//Here we have created element and returned to front page on calling function App . Which is default !!
			// the first parameter is tag , second is JavaScript object then there is a element !! 
  				
  				)
			};


export default App;
