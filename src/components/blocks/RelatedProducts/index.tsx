import Related from "../../../types/Product/Related"

const RelatedProduct = ({ related }: { related: Related }) => {
    const productPrice = related.discount ? related.price - ((related.price * related.discount) / 100) : related.price;
    return (
        <>
            <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-2 relative flex flex-col relative">
                {related.discount ? <span className="absolute right-2 top-2 px-2 py-1 bg-orange-500 rounded w-auto text-center text-white">-{related.discount}%</span> : ''}
                <img className="w-full scale-75 hover:scale-100" src={related.image} alt="Product image" />
                <div className="p-2 h-full">
                    <div className="font-bold text-md mb-2">{related.name}</div>
                </div>
                <div>
                    <p className="space-x-2 px-2 pb-2 mt-6"><strong className="text-red-600">{productPrice.toLocaleString()}đ</strong> {related.discount ? <span className="line-through text-gray-500">{related.price.toLocaleString()}đ</span> : ''}</p>
                </div>
            </div>
        </>
    )
}

export default RelatedProduct;