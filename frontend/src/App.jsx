import { Navigate, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";

const App = () => {
  const authUser = useSelector(state => state.Auth);

  return (
    <>
      <ToastContainer />
      <main>
        <Routes>
          <Route path="/" element={authUser ? <Dashboard /> : <Navigate to="/auth" replace />} />
          <Route index={true} path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}
export default App