import { NavLink } from "react-router-dom";
import { navigationLinks } from "../constants";

interface Props {
    type: string;
    onClose: () => void;
}
const NavLinks = ({ type, onClose }: Props) => {
    const isMobile = type === "mobile";
    const mobileClass = "flex flex-col gap-4 text-2xl justify-center px-10";

    return (
        <ul className={`${isMobile && mobileClass}`}>
            {navigationLinks.map((nav) => (
                <li key={nav.href}>
                    <NavLink
                        onClick={onClose}
                        className={({ isActive }) =>
                            `block px-10 py-4 rounded-md ${
                                isActive ? "bg-purple-500 text-white" : ""
                            }`
                        }
                        to={nav.href}
                    >
                        {nav.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
