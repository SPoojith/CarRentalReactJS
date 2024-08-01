import axios from 'axios';
export const objectToFormData = async(object) => {
    const formData = new FormData();
    formData.append('Data',JSON.stringify(object))
    return formData;
  };

  
  export const makeApiRequest = async (url, formData) => {
    try {
      const response = await axios.post(url, formData)
      .then(res => res.data)
      .catch(err=> console.log)
      return response;
    } catch (error) {
        console.error('There was an error making the API request:', error);
        throw error;
    }
};

export const AdminLogin = async (url, formData) => {
  try {
    const response = await axios.post(url, formData).then(res => res.data);
    return response;
  } catch (error) {
      console.error('There was an error making the API request:', error);
      throw error;
  }
};


export const getCars = async (url, formData) => {
  try {
    const response = await fetch(url, {
        method: 'POST', // Adjust the method as needed
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error making the API request:', error);
      throw error;
    }
  };
  
  
  
  export const getDefalutPath = async () => {
    try {
      const response = await axios.get('http://192.168.1.102:5000/a').then(res => res.data);
      return response;
    } catch (error) {
        console.error('There was an error making the API request:', error);
        throw error;
    }
  };