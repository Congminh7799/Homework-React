import BlockVideo from "../../../types/BlockVideo";

import { AiOutlineHeart } from 'react-icons/ai';

const Video = ({ video }: { video: BlockVideo }) => {

    return (
        <div className="inline-flex text-center items-center font-medium space-x-4 mb-2 w-full pr-4">
            <img className="rounded" src={video.img} alt="Video Image" />
            <div className="text-left w-full">
                <p className="font-bold">{video.title}</p>
                <p>{video.description}</p>
            </div>
            <div>
                <AiOutlineHeart />
            </div>
        </div>
    )

}

export default Video;