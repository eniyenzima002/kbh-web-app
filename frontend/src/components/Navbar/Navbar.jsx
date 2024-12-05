import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-3 px-6 h-14 border-b bg-white">
            <div className="flex items-center gap-2">
                <MdDashboard />
                Overview
            </div>
            <div className="flex items-center gap-1 relative">
                <div className="flex flex-col text-sm justify-end items-end">
                    Hi, Jean-Pierre
                    <span className="text-sm/[10px] text-green-900">Admin</span>
                </div>
                <HiOutlineUserCircle className="text-5xl" />
                <div className="bg-green-400 h-3 w-3 absolute right-0 bottom-7 rounded-full"></div>
            </div>
        </header>
    )
}
export default Navbar