import Axios from 'axios';

export default Axios.create({
    baseURL: 'http://192.168.50.63:3001'
});