import BlockVideo from "../../../types/BlockVideo";

import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from "react"

const Video = ({ video }: { video: BlockVideo }) => {

    const [like, setLike] = useState(false);

    const likeVideo = () => {
        setLike(!like);
    }

    return (
        <div className="inline-flex text-center items-center font-medium space-x-4 mb-2 w-full pr-4">
            <img className="rounded" src={video.img} alt="Video Image" />
            <div className="text-left w-full">
                <p className="font-bold">{video.title}</p>
                <p>{video.description}</p>
            </div>
            <button onClick={likeVideo}>
                <p className={like ? 'text-red-600' : ''}>
                    <AiOutlineHeart />
                </p>
            </button>
        </div>
    )

}

export default Video;