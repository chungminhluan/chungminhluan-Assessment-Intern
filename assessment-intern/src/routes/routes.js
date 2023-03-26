// import Login from '../Pages/Login/Login';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import LoginErrors from '../Pages/Login/Login_errors/LoginErrors';

const publicRoutes = [
    { path: '/', component: <Login /> },
    { path: '/profile', component: <Profile /> },
    { path: '/loginerrors', component: <LoginErrors /> },
];
export default publicRoutes;
