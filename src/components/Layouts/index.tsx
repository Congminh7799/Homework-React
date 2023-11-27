import { Outlet, Link } from "react-router-dom";
import TypeLink from "../../types/Link";
import Navigation from "../global/Navbar";

const Layout = () => {
    const navigation: TypeLink[] = [
        {
            label: 'Home',
            href: '/home',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'Category',
            href: '/category',
        },
        {
            label: 'Product',
            href: '/product',
        },
        {
            label: 'Login',
            href: '/login',
        },
        {
            label: 'Customer',
            href: '/customer',
        }
    ];

    return (
        <>
            <header>
                <Navigation navigation={navigation} />
            </header>
            <main> <Outlet /></main>
            <footer>Footer</footer>
        </>
    )
};

export default Layout;