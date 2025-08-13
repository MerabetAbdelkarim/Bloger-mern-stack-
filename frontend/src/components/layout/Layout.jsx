import { Outlet } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import FooTer from "../footer/FooTer"
import { withAuthStatus } from "../../HOC/withAuthStatus";

const NavbarWithAuth = withAuthStatus(NavBar);
function Layout() {
    return (
        <>
            <NavbarWithAuth />
            <Outlet />
            <FooTer />
        </>
    )
}

export default Layout