import useFetch from "../customhooks/useFetch";
import TablesPlasmaDonor from './TablesPlasmaDonor';
import Loader from "react-loader-spinner";
import SearchBar from "./SearchBar";
import { useEffect,useState } from "react";

function Page1() {
    const url = 'http://localhost:5000/api/plasmadonor'
    const records = 50
    const {data,isLoading,error,setData} = useFetch(url,records)
    const [keywords,setKeywords] = useState("")
    const [searchResult,setSearchResult] = useState(data)
    const search = (keywords)=>{
      console.log(keywords)
      setKeywords(keywords)
    }
    useEffect(()=>{
      if(!isLoading){
        const newData = data.filter(item => (item.bloodGroup.toLowerCase().toLowerCase().includes(keywords.toString().toLowerCase())) || (item.title.toLowerCase().toLowerCase().includes(keywords.toString().toLowerCase())) || (item.location.toLowerCase().includes(keywords.toString().toLowerCase())) || (item.phoneNumber.toLowerCase().includes(keywords.toString().toLowerCase())))
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
          {searchResult && <div><SearchBar search = {search}/><TablesPlasmaDonor data = {searchResult}/></div>}

      </div>  
      
     
    );
  }
  
  export default Page1;