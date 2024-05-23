import ListItems from "./ListItems";

const ListGroup = ({numbers,deleteNumber,editNumber}) =>{
    return(
      <ul className="list-group my-4">
         {
            numbers.map((number) =>{
                return <ListItems key = {number.id} number = {number} deleteNumber = {deleteNumber} editNumber = {editNumber} />
            })
         } 
      </ul>
    )
};

export default ListGroup;