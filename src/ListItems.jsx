
const ListItems = ({number,deleteNumber,editNumber}) =>{
    return(

        <li className="list-group-item rounded-2 mt-1">
           <h1 className="display-6"> {number.text}</h1>
           <span className="float-end">
              <button className="btn btn-info rounded-1 text-dark btn-sm mx-2" onClick={() => editNumber(number)}>Edit</button>
              <button className="btn btn-danger rounded-1 text-light btn-sm" onClick={() => deleteNumber(number.id)}>Delete</button>
           </span>
        </li>
    )
};

export default ListItems;