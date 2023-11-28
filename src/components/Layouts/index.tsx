import { Outlet } from "react-router-dom";
import TypeLink from "../../types/Link";
import Navigation from "../global/Navbar";
import Container from "../shared/Container";

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

            <Container><Outlet /></Container>
            <footer className="flex item-center justify-center p-10 bg-black text-white">Footer</footer>
        </>
    )
};

export default Layout;