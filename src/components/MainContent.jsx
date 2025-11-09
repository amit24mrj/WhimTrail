function MainContent() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Explore Travel Destinations</h2>
      <p style={styles.text}>
        WhimTrail helps users find travel opportunities, trips, and recruitment guides for tourism-related jobs.
        Browse curated destinations and plan your travel easily.
      </p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <img src="https://picsum.photos/400/250?1" style={styles.cardImg} />
          <h3 style={styles.cardTitle}>Adventure Trips</h3>
        </div>

        <div style={styles.card}>
          <img src="https://picsum.photos/400/250?2" style={styles.cardImg} />
          <h3 style={styles.cardTitle}>Holiday Tours</h3>
        </div>

        <div style={styles.card}>
          <img src="https://picsum.photos/400/250?3" style={styles.cardImg} />
          <h3 style={styles.cardTitle}>Work & Travel Programs</h3>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px", textAlign: "center" },
  heading: { fontSize: "28px", marginBottom: "10px" },
  text: { fontSize: "16px", maxWidth: "600px", margin: "0 auto 30px" },
  cards: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
  card: { width: "250px", borderRadius: "8px", overflow: "hidden", border: "1px solid #ddd" },
  cardImg: { width: "100%", height: "150px", objectFit: "cover" },
  cardTitle: { padding: "10px 0", fontSize: "18px" }
};

export default MainContent;
