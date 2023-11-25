import StatisticPerStar from "./StatisticPerStar";

const RatingStatistics = () => {
    return (
        <>
            <StatisticPerStar star={5} percentage={70} />
            <StatisticPerStar star={4} percentage={17} />
            <StatisticPerStar star={3} percentage={8} />
            <StatisticPerStar star={2} percentage={4} />
            <StatisticPerStar star={1} percentage={1} />
        </>
    )
}

export default RatingStatistics;