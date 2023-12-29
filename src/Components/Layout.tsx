import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface Props {
    headerHeight: number;
    setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

function Layout({ headerHeight, setHeaderHeight }: Props) {

    return (
        <div>
            <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />

            {/* An <Outlet> renders whatever child route is currently active in App.js */}
            <Outlet />

            <Footer />
        </div>
    );
}

export default Layout;