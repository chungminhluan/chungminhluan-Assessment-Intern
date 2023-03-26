import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';

const publicRoutes = [
    { path: '/', component: <Login /> },
    { path: '/profile', component: <Profile /> },
];
export default publicRoutes;
