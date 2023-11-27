import axios from 'axios';

const params ={
    headers: {
        Authorization: "bearer " + process.env.React_APP_STRIPE_APP_KEY,
    },
}; 
console.log(params);


export const fetchDataFromApi = async (url) => {
  try{
    const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url);
    return data;
  }catch (error) {
      console.log(error);
      return error;
  }
}

