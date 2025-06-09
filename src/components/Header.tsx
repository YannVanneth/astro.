import { DATA } from '../data/data.js';
import { Logo } from './Logo.js';
import { Input } from '@/components/ui/input.js';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoBagOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { IoIosSearch } from 'react-icons/io';
import {useState} from "react";



export const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <header onMouseLeave={() => setIsHovered(false)} className="bg-white fixed top-0 w-screen z-10">
        <div className="w-[72.5%] mx-auto overflow-hidden flex items-center justify-between">
            <Navbar setIsHovered={setIsHovered} isHovered={isHovered}/>
            <NavRight />
        </div>
    </header>
  );
};

// List Components
const Navbar = ({isHovered, setIsHovered} : {isHovered : boolean, setIsHovered: Function}) => {
  return (
    <nav>
      <ul className="flex">
        {DATA.nav_bar.map((item, i) => {

          return (
              <NavItem isHovered={isHovered} setIsHovered={setIsHovered} key={i} label={item.label} />
          );
        })}
      </ul>
    </nav>
  );
};

const NavItem = ({ label , isHovered, setIsHovered} : {label : string, isHovered: boolean, setIsHovered: Function}) => {


    return (
        <li
            className="text-base font-['Helvetica'] relative"
            onMouseEnter={() => setIsHovered(true)}

        >
            <div className="flex flex-col items-start relative">
                <div className="z-10 rounded-xs px-4 bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">
                    {label}
                </div>

                <div
                    className={`
            fixed left-0 top-18 z-4 bg-white w-screen h-[400px]
            transition-all duration-500 ease-in-out transform
            ${isHovered ? 'translate-y-0 opacity-100 pointer-events-auto' : '-z-10 -translate-y-full'}
          `}
                >
                   <div className="w-[72.5%] mx-auto">
                       <p>aksljdlksadjlkasdjlsadjsaldjl</p>
                       <p>aksljdlksadjlkasdjlsadjsaldjl</p>
                       <p>aksljdlksadjlkasdjlsadjsaldjl</p>
                   </div>
                </div>
            </div>
        </li>
    );
};
// right section
const NavRight = () => {
    return (
        <div className="font-['Helvetica'] flex justify-between items-center z-10">
            <Logo className="w-54" Size={120}/>
            <div className="flex items-center gap-6">
                <div className="flex items-center">
                    <IoIosSearch className="text-xl relative left-6"/>
                    <Input className="text-base pl-6" placeholder="Search..."/>
                </div>
                <div className="text-2xl flex items-center gap-4">
                    <IoIosNotificationsOutline/>
                    <MdFavoriteBorder/>
                    <IoBagOutline/>
                </div>
                <div className="flex items-center">
                    <Button className="rounded-xs bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">
                        Register
                    </Button>
                    <Button className="rounded-xs bg-transparent text-primary hover:bg-gray-200 cursor-pointer py-6">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};
