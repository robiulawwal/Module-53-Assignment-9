import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const HomeLayout = () => {

    return (
        <div className="">
            <header className="container mx-auto">
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;