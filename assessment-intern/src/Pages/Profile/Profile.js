import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
function Profile() {
    const location = useLocation();
    const { fullName, dayOfBirth, emailProfile, phone } = location.state;
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: fullName,
            births: dayOfBirth,
            email: emailProfile,
            phone: phone,
        },
    });

    const onSubmit = (data) => {
        alert(`
      Dữ liệu sau khi update: 
      -Full name: ${data.name}.
      -Day of Birth: ${data.births}.
      -Email: ${data.email}.
      -Phone: ${data.phone}.
    `);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <h2 className={cx('title-profile')}>Profile</h2>
                    <form className={cx('form-login')} onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('item')}>
                            <h3 className={cx('name')}>Full name:</h3>
                            <input name="name" className={cx('name-input')} type={'name'} {...register('name')} />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('day')}>Day Of Birth:</h3>
                            <input
                                name="births"
                                className={cx('births-input')}
                                type={'births'}
                                {...register('births')}
                            />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('email')}>Email:</h3>
                            <input name="email" className={cx('email-input')} type={'email'} {...register('email')} />
                        </div>
                        <div className={cx('item')}>
                            <h3 className={cx('phone')}>Phone:</h3>
                            <input name="phone" className={cx('phone-input')} type={'phone'} {...register('phone')} />
                        </div>

                        <div className={cx('btn-profile')}>
                            <button className={cx('btn-update')} type="submit" onClick={() => {}}>
                                Update
                            </button>
                            <button
                                className={cx('btn-cancel')}
                                type="button"
                                onClick={() => {
                                    setValue('name', fullName);
                                    setValue('births', dayOfBirth);
                                    setValue('email', emailProfile);
                                    setValue('phone', phone);
                                }}
                            >
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
