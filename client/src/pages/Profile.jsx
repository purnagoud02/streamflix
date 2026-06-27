import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [watchlistCount, setWatchlistCount] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const fetchWatchlist = async () => {
      try {
        if (!storedUser?._id) return;

        const { data } = await axios.get(
          `http://https://streamflix-excj.onrender.com/api/watchlist/${storedUser._id}`
        );

        setWatchlistCount(data.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWatchlist();
  }, []);

  if (!user) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        Please login first
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #111, #000)",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>👤 My Profile</h1>

      {/* PROFILE CARD */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          width: "300px",
        }}
      >
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>
  Status:{" "}
  <span style={{ color: user.isPremium ? "gold" : "gray" }}>
    {user.isPremium ? "👑 PREMIUM" : "FREE"}
  </span>
</p>

        {/* PLAN BADGE */}
        <p>
          Status:{" "}
          <span
            style={{
              color: user.isPremium ? "gold" : "gray",
              fontWeight: "bold",
            }}
          >
            {user.isPremium ? "PREMIUM 👑" : "FREE"}
          </span>
          <span>
  Status: {user.isPremium ? "👑 PREMIUM" : "FREE"}
</span>
        </p>

        <p>🎬 Watchlist: {watchlistCount}</p>
      </div>

      {/* ACTION BUTTONS */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => (window.location.href = "/subscription")}
          style={btnStyle}
        >
          💳 Upgrade Plan
        </button>

        <button
          onClick={() => (window.location.href = "/watchlist")}
          style={btnStyle}
        >
          ❤️ My Watchlist
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          style={btnStyle}
        >
          🎬 Continue Watching
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  margin: "10px",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  background: "#e50914",
  color: "white",
};

export default Profile;