import axios from 'axios';

export default axios.create({
    baseURL:' https://b1b1-160-72-126-68.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});