import axios from 'axios';
 
 const Api = {
    getCount: async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/get_Media_count');
            return response.data.data.count;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
}

export default Api;