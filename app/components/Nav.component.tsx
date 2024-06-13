import { FaArrowLeft } from "react-icons/fa6";
import useAppHook from "../features/hooks";
import * as Constant from "@/app/constants";
import SidebarMenu from "./basics/SidebarMenu.component";

export default function Nav() {

    const { mainUi, setMainUi } = useAppHook();


    return (
        <header className="bg-softPastel-lightBlue text-gray-800 shadow-md">
            <div className="mx-auto px-4">
                <div className="flex items-center  h-16">
                        {/* <img className="h-8 w-8" src="/path/to/logo.png" alt="Logo" /> */}
                        { mainUi == Constant.UI_CLIENT_LIST && <SidebarMenu /> }
                        {(mainUi == Constant.UI_CLIENT_DETAILS || mainUi == Constant.UI_ADD_CLIENT_FORM ) && <span className="fixed top-0 left-0 m-4 text-gray-600 font-bold cursor-pointer text-xl  pt-2" onClick={(e) => setMainUi(Constant.UI_CLIENT_LIST)}><FaArrowLeft /></span>}
                            
                        {/* <nav> */}
                            <div className="pl-12 pt-1 flex items-baseline font-semibold">
                                PWA Demo App
                                {/* <a href="#" className="text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#" className="text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                <a href="#" className="text-gray-800 hover:bg-softPastel-mintGreen px-3 py-2 rounded-md text-sm font-medium">Contact</a> */}
                            </div>
                        {/* </nav> */}
                </div>
            </div>
        </header>

    )
}