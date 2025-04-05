import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  XOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fd85b2",
        color: "#333",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              ChocoCrafter
            </span>
          </div>
          <p style={{ fontSize: "0.9rem" }}>
            Create Your Own Chocolate, Your Way!
          </p>
          <div className="flex items-center gap-3 text-3xl mt-3">
            <FacebookOutlined />
            <InstagramOutlined />
            <XOutlined />
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            GET IN TOUCH
          </h4>
          <div className="font-semibold flex flex-col items-start gap-2">
            <p style={{ fontSize: "0.9rem" }}>Karnataka Bangalore</p>
            <p style={{ fontSize: "0.9rem" }}>+91 1234567890</p>
            <p style={{ fontSize: "0.9rem" }}>info@ChocoCrafter.com</p>
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>SHOP</h4>
          <ul
            style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}
            className="font-semibold flex flex-col items-start gap-2"
          >
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>SERVICES</h4>
          <ul
            style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}
            className="font-semibold flex flex-col items-start gap-2"
          >
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Orders
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Address
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Account Details
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                24x7 Calls
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                Blog & News
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center  flex items-center justify-center">
        <p>© 2025 ChocoCrafter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
