import ProductDetail from "../../../types/Product/Detail";

const Detail = ({ detail, show = false }: { detail: ProductDetail, show: boolean }) => {
    return (
        <>
            {
                show ?
                    <div className="flex border-t-[1px] py-3">
                        <p className="min-w-[50%]">{detail.title}</p>
                        <p>{detail.description}</p>
                    </div>
                    : null
            }
        </>
    )
}

export default Detail;