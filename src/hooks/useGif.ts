import {useState, useEffect} from "react";
import axios from 'axios';

export interface GifProps {
    gif: string, 
    fetchGif: (tag?: string) => Promise<void>,
}

//Api Key
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag?: string): GifProps => {
    const [gif, setGif] = useState<string>('');

    const fetchGif = async (tag?: string) => {
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url); // promise
        const imageSrc = data.data.images.downsized_large.url;
        
        setGif(imageSrc);
    }
    
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return {gif, fetchGif};
};

export default useGif;