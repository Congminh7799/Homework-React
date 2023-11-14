import Product from "../../../types/Product";
import Button from "../../shared/Button";
import ProductTypes from "../../../types/Product/Types"
import Policy from "./Policy";

import { AiTwotoneHeart } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import BlockVideo from "../../../types/BlockVideo";
import video1 from "../../../assets/images/images.png"
import TypeAuthor from "../../../types/Author";

import author1 from "../../../assets/images/category-img-1.jpg";
import author2 from "../../../assets/images/category-img-2.jpg";
import Video from "../../blocks/Video";
import Author from "../../blocks/Author";
import Tags from "../../blocks/Tags";
import Option from "./Options";
import ProductPolicy from "../../../types/Product/Policy";
import RelatedProduct from "../../blocks/RelatedProducts";
import Related from "../../../types/Product/Related";

import { useState } from 'react'
import TypeOptions from "../../../types/Product/TypeOptions";

const Main = ({ product }: { product: Product }) => {
    const productPrice = product.discount ? product.price - ((product.price * product.discount) / 100) : product.price;
    const videos: BlockVideo[] = [
        {
            title: 'Video 1',
            description: 'description 1',
            img: video1
        },
        {
            title: 'Video 2',
            description: 'description 2',
            img: video1
        },
        {
            title: 'Video 3',
            description: 'description 3',
            img: video1
        },
        {
            title: 'Video 4',
            description: 'description 4',
            img: video1
        },
    ];
    const authors: TypeAuthor[] = [
        {
            name: 'Author 1',
            image: author1,
            profiles: [
                {
                    title: 'title 1',
                    description: 'description 1'
                },
                {
                    title: 'title 2',
                    description: 'description 2'
                },
                {
                    title: 'title 3',
                    description: 'description 3'
                }
            ]
        },
        {
            name: 'Author 2',
            image: author2,
            profiles: [
                {
                    title: 'title 1',
                    description: 'description 1'
                },
                {
                    title: 'title 2',
                    description: 'description 2'
                },
                {
                    title: 'title 3',
                    description: 'description 3'
                }
            ]
        },
    ];

    const [activeOption, setActiveOption] = useState<string | null>(null);

    const [addItemToCart, setAddItemToCart] = useState<string | null>(null);

    const [addItemToWishList, setAddItemToWishList] = useState<string | null>(null);

    const addToWishList = (product: Product) => {
        console.log('Đã thêm sản phẩm ' + product.name + ' vào danh sách yêu thích!!!');
        setAddItemToWishList(product.name);
    }

    const addTocart = (product: Product) => {
        console.log('Đã thêm sản phẩm ' + product.name + ' vào giỏ hàng!!!');
        setAddItemToCart(product.name);
    }

    const updateActiveOption = (title: string) => {
        if (activeOption === title) return;
        console.log('Options đã chọn: ', title)
        setActiveOption(activeOption !== title ? title : '');
    }

    return (
        <>
            <div className="basis-10/12">
                <section className="flex">
                    <img src={product.image} alt="" />
                    <div>
                        <section>
                            <h1 className="font-bold text-3xl">{product.name}</h1>
                            <p className="space-x-4 mt-6"><strong className="text-orange-500 text-2xl">{productPrice.toLocaleString()}đ</strong> {product.discount ? <span className="line-through text-gray-500">{product.price.toLocaleString()}đ</span> : ''}</p>
                        </section>
                        <section className="mt-6">
                            {
                                product.options?.map((option: ProductTypes, index: number) => {
                                    return (
                                        <div className="flex" key={index}>
                                            <p className="p-1 text-gray-500">{option.type}:</p>
                                            {
                                                option.options.map((item: TypeOptions, index: number) => {
                                                    return <Option isActive={activeOption === item.title} option={item} key={index} onClick={() => updateActiveOption(item.title)} />;
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </section >
                        <section className="mt-6">
                            {
                                product.policy?.map(function (policy: ProductPolicy, index: number) {
                                    return <Policy policy={policy} key={index} />
                                })
                            }
                        </section>
                        <section className="mt-6">
                            <Button label="Thêm Giỏ Hàng" onClick={() => addTocart(product)} icon={<BsFillCartPlusFill />} className="bg-orange-500 text-white py-3" />
                            <Button label="Yêu Thích" onClick={() => addToWishList(product)} icon={<AiTwotoneHeart />} className="bg-zinc-900 text-white mt-0 sm:mt-2 py-3" />
                        </section>
                    </div>
                </section>

                <section className="mt-6">
                    {
                        product.related ?
                            <>
                                <div className="text-xl font-bold mb-4">Phụ kiện tương thích</div>
                                <div className="flex">
                                    {
                                        product.related.map(function (related: Related, index: number) {
                                            return <RelatedProduct related={related} key={index} />
                                        })
                                    }
                                </div>
                            </>
                            : null
                    }
                </section>

                <section className="mt-6 flex">
                    <div className="basis-3/6">
                        <div className="text-xl font-bold mb-4">Videos</div>
                        <div className="">
                            {
                                videos.map((item: BlockVideo, index: number) => {
                                    return <Video video={item} key={index} />;
                                })
                            }
                        </div >
                    </div>
                    <div className="basis-1/3">
                        <div className="text-xl font-bold mb-4">Author</div>
                        <div>
                            {
                                authors.map((item: TypeAuthor, index: number) => {
                                    return <Author author={item} key={index} />;
                                })
                            }
                        </div >
                    </div>
                </section>

                <section className="mt-6 flex">
                    <Tags title="Angular" className="bg-green-100" />
                    <Tags title="Svelte" className="bg-green-100" />
                    <Tags title="Next" className="bg-red-100" />
                </section>
            </div>
        </>
    )
}

export default Main;