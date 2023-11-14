import ProductDetail from "../../../types/Product/Detail";

const Detail = ({ detail }: { detail: ProductDetail }) => {
    return (
        <div className="flex border-t-[1px] py-3">
            <p className="min-w-[50%]">{detail.title}</p>
            <p>{detail.description}</p>
        </div>
    )
}

export default Detail;