import { useState, useEffect } from 'react'

const useFetch = (urlOf) => {
    const [listItem, setListItem] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect( () => {
        
        const abortCont = new AbortController();

        fetch(urlOf, {signal: abortCont.signal})
        .then(res => {  
         if (!res.ok){
             throw Error("No data shown.")
         } else {
             return res.json();
         }         
        })
        .then(data => { 
           setListItem(data);
           setIsLoading(false);
         })
         .catch(err =>{
             if (err.name !== "AbortError"){
                console.log(err.message)
             }
             
         });
         
         return () => {
             abortCont.abort(); 
             console.log("aborted");
            }
     }, [urlOf]);

     
    return { listItem, isLoading }
}

export default useFetch;