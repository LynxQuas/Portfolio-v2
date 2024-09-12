import { Outlet } from "react-router-dom";
import MobileNavigation from "../components/MobileNavigation";

export default function AppLayout() {
    return (
        <>
            <header>
                <MobileNavigation />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
