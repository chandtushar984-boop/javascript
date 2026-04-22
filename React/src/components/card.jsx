import React from 'react'

function Card(props) {
    console.log(props)
  return (
    <div>
        <div className="card">
              <img
                  src="https://images.unsplash.com/photo-1751181346935-06c6e56182b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                />
                <h1>{props.user}, {props.age}</h1>
                <p>Lorem ipsum, dolor sit amet 
                  consectetur adipisicing elit. Rem, libero.</p>
                <button>View profile</button>  
        </div>
    </div>
  )
}

export default Card
