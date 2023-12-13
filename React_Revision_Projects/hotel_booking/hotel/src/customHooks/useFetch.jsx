import React, { useEffect, useState } from 'react'

const URL = "https://robohash.org/subscribe" ;
function useFetch(){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try {
               const result =await fetch(URL).then(res=>res.json());
                 setData(result?.data);
                     setLoading(false);
                } catch (error) {
                    console.log(error);
                    setError(error);
                }
        }
   
           fetchData();
    }, []);
  return  {loading, data, error}

}

export default useFetch;