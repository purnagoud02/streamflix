import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div
      style={{
        background: "#141414",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>🎬 StreamFlix Admin Dashboard</h1>

      <hr />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/admin/add">
          <button
            style={{
              padding: "15px 30px",
              background: "#e50914",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            ➕ Add Movie
          </button>
        </Link>

        <Link to="/admin/movies">
          <button
            style={{
              padding: "15px 30px",
              background: "#333",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            🎥 Manage Movies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;