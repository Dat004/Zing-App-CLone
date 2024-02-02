import Sidebar from "./DefaultComponents/Sidebar";

function DefaultLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar className='flex w-60'></Sidebar>
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
