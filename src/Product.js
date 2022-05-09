import React from 'react'




// props actually get passed in as a parameter to a functional component or class based component.
// and the way we are going to access it is simply by going aead and  do this (props.name) for eksample.
// this way we hook props with called (destructuring) so we can
function Product({name , description, price}) {
  return (


    <div>
        
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>${price}</h3>

        


    </div>
  )
}

export default Product



/* here anoher way to define a props
import React from 'react'



// props actually get passed in as a parameter to a functional component or class based component.
// and the way we are going to access it is simply by going aead and  do this (props.name) for eksample.
function Product(props) {
  return (


    <div>
        
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>${props.price}</h3>

    </div>
  )
}

export default Product

*/