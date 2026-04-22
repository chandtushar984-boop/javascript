import React from 'react'
import styled from "@emotion/styled"

const Homepage = () => {
  return (
    <div>
      
    </div>
  )
}

export default Homepage


const Button= Style.button`
        background-color$ {props=>props.danger ? "red": "green"};
        color:white;
        width:100px;
        height:30px;
        border-radius:10px;
    `