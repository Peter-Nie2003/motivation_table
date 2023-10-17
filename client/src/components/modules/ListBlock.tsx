import React, { useEffect,useState } from "react";
import { get } from "../../utilities";

interface ListBlockProps {
    id:number,
}
function ListBlock (props:ListBlockProps){

  const [List,setList]=useState([]);
  
  useEffect(() => {
    get("/api/tasks",{id:props.id}).then((tasks) => {
        setList(tasks);
    })
});

  let todoList = null;
  const havetask = List.length !== 0;

  if(havetask){
    
  }


}