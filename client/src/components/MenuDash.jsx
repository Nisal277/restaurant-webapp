import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuDash.css"; // custom styles (you’ll create this)
import jsPDF from "jspdf";
import "jspdf-autotable"; // this *must* be imported AFTER jsPDF

const API_URL = "http://localhost:5001/api/menu";

const MenuDash = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [newItem, setNewItem] = useState({
    name: "",
    imageUrl: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenu();
  }, []);

  const handleEditClick = (item) => {
    setEditingItemId(item._id);
    setEditedItem({ ...item });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, editedItem);
      const updatedItem = response.data;
      setMenuItems((prevItems) =>
        prevItems.map((item) => (item._id === id ? updatedItem : item))
      );
      setEditingItemId(null);
      setEditedItem({});
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMenuItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post(API_URL, newItem);
      setMenuItems((prevItems) => [...prevItems, response.data]);
      setNewItem({ name: "", imageUrl: "", price: "", category: "" });
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Title
    doc.setFontSize(18);
    doc.text("Restaurant Menu Report", 105, 20, { align: "center" });
  
    // Date
    const date = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Generated on: ${date}`, 14, 28);
  
    // Table Data
    const tableColumn = ["#", "Name", "Category", "Price", "Image"];
    const tableRows = menuItems.map((item, index) => [
      index + 1,
      item.name,
      item.category,
      `Rs. ${item.price}`,
      "", // leave this empty so we only render the link once
    ]);
  
    doc.autoTable({
      startY: 35,
      head: [tableColumn],
      body: tableRows,
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        1: { cellWidth: 40 },
        2: { cellWidth: 30 },
        3: { halign: "right", cellWidth: 25 },
        4: { cellWidth: 50, halign: "center", textColor: [0, 102, 204] },
      },
      headStyles: {
        fillColor: [33, 150, 243],
        textColor: 255,
        fontSize: 11,
      },
      didDrawCell: function (data) {
        if (data.column.index === 4 && data.cell.section === "body") {
          const index = data.row.index;
          const item = menuItems[index];
          const linkText = "View Image";
          const textWidth = doc.getTextWidth(linkText);
          const x = data.cell.x + (data.cell.width - textWidth) / 2;
          const y = data.cell.y + 7;
  
          doc.textWithLink(linkText, x, y, {
            url: item.imageUrl,
          });
        }
      },
    });
  
    doc.save("menu-report.pdf");
  };
  
  
  
  
  

  return (
    <div className="menu-dash-container">

<div className="text-center mb-4">
  <button className="gradient-btn" onClick={generatePDF}>
    Generate Menu Report (PDF)
  </button>
</div>
 
      <div className="glass-card mb-4">
        <h2 className="text-center mb-3">Add New Item</h2>
        <div className="row g-2 justify-content-center">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleNewChange}
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="imageUrl"
              value={newItem.imageUrl}
              onChange={handleNewChange}
              placeholder="Image URL"
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="price"
              value={newItem.price}
              onChange={handleNewChange}
              placeholder="Price"
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="category"
              value={newItem.category}
              onChange={handleNewChange}
              placeholder="Category"
              className="form-control"
            />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <AddIcon
              onClick={handleAddItem}
              style={{ cursor: "pointer", color: "#0d6efd" }}
            />
          </div>
        </div>
      </div>

      <div className="glass-card">
        <h3 className="text-center mb-3">Menu Items</h3>
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item, index) => (
                <React.Fragment key={item._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <EditIcon
                        onClick={() => handleEditClick(item)}
                        style={{ cursor: "pointer", color: "#ffc107", marginRight: 8 }}
                      />
                      <DeleteIcon
                        onClick={() => handleDelete(item._id)}
                        style={{ cursor: "pointer", color: "#dc3545" }}
                      />
                    </td>
                  </tr>

                  {editingItemId === item._id && (
                    <tr>
                      <td colSpan="6">
                        <div className="row g-2 justify-content-center">
                          <div className="col-md-3">
                            <input
                              type="text"
                              name="name"
                              value={editedItem.name}
                              onChange={handleEditChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-3">
                            <input
                              type="text"
                              name="imageUrl"
                              value={editedItem.imageUrl}
                              onChange={handleEditChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-2">
                            <input
                              type="number"
                              name="price"
                              value={editedItem.price}
                              onChange={handleEditChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-2">
                            <input
                              type="text"
                              name="category"
                              value={editedItem.category}
                              onChange={handleEditChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-1 d-flex align-items-center">
                            <SaveIcon
                              onClick={() => handleSaveClick(item._id)}
                              style={{ cursor: "pointer", color: "#28a745" }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuDash;
