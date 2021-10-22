
import Lists from './Lists'
import useFetch from './useFetch';

const Content = () => {
    
    const { listItem, isLoading } = useFetch('http://localhost:8000/list/');

    return ( 
        
        <div className='gc-list-wrapper'>
           <h1>List</h1>
           {isLoading && <div>STILL LOADING!</div> }
           {listItem && <Lists list={ listItem } /> }
        </div>
    );
}


 
export default Content;