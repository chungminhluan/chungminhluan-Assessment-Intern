import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Login() {
    const { register, handleSubmit } = useForm(true);
    const onSubmit = (data) => console.log(data);
    const navigate = useNavigate();

    const handleClickLogin = () => {
        if (register) {
            navigate('/profile');
        } else alert('Lỗi');
    };

    
    return (
        <div className={'login'}>
            <div className={'container'}>
                <div className={'card-login'}>
                    <h2 className={'title-login'}>Login</h2>
                    <form className={'form-login'} onSubmit={handleSubmit(onSubmit)}>
                        <div className={'email-item'}>
                            <h3 className={'email'}>Email:</h3>
                            <input
                                {...register('')}
                                className={'email-input'}
                                type={'email'}
                                placeholder={'Example@kyanon.digital'}
                            />
                        </div>
                        <div className={'password-item'}>
                            <h3 className={'password'}>Password:</h3>
                            <input
                                {...register}
                                className={'password-input'}
                                type={'password'}
                                placeholder={'******'}
                                id={'ipnPassword'}
                                // onChange={handlePassword((e) => setPassword(e.target.value))}
                            />
                        </div>
                        <div className={'btn-password'}>
                            <i className={''} type={'button'} id={'btnPassword'}></i>
                        </div>
                        <div className={'remember-container'}>
                            <label className={'checkbox-label'}>
                                <input className={'checkbox-input'} type={'checkbox'} checked />
                                <span className={'checkmark'}>
                                    <i className={''}></i>
                                </span>
                                <p>Show password</p>
                            </label>

                            <button className={'btn-signIn'} onClick={handleClickLogin}>
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
