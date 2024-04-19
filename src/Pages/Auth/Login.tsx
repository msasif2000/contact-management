import { AiFillEye } from "react-icons/ai";
import React, { useState } from "react";
// import LoginArt from "../../assets/Login Art.svg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
import { LuEyeOff } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";
import { TbHomeShare } from "react-icons/tb";


interface LoginData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { signInUser, loading, setLoading, userRefetch } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginData>();

    const onSubmit = async (data: LoginData) => {
        try {
            setLoading(true);
            await signInUser(data.email, data.password);
            toast.success("Login Successful", {
                position: "top-center",
                hideProgressBar: true,
                autoClose: 2000,
            });
            userRefetch()
            setLoading(false);

            navigate("/");
        } catch (error) {
            toast.error("Invalid user credentials.", {
                position: "top-center",
                hideProgressBar: true,
                autoClose: 2000,
            });
            setLoading(false);

        }
    };

    return (
        <>
            <div className="w-full min-h-screen flex mx-auto justify-center lg:px-3 md:px-12 px-8 mb-4">
                {/* form div */}
                <div className="lg:w-1/2 2xl:w-1/3 flex flex-col items-center justify-center">
                    <div className="w-full md:px-10 lg:px-4 xl:px-28 2xl:px-12">
                        <div className="">
                            <h1 className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold py-2">
                                Welcome Back
                            </h1>
                        </div>
                        {/* from starts here */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3  border-2 p-4 rounded-lg border-secondary">
                            <div className="form-control w-full">
                                <label htmlFor="email" className="font-semibold text-lg ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="Example@gmail.com"
                                    className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-primary duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full relative">
                                <label htmlFor="password" className="font-semibold text-lg ">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value:
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                            message:
                                                "Password must meet the requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
                                        },
                                    })}
                                    placeholder="at least 6 character"
                                    className="input-md md:input-lg border-b-4 outline-none rounded-lg  bg-[#F7FBFF] hover:border-b-primary duration-500"
                                />
                                <span
                                    className="absolute top-[44px] md:top-[48px] md:text-lg right-3 cursor-pointer lg:text-2xl"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEye /> : <LuEyeOff />}
                                </span>
                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                value=""
                                className="btn w-full bg-secondary text-white hover:bg-primary duration-500 "
                            >
                                {loading ? (
                                    <span className="loading loading-dots loading-md"></span>
                                ) : (
                                    "Sign in"
                                )}
                            </button>
                        </form>
                        <div className="divider divider-neutral">
                            <Link to="/" className="text-2xl text-tertiary">
                                <TbHomeShare />
                            </Link>
                        </div>
                        {/* Social Login Section */}
                        <SocialLogin />

                        <div className="flex justify-between lg:text-xl">
                            <p>Don't have an account?</p>
                            <Link to="/signup">
                                <p className="hover:text-primary cursor-pointer text-secondary font-semibold underline">
                                    Sign up
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;