import { useEffect, useState } from "react";

const Form = ({addNumber,edit,updateNumber}) =>{

  const [text,setText] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    // addNumber(text)

    if(edit.editMode)
    {
      updateNumber(edit.oldItem.id,text)
    }
    else{
      addNumber(text);
    }

    setText("");
    
  };

  useEffect(()=>{
    setText(edit.oldItem.text);
  },[edit]);

    return(
      <form className="my-3" onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder="Enter Text Here..." className="form-control rounded-0" onChange={(e)=>setText(e.target.value)} value={text} required />
        <button className="btn btn-success rounded-0 w-100 my-4">Save</button>
      </form>
    )
};

export default Form;