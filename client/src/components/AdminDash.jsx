import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Routes, Route, Link } from "react-router-dom";
import MenuDash from "./MenuDash"; // Import your Menu component



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const vibrantGradient = {
    background: "linear-gradient(135deg, #9d50bb, #6e48aa,rgb(180, 67, 137), #f15c74)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 15s ease infinite",
    minHeight: "100vh",
    color: "white"
  };

  const sidebarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    minHeight: "100vh",
    color: "white",
    transition: "width 0.3s",
    width: sidebarOpen ? "200px" : "60px"
  };

  const progressBarStyle = {
    background: "linear-gradient(to right, #f15c74, #e052a0)"
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 17000, 14000, 20000],
        backgroundColor: "#a5d6cf"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white"
        }
      },
      title: {
        display: true,
        text: "Monthly Revenue",
        color: "white"
      }
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "#444" }
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "#444" }
      }
    }
  };

  return (
    <div className="container-fluid" style={vibrantGradient}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="row">
        {/* Sidebar */}
        <div className="col-auto p-0" style={sidebarStyle}>
          <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
              {sidebarOpen && <h5 className="mb-0">Flavour Hub</h5>}
              <button className="btn btn-sm btn-light" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <i className="bi bi-list"></i>
              </button>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="/admindash">
                  <i className="bi bi-speedometer2 me-2"></i>
                  {sidebarOpen && "Dashboard"}
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/menudash">
                  <i className="bi bi-list-ul me-2"></i>
                  {sidebarOpen && "Menu"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-cart4 me-2"></i>
                  {sidebarOpen && "Orders"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="col p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Admin Dashboard</h2>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell me-3"></i>
              <img src="https://via.placeholder.com/30" className="rounded-circle me-2" alt="User" />
              <span>Flavour Hub Admin</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row text-dark">
            {[
              { label: "Total Menus", value: 120, progress: 45 },
              { label: "Total Orders Today", value: 180, progress: 62 },
              { label: "Total Clients Today", value: 240, progress: 80 },
              { label: "Revenue Day Ratio", value: 140, progress: 85 }
            ].map((card, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card bg-white text-dark shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{card.value}</h5>
                    <p className="card-text">{card.label}</p>
                    <div className="progress">
                      <div className="progress-bar" style={{ ...progressBarStyle, width: `${card.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                <div className="card-body text-white">
                  <Bar data={chartData} options={chartOptions} height={200} />
                </div>
              </div>
            </div>
          </div>

          {/* Order List */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Order List</h5>
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th>Status Order</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>#12345</td>
                    <td>Jan 24th, 2020</td>
                    <td>Roberto Carlo</td>
                    <td>Corner Street 5th Londo</td>
                    <td>$34.20</td>
                    <td><span className="badge bg-primary">New Order</span></td>
                    <td><i className="bi bi-three-dots"></i></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>#12366</td>
                    <td>Jan 22nd, 2020</td>
                    <td>Rohmad Khoir</td>
                    <td>Lando Street 5th Yogos</td>
                    <td>$44.25</td>
                    <td><span className="badge bg-info">On Delivery</span></td>
                    <td><i className="bi bi-three-dots"></i></td>
                  </tr>
                </tbody>
              </table>

              <Routes>
  
  <Route path="/menudash" element={<MenuDash />} />

</Routes>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDash;
