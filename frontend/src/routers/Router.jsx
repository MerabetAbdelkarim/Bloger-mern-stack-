
import { Route, Routes } from 'react-router-dom'
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"
import CreateArticle from "../pages/createarticle/CreateArticle"
import Privacy from "../pages/privacy/Privacy"
import Author from "../pages/author/Author"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import NotFound from "../pages/notfound/NotFound"
import ProtectedRoute from './ProtectedRoute';
function Router() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/article/:id" element={<Detail />} />
                    <Route path="/about" element={<About />} />

                    <Route
                        path="/createarticle"
                        element={
                            <ProtectedRoute>
                                <CreateArticle />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/author/:id" element={<Author />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="*" element={<NotFound />} />

                </Route>

            </Routes>
        </>
    )
}

export default Router