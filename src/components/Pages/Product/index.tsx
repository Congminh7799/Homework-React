import Product from "../../../types/Product";
import Breadcrumb from "../../global/Breadcrumb";
import Item from "../../global/Breadcrumb/item";

import image1 from "../../../assets/images/samsung-galaxy-s21-5g-P4305.jpg";
import image2 from "../../../assets/images/samsung-galaxy-s21-5g-P4305-2.jpg";
import image3 from "../../../assets/images/xiaomi-redmi-note-11s-5g-G4305.jpg";
import related1 from "../../../assets/images/cap-chuyen-doi-usb-c-sang-sd-thumb.png";
import related2 from "../../../assets/images/adapter-sac-apple-type-c-20w-thumb.png";
import related3 from "../../../assets/images/cap-sac-lightning-2m-thumb.png";
import related4 from "../../../assets/images/airpods-3-thumb.png";

import Main from "./Main";

import { BiCheckShield, BiCheckSquare } from 'react-icons/bi';
import { AiOutlineRollback } from 'react-icons/ai';
import RightContent from "./RightContent";


const Product = () => {

    const product: Product = {
        name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
        price: 16990000,
        discount: 25,
        image: image1,
        options: [
            {
                type: 'Màu Sắc',
                options: [
                    {
                        title: 'Đen',
                        img: image1
                    },
                    {
                        title: 'Hồng',
                        img: image2
                    },
                    {
                        title: 'Xanh',
                        img: image3
                    }
                ]

            }
        ],
        policy: [
            {
                icon: BiCheckSquare,
                title: 'Bộ sản phẩm gồm:',
                description: 'Hộp, Sách hướng dẫn, Cáp, Cây lấy sim'
            },
            {
                icon: BiCheckShield,
                title: ' Bảo Hành:',
                description: 'Chính hãng 12 tháng'
            },
            {
                icon: AiOutlineRollback,
                title: ' Đổi trả:',
                description: 'Hư gì đổi nấy 12 tháng'
            }
        ],
        details: [
            {
                title: 'Hệ điều hành:',
                description: 'Android 11'
            },
            {
                title: 'Camera sau:',
                description: 'Chính 12 MP & Phụ 64 MP, 12 MP'
            },
            {
                title: 'Camera trước:',
                description: '10 MP'
            },
            {
                title: 'CPU:',
                description: 'Exynos 2100 8 nhân'
            },
            {
                title: 'RAM:',
                description: '8GB'
            },
            {
                title: 'Bộ nhớ trong:',
                description: '128GB'
            },
            {
                title: 'SIM:',
                description: '1 Nano SIM & 1 eSIMHỗ trợ 5G'
            },
            {
                title: 'Pin, Sạc:',
                description: '4422 mAh20 W'
            },
            {
                title: 'Hãng:',
                description: 'Xiaomi'
            },
            {
                title: 'Hệ điều hành:',
                description: 'Android 11'
            }
        ],
        related: [
            {
                name: 'Cáp chuyển đổi USB-C sang SD',
                price: 1290000,
                discount: 25,
                image: related1
            },
            {
                name: 'Adapter sạc Apple Type C 20W',
                price: 520000,
                image: related2
            },
            {
                name: 'Cáp sạc Lightning 2m',
                price: 840000,
                image: related3
            },
            {
                name: 'AirPods 3',
                price: 1450000,
                discount: 20,
                image: related4
            }
        ]

    }

    return (
        <>
            <Breadcrumb>
                <Item label="Category" url="/category"></Item>
                <Item label="Product" url="/product" showIcon={false}></Item>
            </Breadcrumb>

            <div className="flex flex-row mt-[3rem]">
                <Main product={product} />
                <RightContent product={product} />
            </div>
        </>
    )
}

export default Product;