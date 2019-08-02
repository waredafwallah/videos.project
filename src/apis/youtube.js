import axios from 'axios';


const KEY = 'AIzaSyAEoh3yAKUWuLGCjnSvAZ5nznWHfZW7UOc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});

