import useFetch from "../customhooks/useFetch";
import TablesBeds from './TablesBeds';
import Loader from "react-loader-spinner";
import SearchBar from "./SearchBar";
import {useEffect,useState} from 'react';
function Page2() {
  const url = 'http://localhost:5000/api/beds'
  
    const {data,isLoading,error} = useFetch(url)
    const [keywords,setKeywords] = useState("")
    const [searchResult,setSearchResult] = useState(data)
    const search = (keywords)=>{
      console.log(keywords)
      setKeywords(keywords)
    }
    useEffect(()=>{
      if(!isLoading){
        const newData = data.filter(item => (item.title.toLowerCase().toLowerCase().includes(keywords.toString().toLowerCase())) || (item.location.toLowerCase().includes(keywords.toString().toLowerCase())) || (item.phoneNumber.toLowerCase().includes(keywords.toString().toLowerCase())))
        setSearchResult(newData) 
      }     
    },[keywords,isLoading])
   
    return (
      <div className = "App">
          {error && <div>{error}</div>}
          {isLoading && <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={3000} //3 secs
            />}
          {searchResult && <div><SearchBar search = {search}/><TablesBeds data = {searchResult}/></div>}
      </div>  
      
     
    );
  }
  
  export default Page2;