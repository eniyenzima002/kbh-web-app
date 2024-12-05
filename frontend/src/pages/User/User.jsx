import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useRegister } from "../../hooks/useRegister";
import { useLogin } from "../../hooks/useLogin";
const User = () => {
  const { handleRegisterValue, handlerRegister, isRegisterLoading, formRegister } = useRegister();
  const { handleLoginValue, handlerLogin, isLoginLoading, formLogin } = useLogin();
  const [showRegister, setRegister] = useState(false);

  return (
    <section className="mt-5">
      <div className="bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto border text-slate-600">
        <div className="flex flex-col justify-center items-center gap-4">
          <HiOutlineUserCircle className="text-6xl" />
          {!showRegister ? (
            <h3 className="text-xl">KBH - Login</h3>
          ) : (
            <h3 className="text-xl">KBH - Register</h3>
          )}
        </div>

        <form className="grid gap-4 mt-5">
          {showRegister && (
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Username </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formRegister.username}
                onChange={handleRegisterValue}
                required
              />
            </div>
          )}
          
          {!showRegister ? (
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formLogin.email}
                onChange={handleLoginValue}
                required
              />
            </div>

          ) : (
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formRegister.email}
                onChange={handleRegisterValue}
                required
              />
            </div>
          ) }

          {!showRegister ? (
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formLogin.password}
                onChange={handleLoginValue}
                required
              />
            </div>

          ) : (
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formRegister.password}
                onChange={handleRegisterValue}
                required
              />
            </div>
          )}

          {showRegister && (
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Confirm Password </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password..."
                className="bg-slate-100 px-2 py-1 focus:outline-primary h-9 rounded border"
                value={formRegister.confirmPassword}
                onChange={handleRegisterValue}
                required
              />
            </div>
          )}

          {!showRegister ? (
            <button
              type="button"
              onClick={handlerLogin}
              disabled={isLoginLoading}
              className="bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide"
            >
              {isLoginLoading ? (
                  <span className="loading loading-spinner loading-md text-white"></span>
                ) : (
                  'Login'
              )}
            </button>
          ) : (
              <button
                type="button"
                onClick={() => handlerRegister()}
                disabled={isRegisterLoading}
                className="bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide"
              >
              {isRegisterLoading ? (
                  <span className="loading loading-spinner loading-md text-white"></span>
                ) : (
                  'Register'
              )}
            </button>
          )}

          {!showRegister ? (
            <p
              onClick={() => setRegister(true)}
              className="my-3 text-center hover:text-primary hover:underline cursor-pointer"
            >
              Don&apos;t have an account? Register
            </p>
          ) : (
            <p
              onClick={() => setRegister(false)}
              className="my-3 text-center hover:text-primary hover:underline cursor-pointer"
            >
              Already have an account? Login
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default User;
