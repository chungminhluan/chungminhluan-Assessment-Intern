import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicRoutes from './routes/routes';

function AppRouter() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    return <Route key={index} path={route.path} element={route.component} />;
                })}
            </Routes>
        </Router>
    );
}

export default AppRouter;
