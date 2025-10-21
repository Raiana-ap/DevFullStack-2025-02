import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 8,
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: 6,
  background: isActive ? "#111" : "#fff",
  color: isActive ? "#fff" : "#111"
});

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 12,
        borderBottom: "1px solid #eee"
      }}
    >
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/post/1" style={linkStyle}>Post 1</NavLink>
    </nav>
  );
}