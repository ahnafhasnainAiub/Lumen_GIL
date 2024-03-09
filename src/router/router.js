import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ErrorElement from '../shared/ErrorElement/ErrorElement';
import ContactUs from '../pages/ContactUs/ContactUs';
import Certificate from '../pages/Certificate/Certificate';
import AboutUs from '../pages/AboutUs/AboutUs';

const routes = [
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/about-us', element: <AboutUs /> },
            { path: '/certificate', element: <Certificate /> },
            { path: '/contact-us', element: <ContactUs /> },
        ],
    },
];

export const router = createBrowserRouter(routes);
