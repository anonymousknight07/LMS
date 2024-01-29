import { NavbarRoutes } from "@/components/navbarroutes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-ful flex items-center bg-white shadow-sm">
          <MobileSidebar />
          <NavbarRoutes />  
        </div>
    )
}