import React from 'react'

const Homepage = () => {
    const loggedin=true;
    if(loggedin){

        return (
            <button>Logout</button>
        )
            }
        return (
            <button>Login</button>
        )
}
return(
    loggedin?<button>Logout</button>: <button>Login</button>
)

export default Homepage
