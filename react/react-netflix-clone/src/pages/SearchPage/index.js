import axios from '../../api/axios';
import React ,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);


    const useQuery = () =>{
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get("q");


    useEffect(() => {
      if(searchTerm){
        fetchSearchMovie(searchTerm);
      }
    }, [searchTerm])
    
    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(`/search/multi?include_adilt=false&query=${searchTerm}`)
            setSearchResults(request.data.requestData);
        } catch (error) {
            
        }
    }
   

  return (
    <div>index</div>
  )
}
