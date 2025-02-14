import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Template() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-sub-wrapper"></div>
      </div>
    </>
  );
}

export default Template;
