import React , { useState} from 'react';
import './App.css';
// Functional Component 
// We use the hooks here instead of state we saw in the class based component 
import Person from './Person/Person.js' ; 
import Button from 'react-bootstrap/Button';

//Hooks are used in functional component while states are used in class based component . 
// this state only exist in classes 
// in functional states they does not exist 


const App = ()=> {
//The state object is where you store property values that belongs to the component
//When the state object changes, the component re-renders .
	const [personState , setPersonState]= useState ({ 
		persons : [
				{ name : 'Dhiraj Thakre' , age : '21'} , 
				{ name : 'Sandesh Vanwadi' , age : '22'}  
				
			
				  ] , 
		
	
	});
	const [colorState , setColorState ]= useState ({
		
		colors : [
			{
				 color : '#FF69B4'
				
			}
		]
		
	});
	const [showPersonState , setShowPersonState] = useState ({
		 showPerson : false 
	}) ; 
	
		const colorChanger =()=> 
		{	if (colorState.colors[0].color==='#FF69B4') 
				{
				setColorState ({
					colors : [
							{color : '#00FF7F'}
							 ] 
								});
				}
			else {
				setColorState ({
					colors : [
							{color : '#FF69B4' }
							 ] 
								});

			}

		}
	
	
		const switchNameHandler = (data) =>
		{

			if (personState.persons[0].name==='Dhiraj Thakre' ) 
					{
					setPersonState      ({
					persons : [
								{ name : data , age : '10' } , 
								{ name : 'Shrikant Patil ' , age : '15'} , 
								{ color : '#FF69B4'}


							  ]
										})
					}
			else 
					{
					setPersonState      ({
					persons : [
								{ name : 'Dhiraj Thakre' , age : '21'} , 
								{ name : 'Sandesh Vanwadi' , age : '22'} , 
								{ color : '#FF69B4'}

							  ]
										})

					}
		}
		const switchNameChanger = (event)=> 
		{		
				setPersonState      ({
				persons : [
							{ name : 'Dhiraj Thakre' , age : '21'} , 
							{ name : event.target.value , age : '22'} , 
							{ color : '#FF69B4'}
							
						  ]
						            })
			
			
		}
		
		const componentLoader = () => 
		{	
			if (showPersonState.showPerson=== false )
				{
			setShowPersonState ({
					showPerson : true })
				}	
				
			
			else {
				setShowPersonState ({
					showPerson : false })
				}	
			}
	
		let persons = null 	
		if (showPersonState.showPerson ) {
			persons= (
			
					<div style={{backgroundColor: colorState.colors[0].color }} 
						className="App">


						<h1 className='header'> Welcome to my Basic React App  !! </h1>

						<p> </p>
						<Button className='btn btn-danger btn-sm' 
						onClick={switchNameHandler.bind( this , 'Akash Raut')} >Click here to change the name ! </Button>
								<p> </p>
						<button className='btn btn-warning btn-sm'
							onClick={colorChanger}
							> Click here to change the color </button>

						<Person
							name = {personState.persons[0].name} 
							age = {personState.persons[0].age}  

							/>
						<Person 
							name = {personState.persons[1].name} 
							age = {personState.persons[1].age} 
							click= {switchNameHandler.bind(this , 'Sanket')}
							changed={switchNameChanger}

							 />

					</div> 
			
			
			)  ; 
		
			
		}

		return (		
			// pass this data to component 
			// this refers to global object 
			<div>
				<div className='App'>
					<Button className='btn btn-warning btn-sm' 
					onClick={componentLoader}
					> Switch ON and OFF the content </Button>
				</div>
				{persons}
			</div>
				)
			
			//React.createElement('div' , {ClassName : 'App'} , React.createElement('h1', null , 'Dhiraj here' ) ) 
			//Here we have created element and returned to front page on calling function App . Which is default !!
			// the first parameter is tag , second is JavaScript object then there is a element !! 
  				
	};			



export default App;
