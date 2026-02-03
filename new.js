// // const para1=document.getElementById("para")
// // para1.innerText="this is a new paragraph"
// // para1.style.color="green"
// // console.log(para1)

// // const para2=document.getElementsByClassName('para')
// // para2[0].innerText="this is a new paragraph
// // para2[1].style.color='blue'
// // console.log(para2)
//  const para2=document.getElementsByClassName("para")
//  para2[0].innerText="This is a new program"
//  para2[1].style.color='green'
//  console.log(para2)

//  const para=document.querySelectorAll(".para")
//  para[0].innerText="this is a new paragraph"
//  para[1].style.color="green"
//  console.log(para )
// const containe= document.querySelector( ".conrainer")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)
// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.addEventListener('click',function(){alert("You have clisked the button")})
// btn.removeEventListener('click',message)

// function message(event)
// {
//     console.log(event.key)

// }
// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.addEventListener('keyup',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("Form Submitted")})


// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')

// console.log(b)

// let a=2534;
// var b=5674;
// console.log(a)
// console.log(b)
 
// function print(){
//     conosle.log("inside fn");
// }

//  print()


//  function first(){
//     second()
//  }
//  function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()
// function infinite(){
//     infinite()
// }
// infinite()

// let total=40;
// function calculate(){
//     console.log(total)
//     let total=199
// }


// console.log("first line")
// console.log("second line")
// setTimeout(()=>{console.log("after 2 second")},2000)

// setTimeout(()=>{
//     alert("line after 2 second")
// },2*1000)

// setInterval(()=>{
//     console.log("set interval")
// },1000)

// const timerID=setInterval(()=>{
//     console.log("set interval")
// },1000)
// const timeoutID=setTimeout(()=>{
//     clearInterval(timerID)node 
// },1000)

// var a=1;
// let b=10; 
// const timerID=setTimeout(()=>{
//     console.log(a)
//     a++;

// },1000)
// const timeroutID=setInterval(()=>{
//     console.log("")
// })

// let num=1;
// const id=setInterval(()=>{
//     if(num===10)clearInterval(id)
//     console.log(num)
//     num++
// },1000)

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===''){alert("enter the name")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement("button")
//     dlt.innerText="Delete";
//     li.innerText=name.value;
//     list.appendChild(li)
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     le.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// })

// console.log("first line")
// setTimeout(()=>{
//     console.log("after 5 sec")},5000)
// console.log("second line")

// function print(num){
//     console.log("insdide print")
//         num()
// }
// function sample(){
//     console.log("inside callback")
// }
// print(sample)


// console.log("starting homework");
// setTimeout(()=>{
//     console.log('homewoek done!');
//     console.log('starting dinner');

//     setTimeout(()=>{
//         console.log('dinner done');
//         console.log("getting ready to go out");
        
//         setTimeout(()=>{
//             console.log('going to the playground');
//         },1000);

//     },1500);
// },2000);