import { HiOutlineMenu } from "react-icons/hi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePivotTableChart } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuBarChart3 } from "react-icons/lu";
import { GoPersonAdd } from "react-icons/go";
import { useLogoutMutation } from "../../redux/api/users";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Sidebar = () => {
    const [logOut] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut);
        dispatch(logout());
        toast.success('Logged out successfully.');
        navigate('/auth');
    }

    return (
        <article className="w-1/4 border-r">
            <div className="flex flex-col justify-between h-screen pl-4 py-4">
                <div>
                    <div className="flex items-center gap-4 py-4">
                        <HiOutlineMenu className="text-3xl"/>
                        <h3 className="text-xl font-bold">DASH<span className="text-primary">BOARD</span></h3>
                    </div>
                    <div className="flex flex-col gap-8 py-6 pl-6 transition-all text-slate-400">
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <IoIosPeople className="text-2xl" />
                            <h3>Employees</h3>
                        </div>
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <MdOutlinePivotTableChart className="text-2xl" />
                            <h3>In Stock</h3>
                        </div>
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <RiOrganizationChart className="text-2xl" />
                            <h3>Out Stock</h3>
                        </div>
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <LuBarChart3 className="text-2xl" />
                            <h3>Reports</h3>
                        </div>
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <MdOutlineAddShoppingCart className="text-2xl" />
                            <h3>Add Product</h3>
                        </div>
                        <div className="flex items-center gap-2 hover:pl-2 hover:text-slate-500">
                            <GoPersonAdd className="text-2xl" />
                            <h3>Add Employee</h3>
                        </div>
                    </div>
                </div>
                <div
                    className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary"
                    onClick={handleLogout}
                >
                    <RiLogoutCircleLine className="text-2xl"/>
                    Logout
                </div>
            </div>
        </article>
    )
}
export default Sidebar