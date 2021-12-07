import React, {useState} from 'react';
import youtube from '../apis/youtube';
import VideoItem from './VideoItem';
// youtube api 이용을 위한 실험 코드
const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const getResult = async () => {
    
        const response = await youtube.get('/search', {
            params: {
                q: 'bts',
                // 검색용으로 임의로 넣어놓은 키워드
            }
        })
        console.log(response);
        setVideos(response.data.items);
    };
    getResult();
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });

    return <div>{renderedVideos}</div>;
};
export default VideoList;