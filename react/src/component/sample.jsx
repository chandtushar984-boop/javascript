import { useEffect } from "react"






























































useEffect(()=>{}



const fetchData=async()=>{
    const data=await fetch("https://jsonplaceholder.tyicode.com/todos/1",{
        method:"GET"
    })
    const json =await data.json()
    console.log(json)
}
fetchData()