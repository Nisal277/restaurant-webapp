import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/login", {
        name,
        password,
        role,
      });

      if (res.data.success) {
        toast.success("Logged in successfully!");
        if (res.data.role === "Customer") {
           
          navigate("/");
        } else if (res.data.role === "Admin") {
          navigate("/admindash");
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  // Styling
  const wrapperStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f3e5f5, #e1bee7, #ede7f6)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const loginBoxStyle = {
    display: 'flex',
    width: '900px',
    height: '520px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(155, 89, 182, 0.2)',
  };

  const leftPaneStyle = {
    flex: 1,
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const rightPaneStyle = {
    flex: 1,
    background: 'linear-gradient(to right, #a4508b, #5f0a87)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const glassOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    zIndex: 0,
  };

  const headingStyle = {
    fontWeight: 'bold',
    marginBottom: '30px',
    fontSize: '32px',
    color: '#8e24aa',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#9c27b0',
    fontWeight: 500,
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #e1bee7',
    fontSize: '16px',
    backgroundColor: '#faf5fc',
    color: '#4a148c',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg fill=\'%239c27b0\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '18px 18px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: '#ba68c8',
    color: 'white',
    border: 'none',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#ab47bc',
  };

  const linkStyle = {
    marginTop: '15px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#7b1fa2',
  };

  return (
    <div style={wrapperStyle}>
      <div style={loginBoxStyle}>

        {/* Left Pane */}
        <div style={leftPaneStyle}>
          <h3 style={headingStyle}>Login</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={selectStyle}
              >
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              style={hover ? buttonHoverStyle : buttonStyle}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Login
            </button>

            <div style={linkStyle}>
              Don’t have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>

        {/* Right Pane */}
        <div style={rightPaneStyle}>
          <div style={glassOverlayStyle}></div>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', zIndex: 1 }}>
            Hey 👋
          </h2>
          <p style={{ fontSize: '20px', marginTop: '10px', zIndex: 1 }}>
            Welcome back!<br /> Please login to continue.
          </p>
        </div>
      </div>
    
    </div>
  );
}

export default Login;
