// link - next js
import Link from "next/link";
// next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
