import Header from "../header/page";
import Sidebarlayout from "../side-bar-layout/page";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebarlayout />

      <div className="w-full ">
        <Header />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
