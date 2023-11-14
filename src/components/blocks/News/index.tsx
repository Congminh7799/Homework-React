import News from "../../../types/News"

const New = ({ news }: { news: News }) => {
    return (
        <>
            <div className="mb-8">
                <img className="w-full mb-2" src={news.image} alt="New Imgae" />
                <div className="text-lg font-bold mb-2">{news.title}</div>
                <small className="text-gray-500">{news.date}, Posted by: {news.author}</small>
                <div className="text-gray-500 my-2">{news.content}</div>
                <button className="font-bold hover:text-orange-500">Read more</button>
            </div>
        </>
    )
}

export default New;