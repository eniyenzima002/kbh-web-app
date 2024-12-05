import Navbar from "../Navbar/Navbar"
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEditCalendar } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { MdOutlineEditRoad } from "react-icons/md";
import { MdRebaseEdit } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { TbChartCandleFilled } from "react-icons/tb";

const Board = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div>

                <div className="flex items-center justify-between py-6 px-6">

                    <div className="flex items-center justify-between gap-4 bg-white p-8 rounded-2xl drop-shadow-xl">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="h-8 w-8 shadow-md flex items-center justify-center rounded-full text-white text-xl bg-primary">
                                <CgDollar />
                            </div>
                            <div>
                                <h3>Daily Sales</h3>
                                <h2 className="text-slate-800 font-bold pt-1 text-xl">$15,035</h2>
                            </div>
                            <h4 className="text-sm text-slate-400">Daily</h4>
                        </div>
                        <div className="pt-5 border-l-4 border-r-4 border-yellow-600 p-4 rounded-full">
                            <MdOutlineShoppingCartCheckout className="text-3xl text-lime-600"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 bg-white p-8 rounded-2xl drop-shadow-xl">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="h-8 w-8 shadow-md flex items-center justify-center rounded-full text-white text-xl bg-blue-400">
                                <TbChartCandleFilled />
                            </div>
                            <div>
                                <h3>Weekly Sales</h3>
                                <h2 className="text-slate-800 font-bold pt-1 text-xl">$150,007</h2>
                            </div>
                            <h4 className="text-sm text-slate-400">Weekly</h4>
                        </div>
                        <div className="pt-5 border-b-4 border-t-4 border-teal-400 p-4 rounded-full">
                            <TbReportMoney className="text-3xl text-yellow-500"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 bg-white p-8 rounded-2xl drop-shadow-xl">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="h-8 w-8 shadow-md flex items-center justify-center rounded-full text-white text-xl bg-rose-700">
                                <MdRebaseEdit />
                            </div>
                            <div>
                                <h3>Total Expenses</h3>
                                <h2 className="text-slate-800 font-bold pt-1 text-xl">$25,035</h2>
                            </div>
                            <h4 className="text-sm text-slate-400">Expenses</h4>
                        </div>
                        <div className="pt-5 border-l-4 border-r-4 border-blue-400 p-4 rounded-full">
                            <MdOutlineEditRoad className="text-3xl text-lime-600"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 bg-white p-8 rounded-2xl drop-shadow-xl">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="h-8 w-8 shadow-md flex items-center justify-center rounded-full text-white text-xl bg-green-400">
                                <MdBarChart />
                            </div>
                            <div>
                                <h3>Monthly Income</h3>
                                <h2 className="text-slate-800 font-bold pt-1 text-xl">$807,301</h2>
                            </div>
                            <h4 className="text-sm text-slate-400">Monthly</h4>
                        </div>
                        <div className="pt-5 border-b-4 border-t-4 border-lime-200 p-4 rounded-full">
                            <FaChartLine className="text-3xl text-amber-600"/>
                        </div>
                    </div>

                </div>

                <div className="px-4 pb-10 drop-shadow-lg rounded-2xl border mx-6">
                    <h3 className="px-2 py-6">Recently Added</h3>

                    <div className="flex flex-col drop-shadow-lg rounded">
                        <div className="-m-1.5 px-2 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Code</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Buy Price</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Sell Price</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Edit</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">54-6754</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">LG TV</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$1200</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$1500</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-500 hover:text-green-700 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <MdOutlineEditCalendar className="text-2xl"/>
                                            </button>
                                      </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <FaRegTrashCan className="text-2xl"/>
                                            </button>
                                      </td>
                                    </tr>
                                    
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">27-8364</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Mini Fridge</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$500</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$650</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-500 hover:text-green-700 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <MdOutlineEditCalendar className="text-2xl"/>
                                            </button>
                                      </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <FaRegTrashCan className="text-2xl"/>
                                            </button>
                                      </td>
                                    </tr>
                                    
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">74-3827</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Microwave</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$325</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$475</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-500 hover:text-green-700 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <MdOutlineEditCalendar className="text-2xl"/>
                                            </button>
                                      </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <FaRegTrashCan className="text-2xl"/>
                                            </button>
                                      </td>
                                    </tr>
                                    
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">84-4120</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Blender</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$175</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$265</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-500 hover:text-green-700 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <MdOutlineEditCalendar className="text-2xl"/>
                                            </button>
                                      </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <FaRegTrashCan className="text-2xl"/>
                                            </button>
                                      </td>
                                    </tr>
                                    
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">12-9302</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rice Cooker</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$125</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$195</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-500 hover:text-green-700 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <MdOutlineEditCalendar className="text-2xl"/>
                                            </button>
                                      </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                                                    <FaRegTrashCan className="text-2xl"/>
                                            </button>
                                      </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Board