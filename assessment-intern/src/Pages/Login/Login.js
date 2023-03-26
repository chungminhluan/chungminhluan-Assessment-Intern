import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const users = [
    {
        email: 'luanluanluan200797@gmail.com',
        password: 'chungminhluan',
        profile: {
            fullName: 'Chung Minh Luân',
            dayOfBirth: '30/02/1997',
            email: 'chungminhluan@gmail.com',
            phone: '19001560',
        },
    },
    {
        email: 'reactjs@gmail.com',
        password: '123456789',
    },
];

const schema = yup.object().shape({
    email: yup.string().required('this field is not empty').min(5, 'email must be at least 5 characters'),
    password: yup.string().required('this field is not empty').min(8, 'Password must be at least 8 characters'),
});

function Login() {
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const result = loginUser(data);
        const user = users.find((user) => user.email === data.email);
        // console.log(user.profile?.fullName);
        if (result === 'Login successful') {
            console.log('Login successful');
            navigate('/profile', {
                state: {
                    fullName: user.profile?.fullName,
                    dayOfBirth: user.profile?.dayOfBirth,
                    emailProfile: user.profile?.email,
                    phone: user.profile?.phone,
                },
            }); // navigate to the profile page
        } else {
            console.log(result);
            navigate('/loginErrors');
        }
    };

    function loginUser(data) {
        // console.log(data);
        const user = users.find((user) => user.email === data.email);

        if (!user) {
            return 'User not found';
        }

        if (user.password !== data.password) {
            return 'Incorrect password';
        }

        return 'Login successful';
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <h2 className={cx('title-login')}>Login</h2>
                    <form className={cx('form-login')} onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('item')}>
                            <h3 className={cx('email')}>Email:</h3>
                            <input
                                className={cx('email-input')}
                                // type={"email"}
                                placeholder={'Example@kyanon.digital'}
                                {...register('email')}
                            />
                            {errors.email && <p className={cx('errors')}>{errors.email.message}</p>}
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('password')}>Password:</h3>
                            <input
                                name="password"
                                className={cx('password-input')}
                                type={passwordShown ? 'text' : 'password'}
                                placeholder={'******'}
                                id={'ipnPassword'}
                                {...register('password')}
                            />
                            {errors.password && <p className={cx('errors')}>{errors.password.message}</p>}
                        </div>
                        <div className={cx('show-password')}>
                            <label className={cx('checkbox-label')}>
                                <input
                                    className={cx('checkbox-input')}
                                    type={'checkbox'}
                                    onClick={togglePasswordVisiblity}
                                />
                                <span className={cx('checkmark')}>
                                    <i className={cx('')}></i>
                                </span>
                                <p>Show password</p>
                            </label>

                            <button className={cx('btn-signIn')} type="submit">
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
