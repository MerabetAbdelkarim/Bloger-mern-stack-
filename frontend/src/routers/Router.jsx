
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
function Router() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:id" element={<Detail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/createarticle" element={<CreateArticle />} />

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