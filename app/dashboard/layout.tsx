export default function DashboardLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
       <main>
        Navbar for dashboard
       {children}
       footer for dashboard
       </main>
        
    );
}