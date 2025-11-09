function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to WhimTrail Dashboard</h1>
      <p>Here you can manage trips, bookings, and traveler recruitment.</p>
      <button onClick={() => {
  localStorage.removeItem("auth");
  window.location.href = "/login";
}}>
  Logout
</button>

    </div>
  );
}

export default Dashboard;
