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
import Tags from "../../blocks/Tags";
import Option from "./Options";
import ProductPolicy from "../../../types/Product/Policy";
import RelatedProduct from "../../blocks/RelatedProducts";
import Related from "../../../types/Product/Related";

import { useState } from 'react'
import TypeOptions from "../../../types/Product/TypeOptions";
import Rating from "../../blocks/Rating";
import Slider from "../../blocks/Slider";
import SubscribeNewsletter from "../../forms/SubscribeNewsletter";
import RatingProduct from "../../forms/RatingProduct";
import RatingStatistics from "../../blocks/RatingStatistics";
import Star from "../../blocks/Rating/Star";

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

    const [cartItem, setCartItem] = useState<string | null>(null);

    const [wishList, setWishList] = useState<string | null>(null);

    const [showFormRating, setShowFormRating] = useState<boolean>(false);

    const updateShowFormRating = () => {
        setShowFormRating(true);
    }

    const addToWishList = (product: Product) => {
        console.log('Đã thêm sản phẩm ' + product.name + ' vào danh sách yêu thích!!!');
        setWishList(product.name);
    }

    const addTocart = (product: Product) => {
        console.log('Đã thêm sản phẩm ' + product.name + ' vào giỏ hàng!!!');
        setCartItem(product.name);
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
                            <Button label="Thêm Giỏ Hàng" onClick={() => addTocart(product)} icon={<BsFillCartPlusFill />} iconActive={cartItem == product.name} className="bg-orange-500 text-white py-3" />
                            <Button label="Yêu Thích" onClick={() => addToWishList(product)} icon={<AiTwotoneHeart />} iconActive={wishList == product.name} className="bg-zinc-900 text-white mt-0 sm:mt-2 py-3" />
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

                <section className="mt-6">
                    {
                        <>
                            <div className="flex border rounded py-4">
                                <div className="basis-2/12 flex items-center justify-center">
                                    <div className="text-orange-500 text-center">
                                        <p className="text-3xl font-bold">4.95/5</p>
                                        <div className="flex justify-center"><Star isActived={true} /></div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-4">1,745 đánh giá</p>
                                    </div>
                                </div>
                                <div className="basis-6/12 px-4 border-e border-s">
                                    <RatingStatistics />
                                </div>
                                <div className="basis-4/12 flex-wrap flex items-center justify-center">
                                    <button onClick={updateShowFormRating}>Gửi đánh giá của bạn</button>
                                </div>
                            </div>
                            
                            {
                                showFormRating ? <RatingProduct /> : null
                            }
                        </>
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
                        <SubscribeNewsletter />
                    </div>
                </section>

                <section className="mt-6 flex">
                    <Tags title="Angular" className="bg-green-100" />
                    <Tags title="Svelte" className="bg-green-100" />
                    <Tags title="Next" className="bg-red-100" />
                </section>

                <section className="mt-6 flex">
                    <Rating rating={0} />
                </section>

                <section className="mt-6 flex">
                    <Slider />
                </section>
            </div>
        </>
    )
}

export default Main;