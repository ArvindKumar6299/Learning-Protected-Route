import { useState } from "react"




const skills = [
    {language: "C++ , javaScript" , tech:true, id:1},
    {language: "React, NodeJs, MongoDb, Nextjs", tech:false , id:2},
]

const details = skills.map( skill =>
    <li key={skill.id} 
     style={{color:skill.tech ? "orange": "green"}}
    >
     {skill.language}</li>
)



function Button(){
    const [count, setCount] = useState("0");
    function handleclick(){
        alert("Hello Mr. Arvind! "+ setCount(count+1));
        console.log(count);
    }
    return(
      <button onClick={handleclick}  className="border-2 border-green-900 text-orange-700 rounded-lg p-2 font-bold bg-slate-400 flex justify-center m-auto">Click to know me more! {count}</button>
    )
}



const student1 = {
    name: "Arvind",
    role: "Developer",
    age: 22,
    imageUrl: "https://www.bing.com/th?id=OIP.YoTUWMoKovQT0gCYOYMwzwHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    imageSize: '90',
}


function Practice(){
   return (
    <>
    
    <h1 className="text-center">{student1.name}</h1>
    <h2 className="text-center">{student1.role}</h2>
    <img src={student1.imageUrl} alt={'photo of -'+student1.name}  className="rounded-lg size-60 m-auto p-5"/>
      <h3 className="text-center text-blue-600 font-bold">I am most proficient in TechStack </h3>  
       <ul className="text-center pb-5">
        {details}
       </ul>

    

    <Button/>

    </>
   )
}

export default Practice;