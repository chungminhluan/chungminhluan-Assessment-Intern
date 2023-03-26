import './Login.css';
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // event.preventDefault();
        if (state) {
            navigate('/profile');
        } else alert(123);
    };

    // const {
    //     register,
    //     handleSubmit,

    // } = useForm(true);
    // const onSubmit = (data) => console.log(data);
    // const navigate = useNavigate();

    // const handleClickLogin = () => {
    //     if (register) {
    //         navigate('/profile');
    //     } else alert('Lỗi');
    // };

    // const data = [
    //     {
    //         email: ,
    //         password: '',
    //     },
    // ];
    return (
        <div className={'login'}>
            <div className={'container'}>
                <div className={'card-login'}>
                    <h2 className={'title-login'}>Login</h2>
                    <form className={'form-login'} onSubmit={handleSubmit}>
                        <div className={'email-item'}>
                            <h3 className={'email'}>Email:</h3>
                            <input
                                value={state.email}
                                name="email"
                                className={'email-input'}
                                type={'email'}
                                placeholder={'Example@kyanon.digital'}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={'password-item'}>
                            <h3 className={'password'}>Password:</h3>
                            <input
                                value={state.password}
                                name="password"
                                className={'password-input'}
                                type={'password'}
                                placeholder={'******'}
                                id={'ipnPassword'}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={'btn-password'}>
                            <i className={''} type={'button'} id={'btnPassword'}></i>
                        </div>
                        <div className={'remember-container'}>
                            <label className={'checkbox-label'}>
                                <input className={'checkbox-input'} type={'checkbox'} />
                                <span className={'checkmark'}>
                                    <i className={''}></i>
                                </span>
                                <p>Show password</p>
                            </label>

                            <button className={'btn-signIn'} type="submit">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
