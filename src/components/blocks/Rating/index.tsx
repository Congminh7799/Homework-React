import { useState } from "react";
import Star from "./Star";

const Rating = ({ rating = 0, showStatistics = false, isCanChoose = true }: { rating?: number, showStatistics?: boolean, isCanChoose?: boolean }) => {

    const ratingList = [1, 2, 3, 4, 5];

    const [ratingNumber, setRatingNumber] = useState(rating);

    const updateRatingNumber = (number: number) => {
        setRatingNumber(ratingNumber == number ? 0 : number);
    }

    return (
        <div className="flex pb-[10px]">
            {
                ratingList.map(function (item: number, index: number) {
                    return <Star onClick={() => {isCanChoose ? updateRatingNumber(item) : {}}} isActived={ratingNumber >= item} key={index} />
                })
            }
            {
                showStatistics ? <p className="text-gray-500 ml-2">{rating} out of 5</p> : null
            }
        </div>
    )
}

export default Rating;