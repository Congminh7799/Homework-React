import Link from "../../../types/Link";

const Link = ({ label, href, target, onClick, isActived = false }: Link) => {
    const classActive = isActived ? 'text-black' : null;
    return (
        <a onClick={onClick} className={"hover:text-black" + ' ' + classActive} href={href} target={target}>{label}</a>
    )
}

export default Link;