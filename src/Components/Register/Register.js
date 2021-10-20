import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, form, setForm, error, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setForm(data);



    return (
        <div className='w-50 mx-auto p-5 bg-white shadow login-area'>
            <h2 className='mb-5'>Please Register</h2>
            <form onSubmit={handleRegistration}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onBlur={handleEmailChange} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                {error}<br />
                <input className='input-btn my-3' type="submit" value='Register' /> or <button onClick={signInWithGoogle} className='service-btn text-center'>Google Sign In</button> <br />
                <Link to='/login' className='text-decoration-underline'>Already Registered? </Link>

            </form>
        </div>
    );
};

export default Register;