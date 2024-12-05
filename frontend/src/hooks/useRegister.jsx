import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../redux/api/users";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/features/auth/authSlice";

export const useRegister = () => {
    const [formRegister, setFormRegister] = useState({ username: '', email: '', password: '', confirmPassword: '', });

    const { username, email, password, confirmPassword } = formRegister;
    const handleRegisterValue = (e) => {
        setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading: isRegisterLoading, isSuccess, isError, error }] = useRegisterMutation();
    
    const handlerRegister = async () => {
    
        if (password !== confirmPassword) {
          return toast.error("Password do not match");
        }
        
        if (email && password) {
            const res = await register({ username, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
        }
        
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("User registered successfully.");
            navigate("/dashboard");
        }
    }, [isSuccess, navigate]);

    useEffect(() => {
        if (isError) {
          toast.error((error).data.error);
        }
      }, [error, isError]);

    return { formRegister, handleRegisterValue, isRegisterLoading, handlerRegister };

}