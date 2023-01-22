import React from "react";

import useGif from "../hooks/useGif";

const Random = () => {
    const {gif, fetchGif} = useGif();

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => fetchGif}>Click for New</button>
        </div>
    );
}

export default Random;