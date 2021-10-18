import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { signInWithGoogle } = useAuth()
    return (
        <div className='w-50 mx-auto p-5 bg-white shadow login-area'>
            <div>
                <h2 className='text-center py-3'>Login please</h2>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <div class="form-floating mb-3">
                        <input {...register("example")} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input {...register("exampleRequired", { required: true })} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}<br />
                    <input className='input-btn my-3' type="submit" value='Login' /> or <button onClick={signInWithGoogle} className='service-btn text-center'>Google Sign In</button>

                </form>
                <Link to='/register' className='text-decoration-underline'>New User? </Link> or
                <Link to='/register' className='text-decoration-underline'> Forgot Password? </Link>

            </div>
        </div>
    );
};

export default Login;