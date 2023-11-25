import { FaStar } from "react-icons/fa";

const Star = ({ isActived, onClick }: { isActived: boolean, onClick?: () => void, }) => {
    return (
        <div onClick={() => onClick ? onClick() : {}} className={`flex-wrap flex items-center ml-1 ${isActived ? 'text-amber-400 ' : 'text-gray-300'}`}><FaStar /></div>
    )
}

export default Star;