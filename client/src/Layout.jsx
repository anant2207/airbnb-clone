import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <div className="py-8 px-8 flex flex-col min-h-screen">
            <Header/>
            <div className="border-t mt-8">
              <Outlet/>
            </div>
        </div>
    );
}