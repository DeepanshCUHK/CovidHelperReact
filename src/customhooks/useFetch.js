//Custom Hook to Fetch Data
import {useState,useEffect} from 'react'
const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isLoading,setisLoading] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const abort = new AbortController()
        // GET request using fetch inside useEffect React hook
        fetch(url,{ signal: abort.signal})
            .then(response =>{ 
                if(!response.ok){
                    throw Error("Couldn't fetch from that resource")
                }
                return response.json()
            })
            .then(json => {
                setData(json.data)
                setisLoading(false)
                setError(null)
            }).catch(err=>{
                if(!err.name === 'AbortError'){
                    setisLoading(false)
                    setError(err.message)
                }
            });
        
        return ()=> abort.abort()

    },[url])
    return {data,isLoading,error}
}

export default useFetch;