import { Logo } from "./Logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar=()=>{
    return ( 
        <div className="h-full border0r flex flex-col overflow-y-auto bg-gray-100 shadow-sm">

            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full ">
                <SidebarRoutes />
            </div>
          
        </div>
    )}

