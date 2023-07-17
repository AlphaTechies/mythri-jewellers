import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/admin/Navbar";
import { useSelector } from "react-redux";

const ProtectedLayout = () => {
  const user = useSelector((state) => state.admin.admin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default ProtectedLayout;
