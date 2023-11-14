import { FaXmark } from "react-icons/fa6"

const Tags = ({ title, className = '' }: { title: string, className?: string }) => {
    return (
        <>
            <div className={'px-2 py-1 rounded mr-2 ' + className}>
                <div className="flex items-center space-x-4"><p>{title}</p> <span><FaXmark /></span></div>
            </div>
        </>
    )
}

export default Tags;