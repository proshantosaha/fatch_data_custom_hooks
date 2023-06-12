import {useEffect,useState} from 'react'

const useFetchData = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    
 useEffect (()=>{
    fetchData();
  
   },[]);


   const fetchData = async () =>{
    setLoading(true);
    try{
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      setError('');
      setLoading(false);
    }catch(e){
        setError(e.massage);
        setLoading(false);
    }
   
 };

  
  return {
  
        data,
        loading,
        error,
    
   }
}

export default useFetchData