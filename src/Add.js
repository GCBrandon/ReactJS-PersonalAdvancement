import { useState } from 'react';
import { useHistory } from 'react-router';


const Add = () => {
    const [content, setContent] = useState("");
    const history = useHistory();
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const list = { content };
        
        fetch("http://localhost:8000/list",{
            method: "POST",
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify(list)
        }).then(() => {
            history.push("/");
        });
    }

    return ( 
        <div>
            <h1>Create a new list</h1>
            <form onSubmit={ handleSubmit }>
                <label>List content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required ></textarea>
                <button type="submit">Add List Item</button>
            </form>
        </div>
     );
}
 
export default Add;