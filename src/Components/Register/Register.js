import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, setForm, error } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setForm(data);


    return (
        <div className='w-50 mx-auto p-5 bg-white shadow login-area'>
            <h2 className='mb-5'>Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-floating mb-3">
                    <input {...register("name")} type="text" class="form-control" id="floatingInput" placeholder="Jhon Due" />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input {...register("email")} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input {...register("password", { required: true })} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                {errors.exampleRequired && <span>This field is required</span>}<br />
                {error}<br />
                <input className='input-btn my-3' type="submit" value='Register' /> or <button onClick={signInWithGoogle} className='service-btn text-center'>Google Sign In</button> <br />
                <Link to='/login' className='text-decoration-underline'>Already Registered? </Link>

            </form>
        </div>
    );
};

export default Register;