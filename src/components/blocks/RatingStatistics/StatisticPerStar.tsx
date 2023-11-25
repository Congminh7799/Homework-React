import Star from "../Rating/Star";

const StatisticPerStar = ({ star, percentage }: { star: number, percentage: number }) => {
    return (
        <div className="flex items-center mt-4 first:mt-0">
            <div className="text-sm font-medium text-gray-500 flex">{star} <Star isActived={true} /></div>
            <div className="w-3/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-400 rounded" style={{ width: `${percentage}%` }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{percentage}%</span>
        </div>
    )
}

export default StatisticPerStar;