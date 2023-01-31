import React from "react";
import { useState } from "react";

function Todoapp() {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [indexnum, setIndexnum] = useState()
    function Addtodo() {
        if (indexnum > -1) {
            todo[indexnum] = text
            setTodo([...todo])
            setIndexnum(-1)
          } else {
            setTodo([...todo, text])
          }
          setText("")
    }

    function Deletebtn(i){
        todo.splice(i , 1)
        setTodo([...todo])
    }

    function DeleteAll(){
        setTodo([])
    }
    function editbtn (i){
        setIndexnum(i)
        setText(todo[i])
      }

    return (
        <>
            <div className="main">
                <h1 className="heading">ToDo App</h1>
                <input type="text" placeholder="Enter Your Text Here" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button onClick={Addtodo}>Add ToDo</button>
                <button onClick={DeleteAll}>Delte All</button>
                <p className="todoyou">Your ToDo's</p>
                {todo.map((item, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className="show">{item}</div>
                                <button className="btn" onClick={()=>Deletebtn(i)}>Delete</button>
                                <button className="btn" onClick={()=>editbtn(i)}>Edit</button>
                            </p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Todoapp