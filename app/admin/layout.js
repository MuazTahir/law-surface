import SideNav from "@/components/sidenav/sidenav"

export default function Admin({children}){
    return <div className="flex">
        
        <SideNav></SideNav>
        {children}
        
    </div>
}