import TypeLink from "../../../types/Link";
import Link from "../../shared/Link";

const Nav = ({ links }: { links: TypeLink[] }) => {

  return (
    <nav className="text-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-x-4">
      {links.map((link, index) => (
        <Link
          href={link.href}
          label={link.label}
          target={link.target}
          key={index}
        />
      ))}
    </nav>
  );
};

export default Nav;
