import React from "react"
import {useState} from "react"
import data from "./mock-up-data"


const App = () => {
const [people,setPeople] = useState(data)  

 return (
   // parent component
   <div className="h-screen w-full flex items-center">
     {/* child component */}
     <div className="w-[90%] mx-auto md:w-[40%] bg-white p-5 rounded-xl">
       <h1 className="black text-black font-bold p-4">{`${people.length} people`}</h1>

       {/* items or initial state */}
       <section>
         {people.map((person, index) => {
           const { id, name, age, image } = person;
           console.log(name);
           return (
             <div className=""  key={id}>
               <div className="text-purple-700 flex items-center space-x-2">
                 <img src={image} className="h-16 w-16 rounded-full p-2" />
                 <div>
                   <p className="font-bold">{name}</p>
                   <p className="text-purple-500">{age} years</p>                 </div>
               </div>
             </div>
           );
         })}
       </section>
       <p className="text-white text-center px-2 py-4 bg-purple-600 border-2 my-2 text-xl capitalize rounded-lg cursor-pointer" onClick={() => setPeople([])}>clear all </p>
     </div>
   </div>
 );
}

export default App