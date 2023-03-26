import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <h2 className={cx('title-profile')}>Profile</h2>
                    <form className={cx('form-login')}>
                        <div className={cx('item')}>
                            <h3 className={cx('name')}>Full name:</h3>
                            <input name="name" className={cx('name-input')} type={'name'} />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('day')}>Day Of Birth:</h3>
                            <input name="births" className={cx('births-input')} type={'births'} />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('email')}>Email:</h3>
                            <input name="email" className={cx('email-input')} type={'email'} />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('phone')}>Phone:</h3>
                            <input name="phone" className={cx('phone-input')} type={'phone'} />
                        </div>

                        <div className={cx('btn-profile')}>
                            <button className={cx('btn-update')} type="submit">
                                Update
                            </button>
                            <button className={cx('btn-cancel')} type="submit">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
