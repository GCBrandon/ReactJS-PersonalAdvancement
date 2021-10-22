import { Link } from "react-router-dom";

const Lists = ({ list }) => {

    
    return ( 
        <div className="gc-content">
            { list.map( (listItem) => ( 
                <div className='gc-list-item' key={ listItem.id }>
                    <div>
                        <span> { listItem.id } </span>
                        <p>{ listItem.content }</p>
                    </div>
                    <div>
                        <Link to={ `/view/${listItem.id}` }>
                            <button>View List</button>
                        </Link>
                        <Link to={ `/delete/${listItem.id}` }>
                            <button>Delete List</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Lists;