import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInWithGoogle, setUser, setError, error, handleEmailChange, handlePasswordChange, handleLogin, setLoading } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const loginUser = result.user
                setUser(loginUser)
                setError('')
                history.push(redirect_url)

            }).catch(error => {
                setError(error.message)
            }).finally(() => setLoading(false))
    }

    return (
        <div className='w-50 mx-auto p-5 bg-white shadow login-area'>
            <div>
                <h2 className=' py-3'>Login please</h2>

                <form onSubmit={handleLogin}>
                    <div className="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onBlur={handleEmailChange} className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    {error} <br />
                    <input className='input-btn my-3' type="submit" value='Login' /> or <button onClick={handleGoogleLogin} className='service-btn text-center'>Google Sign In</button>

                </form>
                <Link to='/register' className='text-decoration-underline' >New User? </Link> or
                <Link to='/register' className='text-decoration-underline'> Forgot Password? </Link>

            </div>
        </div>
    );
};

export default Login;