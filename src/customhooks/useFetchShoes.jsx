import { useEffect, useState } from 'react';
import api from '../api/get'

const useFetchShoes = (endpoint) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true); 
          const response = await api.get(`/${endpoint}`);
          setData(response.data); 
          setError(null); 
        } catch (err) {
          setError(err); 
          setData(null);
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData();
    }, [endpoint]); 
  
    return { data, loading, error };
}

export default useFetchShoes;