import React from "react";

const List = ({data}) =>{
    return (
        <>
         {data.map((el)=>{
             return  <li>{el}</li>
         })}
        </>
    )
}

export default List;