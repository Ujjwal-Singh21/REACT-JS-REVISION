import React from "react";

function NameList(){
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h1> {name} </h1>)

    // approach-3 using map() outside return method
    return <div> {nameList} </div>

   // very nromal approach :-
   //------------------------
    // return(
    //     <div>
    //         <h1> {names[0]} </h1>
    //         <h1> {names[1]} </h1>
    //         <h1> {names[2]} </h1>
    //     </div>
    // )

     // approach-2 using map() to itertate and return new array :-
    //------------------------------------------------------------
    // return(
    //     <div>
    //         {
    //             names.map(name => <h1> {name} </h1>)
    //         }
    //     </div>
    // )
}

export default NameList