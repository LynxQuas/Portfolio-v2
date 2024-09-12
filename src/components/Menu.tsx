import { useTheme } from "../context/ThemeContext";

import { IoMdClose } from "react-icons/io";

import Info from "./Info";
import NavLinks from "./NavLinks";

interface Props {
    onCloseMenu: () => void;
}

export default function Menu({ onCloseMenu }: Props) {
    const { isDark } = useTheme();

    return (
        <div
            className={`absolute animate-menuAnimation  top-0 left-0 w-screen h-screen z-50 ${
                isDark ? "bg-black text-white" : "bg-white"
            }`}
        >
            <IoMdClose
                className="w-10 h-10 absolute top-0 right-0 m-5"
                onClick={onCloseMenu}
            />
            <div className="flex flex-col gap-10 my-10">
                <Info />
                <NavLinks type="mobile" onClose={onCloseMenu} />
            </div>
        </div>
    );
}
