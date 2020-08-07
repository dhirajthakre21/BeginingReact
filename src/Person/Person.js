// We are making component here 
// There are basically two methods one is class method then there is function method 

import React from 'react';
const Person = (data) => { // this are called as props also the argument simply object !!
	if(data.name==='Dhiraj Thakre' || data.name==='Akash Raut' ) 
			{
				return  (
					<div>	
					<p onClick={data.click} >   I'm a {data.name } and I'm {data.age} old </p>
					<input type='text' onChange={data.changed } ></input>
					<p> </p>	
					</div>
		
						)  }
 				  
	else 
		{
			return( <div>	
					<p onClick={data.click} >   I'm a {data.name } and I'm {data.age} old </p>
					<input type='text' placeholder='Enter name to change 'onChange={data.changed } value={data.name} ></input>
					<p> </p>	
					</div>
			
					)
			}
}

export default Person ; 