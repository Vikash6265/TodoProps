
import { useState } from "react";
import Form from "./Form";
import ListGroup from "./ListGroup";
import Navbar from "./components/Navbar";

const App = () =>{

  let name = "Best Todo List in React";
  let version = 1.2;

  // let numbers = ([
  //   {id:1,text:"C"},
  //   {id:2,text:"C++"},
  //   {id:3,text:"Java"},
  //   {id:4,text:"Python"},
  //   {id:5,text:"HTML"},
  // ]);

  const [numbers,setNumber] = useState([
    // {id:1,text:"C"},
    // {id:2,text:"C++"},
    // {id:3,text:"Java"},
    // {id:4,text:"Python"},
    // {id:5,text:"HTML"},     // ab enko display hone ki koi jarurat nhi he kyuki new add ho rha
  ])


  const deleteNumber = (id) =>{
    
    setNumber(numbers.filter((item=> item.id !== id)));

  }

  const addNumber = (text) =>{
    
    const newItem = {
      id:crypto.randomUUID(),
      text:text,
    }
    
    // console.log(newItem);
    setNumber([newItem,...numbers])
  }

  const [edit,setEdit] = useState({
    oldItem : {},
    editMode : false,
  });

  const editNumber = (oldItem) =>{

    setEdit({
      oldItem : oldItem,
      editMode : true,
    });

  }

  const updateNumber = (oldId,newItem) =>{
    setNumber(numbers.map((item) => item.id === oldId ? {id:oldId,text:newItem}: item))
  }

  return(
    <>
      <Navbar name ={name} version = {version}/>              
      <div className="container p-5">
       <Form addNumber = {addNumber} edit = {edit} updateNumber = {updateNumber}/>
       <ListGroup  numbers = {numbers} deleteNumber = {deleteNumber} editNumber = {editNumber}/>
    </div>
    </>
  );
};

export default App; 