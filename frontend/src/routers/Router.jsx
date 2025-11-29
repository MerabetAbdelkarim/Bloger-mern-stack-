import { Route, Routes } from 'react-router-dom'
import Layout from "../components/layout/Layout";
import Home from "../pages/home"
import Articles from "../pages/Articles"
import Detail from "../pages/detail"
import About from "../pages/about"
import CreateArticle from "../pages/createarticle"
import Privacy from "../pages/privacy"
import Author from "../pages/author"
import Login from "../pages/login"
import Register from "../pages/register"
import NotFound from "../pages/notfound"
import PrivateRoute from "./PrivateRoute";
import Dashboard from '../pages/Dashboard';

function Router() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:id" element={<Detail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<Privacy />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/createarticle"
                        element={
                            <PrivateRoute>
                                <CreateArticle />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/author/:id"
                        element={
                            <PrivateRoute>
                                <Author />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default Router;
