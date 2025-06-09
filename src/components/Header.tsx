import { DATA } from "../data/data.js";
import {Logo} from "./Logo.js";
import {Input} from "@/components/ui/input.js";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import {Button} from "@/components/ui/button";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
    return <header className="flex items-center justify-between">
        <Navbar />
        <NavRight/>
    </header>;
}

// List Components
const Navbar = () => {
    return <nav>
        <ul className="flex">
            {
                DATA.nav_bar.map((item, i) => {
                    return <li key={i} className="text-base font-['Helvetica']">
                        <Button className="rounded-xs bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">{item.label}</Button>
                    </li>
                })
            }
        </ul>
    </nav>
}

// right section
const NavRight = () => {
    return <div className="font-['Helvetica'] flex justify-between items-center">
        <Logo className="w-54" Size={120}/>
        <div className="flex items-center gap-6">
            <div className="flex items-center">
                <IoIosSearch className="text-xl relative left-6"/>
                <Input  className="text-base pl-6" placeholder="Search..."/>
            </div>
            <div className="text-2xl flex items-center gap-4">
                <IoIosNotificationsOutline/>
                <MdFavoriteBorder/>
                <IoBagOutline/>
            </div>
            <div className="flex items-center">
                <Button className="rounded-xs bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">Register</Button>
                <Button className="rounded-xs bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">Login</Button>
            </div>
        </div>
    </div>
}