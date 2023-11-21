import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = ({ rating = 0 }: { rating: number }) => {

    const ratingList = [1, 2, 3, 4, 5];

    const [ratingNumber, setRatingNumber] = useState(rating);

    const updateRatingNumber = (number: number) => {
        setRatingNumber(ratingNumber == number ? 0 : number);
    }
    
    return (
        <div className="flex pb-[10px]">
            {
                ratingList.map(function (item: number, index: number) {
                    return <Star onClick={() => updateRatingNumber(item)} isActived={ratingNumber >= item} key={index} />
                })
            }
        </div>
    )
}

const Star = ({ isActived, onClick }: { isActived: boolean, onClick: () => void, }) => {
    return (
        <div onClick={() => onClick()} className={isActived ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
    )
}

export default Rating;