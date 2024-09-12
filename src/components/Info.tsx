import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import my_photo from "../assets/me.jpg";
const Info = () => {
    return (
        <div className="border-b border-purple-500 pb-10">
            <img
                src={my_photo}
                className="w-32 h-32 bg-black rounded-full object-cover m-auto border-4 border-purple-500"
            />
            <h2 className="text-center text-2xl font-bold p-4">
                La Pyae Hmue Aung
            </h2>
            <div className="flex gap-4 justify-center">
                <a
                    href="https://www.linkedin.com/in/lapyaehmueaung/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <FaLinkedin className="w-10 h-10" />
                </a>
                <a
                    href="https://github.com/LynxQuas"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <FaGithub className="w-10 h-10" />
                </a>

                <a href="mailto:lapyaehmueaung@gmail.com">
                    <BiLogoGmail className="w-10 h-10" />
                </a>
            </div>
        </div>
    );
};

export default Info;
