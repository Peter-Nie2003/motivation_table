import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import listSchema from "../../../../shared/Lists";
import ListBlock from "./ListBlock";
import SubmitLists from "./SubmitLists";
import "../../utilities.css"


export default function Schedule() {
    const [listObject, listObjectSetter] = useState([]);
    useEffect(() => {
        get("/api/getLists").then((lists) => {
            listObjectSetter(lists);
        })
    }, []);
    let listList: React.ReactNode | null = null;
    const haveLists: boolean = listObject.length !== 0;

    const addNewList =(list)=>{
      listObjectSetter(listObject.concat(list));
    }
    if (haveLists) {
        listList = listObject.map((task: listSchema) => (
            <ListBlock
                key={task.name}
                name={task.name}
            />
        ));
    } else {
        listList = <div>no workSpace here</div>;
    }
    return (

        <div className="container">
            <SubmitLists addNewList={addNewList}/>
            {listList}
        </div>
    );
};