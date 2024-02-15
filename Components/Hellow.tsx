import React from "react";
type Person = {
    name: string,
    age : number
   }
const Hellow: React.FC<Person> = (ChildProps) => {
    return <h1>Hellow { ChildProps.age} {ChildProps.name} </h1>
}

export default Hellow;