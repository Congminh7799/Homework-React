import TypeNews from "../../../types/News";
import Product from "../../../types/Product";
import AFA from "../../blocks/AFA";

import new1 from "../../../assets/images/lighting-upgrades-thumb-G3.jpg"
import new2 from "../../../assets/images/electrical-repairs-thumb-G1.jpg"
import new3 from "../../../assets/images/surge-protection-thumb-G4.jpg"
import Detail from "./Detail";
import ProductDetail from "../../../types/Product/Detail";
import New from "../../blocks/News";
import { useState } from "react"

const RightContent = ({ product }: { product: Product }) => {

    const news: TypeNews[] = [
        {
            title: 'Lighting Upgrades',
            date: '23 Nov, 2019',
            author: 'admin',
            image: new1,
            content: 'Electrical panel maintenance, therefore, should be part of your regular routine.',
            comments: [
                {
                    date: '14/10/2023',
                    author: 'admin',
                    content: 'Hello'
                }
            ]
        },
        {
            title: 'Electrical repairs',
            date: '2 Apr, 2022',
            author: 'admin',
            image: new2,
            content: 'Electrical repairs should always be handled by a professional electrician.',
            comments: [
                {
                    date: '14/10/2023',
                    author: 'admin',
                    content: 'Hello'
                },
                {
                    date: '14/10/2023',
                    author: 'admin1',
                    content: 'Hello'
                },
                {
                    date: '14/10/2023',
                    author: 'admin2',
                    content: 'Hello'
                },
                {
                    date: '14/10/2023',
                    author: 'admin3',
                    content: 'Hello'
                },
                {
                    date: '14/10/2023',
                    author: 'admin4',
                    content: 'Hello'
                }
            ]
        },
        {
            title: 'Surge Protection',
            date: '10 Dec, 2012',
            author: 'author',
            image: new3,
            content: 'An electrical surge can happen for a number of reasons, including lightning strikes.'
        }
    ];

    const [showDetail, setShowDetail] = useState<number>(7);

    const showAll = () => {
        setShowDetail(999);
    }

    const hideLess = () => {
        setShowDetail(7);
    }

    return (
        <>
            <div className="basis-2/12 pl-[2rem]">
                <section>
                    {
                        product.details ?
                            <>
                                <div className="text-xl font-bold mb-4">Thông số sản phẩm</div>
                                <div className="text-gray-500">
                                    {
                                        product.details.map((detail: ProductDetail, index: number) => {
                                            return <Detail detail={detail} key={index} show={showDetail >= index + 1} />
                                        })
                                    }
                                </div >
                                {
                                    showDetail != 999 ?
                                        <button className="w-full border rounded border-black py-2 hover:text-white hover:bg-slate-900" onClick={showAll}>Xem chi tiết</button>
                                        : <button className="w-full border rounded border-black py-2 hover:text-white hover:bg-slate-900" onClick={hideLess}>Ẩn bớt</button>
                                }

                            </>
                            : null
                    }
                </section>
                <section className="mt-8">
                    <AFA />
                </section>
                <section className="mt-8">
                    {
                        news ?
                            <>
                                <div className="text-xl font-bold mb-4">Tin tức liên quan</div>
                                <div>
                                    {
                                        news.map((item: TypeNews, index: number) => {
                                            return <New news={item} key={index} />
                                        })
                                    }
                                </div >
                            </>
                            : null
                    }
                </section>
            </div>
        </>
    )
}

export default RightContent;