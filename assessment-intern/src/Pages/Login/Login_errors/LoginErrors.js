import classNames from 'classnames/bind';
import React from 'react';
import styles from './LoginErrors.module.scss';

const cx = classNames.bind(styles);

function LoginErrors() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('errors')}> ĐĂNG NHẬP THẤT BẠI !!!</h2>
            <div className={cx('goBack')}>
                <a href="/">Quay về trang chủ</a>
            </div>
        </div>
    );
}

export default LoginErrors;
