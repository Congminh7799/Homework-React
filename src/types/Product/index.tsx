import ProductOptions from "./Types";
import ProductPolicy from "./Policy"
import ProductDetail from "./Detail"
import Related from "./Related";

type Product = {
    name: string;
    price: number;
    discount?: number;
    image: string;
    options?: ProductOptions[];
    policy?: ProductPolicy[];
    details?: ProductDetail[];
    related?: Related[];
}

export default Product;