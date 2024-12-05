import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/api/users";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/features/auth/authSlice";


export const useLogin = () => {

    const [formLogin, setFormLogin] = useState({ email: '', password: '' });

    const { email, password } = formLogin;
    const handleLoginValue = (e) => {
        setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading: isLoginLoading, isSuccess, isError, error }] = useLoginMutation();
    
    const handlerLogin = async () => {
        if (email && password) {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
        }
        
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("User logged in successfully.");
            navigate("/dashboard");
        }
    }, [isSuccess, navigate]);


    useEffect(() => {
        if (isError) {
          toast.error((error).data.error);
        }
      }, [error, isError]);

    
    return { handleLoginValue, isLoginLoading, handlerLogin, formLogin };


}