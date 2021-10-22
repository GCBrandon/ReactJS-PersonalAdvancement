import { useHistory, useParams } from "react-router-dom";


const Delete = () => {
    const history = useHistory();
    const { id } = useParams();

    const abortCont = new AbortController();
    
    fetch('http://localhost:8000/list/'+id,{
        signal: abortCont.signal,
        method: "DELETE"
    }).then( () => {
        history.push("/");
    }).catch( err => {
        if (err.name !== "AbortError"){
            console.log(err.message)
         }
    });
    
    return null;
}
 
export default Delete;