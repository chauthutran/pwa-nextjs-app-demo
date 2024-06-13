// src/components/SidebarMenu.tsx
import useAppHook from '@/app/features/hooks';
import React, { useState } from 'react';
import * as Constant from "@/app/constants";
import { FaBars } from 'react-icons/fa';

const SidebarMenu: React.FC = () => {
    const {setMainUi, setLoginUserData} = useAppHook();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleShowClientList = () => {
    setMainUi(Constant.UI_CLIENT_LIST) ;
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    setLoginUserData( null );
    setMainUi( Constant.UI_LOGIN_PAGE );
  }

  return (
    <div >
      <button onClick={toggleSidebar} className="fixed top-0 left-0 m-4 bg-softPastel-lightBlue p-2 mr-8 rounded text-gray-800">
        <FaBars size={24} />
        {/* <i className="fas fa-bars"></i> */}
      </button>
      

      <div
         className={`fixed top-0 left-0 h-full bg-softPastel-lightPink shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        
      <button className="text-gray-800 mb-4 font-semibold p-4" onClick={() => setIsOpen(false)}>
        PWA App Demo
      </button>
      <hr className='w-full'/>

      <div className="p-4 w-64 font-semibold">
          
          <nav className="space-y-4">
            <a href="#" className="block text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md" 
              onClick={() => handleShowClientList()} >Client List</a>
            <a href="#" className="block text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md"
            onClick={() => handleLogout() }
            >Logout</a>
          </nav>
        </div>
      </div>
            
        {/* <button onClick={toggleSidebar} className="p-2 font-bold text-lg ml-2">
          PWA App
        </button>
        <nav className="mt-10">
          <ul className="mx-2">
            <li className="px-4 py-3 hover:bg-lime-800 cursor-pointer border-b-2" onClick={() => handleShowClientList() }>
              Client List
            </li>
            <li className="px-4 py-3 hover:bg-lime-800  cursor-pointer border-b-2" onClick={() => handleLogout() }>
              <a href="#about">Logout</a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default SidebarMenu;
