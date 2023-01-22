import React, {useState} from "react";

import useGif from "../hooks/useGif";

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => fetchGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} autoFocus/>
            <button onClick={handleClick}>Click for New</button>
        </div>
    );
}

export default Tag;