import useFetch from "../customhooks/useFetch";
import TablesPlasmaDonor from './TablesPlasmaDonor';
import Loader from "react-loader-spinner";
import SearchBar from "./SearchBar";
import { useEffect,useState } from "react";

function Page1() {
    const url = 'https://api.indiacovidhelper.link/api/plasmadonor'
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
        console.log(data)
        const newData = data.filter(item => (item.bloodGroup.toLowerCase().includes(keywords.toString().toLowerCase())) || (item.title.toLowerCase().includes(keywords.toString().toLowerCase())) || (item.location.toLowerCase().includes(keywords.toString().toLowerCase())) || (item.phoneNumber.toLowerCase().includes(keywords.toString().toLowerCase())))
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
      <div>Disclaimer: The list of information on this site is taken from different sources online. www.indiacovidhelper.link does not take responsibility of the authenticity of this information.
        <br></br>Meanwhile, our team is working hard to verify the information here and will keep updating the website. We also request for volunteers to contact us and help us in the same.
      </div>
      <div>
        Please contact us if you are in urgent need of Plasma, Bed, Oxygen, Meals, Medicines, or any other emergency.
      </div>
      <div>
        Contact us on WhatsApp: +85265727120, or email us at: deepansh97@yahoo.com
      </div>
      </div>  
      
     
    );
  }
  
  export default Page1;