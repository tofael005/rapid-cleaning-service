import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/Blogs/ViewDetails";
import Contact from "../Pages/Contact/Contact";
import Booked from "../Pages/BookForm/Booked";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "service",
                element: <Service />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "blog",
                element: <Blogs />
            },
            {
                path: "viewDetails",
                element: <ViewDetails />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "booked",
                element: <Booked />
            }
        ]
    }
])

export default router;