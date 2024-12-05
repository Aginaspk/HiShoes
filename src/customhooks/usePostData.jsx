import { useState } from 'react';
import api from '../api/get'

const usePostData = (url) => {

  const [response, setResponse] = useState(null);

  const postData = async (data) => {

    try {
      const result = await api.post(url, data);
      setResponse(result.data);
    } catch (err) {
      console.log(err);
      
    }
  };

  return {response, postData };
};

export default usePostData;
