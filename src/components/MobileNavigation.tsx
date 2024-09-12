import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Menu from "./Menu";

export default function MobileNavigation() {
    const { isDark, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className={`sticky top-0 left-0 ${
                isDark ? "bg-black text-white" : "bg-white"
            } px-10 py-5 shadow-md md:hidden flex items-center justify-between`}
        >
            <GiHamburgerMenu
                onClick={() => setIsMenuOpen(true)}
                className="w-10 h-10"
            />

            {/* toggle theme */}
            <button onClick={toggleTheme}>
                {isDark ? (
                    <MdOutlineLightMode className="w-7 h-7" />
                ) : (
                    <MdDarkMode className="w-7 h-7" />
                )}
            </button>

            {isMenuOpen && <Menu onCloseMenu={() => setIsMenuOpen(false)} />}
        </nav>
    );
}
