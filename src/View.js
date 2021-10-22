import { useParams } from "react-router-dom";
// import Lists from "./Lists";
import useFetch from "./useFetch";


const View = () => {
    const { id } = useParams();
    const { listItem, isLoading } = useFetch('http://localhost:8000/list/'+id);

    return ( 
        <div className="gc-content">
        <div className='gc-list-wrapper'>
            <h1>{ id }</h1>
            {isLoading && <div>STILL LOADING!</div> }
            {listItem && (
                
                <div className='gc-list-item' key={ listItem.id }>
                <p>{ listItem.content }</p>
                
            </div>
            )}
        </div>
        </div>
     );
}
 
export default View;