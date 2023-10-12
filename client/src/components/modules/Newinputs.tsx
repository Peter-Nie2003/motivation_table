import React, { ButtonHTMLAttributes, ChangeEvent, useState } from "react";
import {get,post} from "../../utilities"


export default function Newinputs(){
    const [name,nameSetter] = useState<string>('');
    const [dueDate,dueDateSetter] = useState<string>('');
    const [difficulty, difficultySetter] = useState<number>(0);
    const [interest, interestSetter] = useState<number>(0);

    const handleName = (event: ChangeEvent<HTMLInputElement>) =>{
        nameSetter(event.target.value);
    }
    const handledueDate = (event:ChangeEvent<HTMLInputElement>) =>{
        dueDateSetter(event.target.value);
    }
    const handleDifficulty = (event:ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        difficultySetter(parseInt(value));
    }
    const handleInterest = (event:ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        interestSetter(parseInt(value));
    }
    const handleSubmit = () => {
        const body = {
            name: name,
            dueDate:dueDate,
            difficulty:difficulty,
            interest:interest,
        };
        post('api/newTasks',body);
    }
    return(
        <div className="u-flex">
        <input
          type="name"
          value={name}
          onChange={handleName}
          className="NewPostInput-input"
        />
        <input
          type="due day"
          value={dueDate}
          onChange={handledueDate}
          className="NewPostInput-input"
        />
        <input
          type="difficulty"
          value={difficulty === undefined ? '': difficulty.toString()}
          onChange={handleDifficulty}
          className="NewPostInput-input"
        />
        <input
          type="Interest"
          value={interest === undefined ? '': interest.toString()}
          onChange={handleInterest}
          className="NewPostInput-input"
        />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    );
}

