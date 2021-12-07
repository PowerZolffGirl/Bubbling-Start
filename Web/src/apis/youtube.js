import axios from 'axios';
const KEY = 'AIzaSyBMX5vvcOlRYlANtsLohWAuWUfjJlrFkbM';
// 보안상으로 현재는 만료된 키. 직접 작동 시에는 새로 발급받는 키값 삽입 필요.

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})


