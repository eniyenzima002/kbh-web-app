import Board from "../components/board/Board"
import Sidebar from "../components/sidebar/Sidebar"

const Dashboard = () => {
    return (
        <div className="w-full h-screen flex text-slate-600">
            <Sidebar />
            <Board />
        </div>
    )
}
export default Dashboard