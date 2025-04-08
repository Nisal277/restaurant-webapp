import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // optional
    navigate("/"); // ✅ Redirect to home page after logout
  }, [navigate]);

  return null;
};

export default Logout;
