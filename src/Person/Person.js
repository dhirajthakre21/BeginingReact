// We are making component here 
// There are basically two methods one is class method then there is function method 

import React from 'react';
const Person = (data) => { // this are called as props also the argument simply object !!
	return  (
		<p> I'm a {data.name } and I'm {data.age} old  </p> 
			)  
 					}

export default Person ; 