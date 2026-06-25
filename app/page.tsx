export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF5F8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#FF6699",
          }}
        >
          Forever Alive
        </h1>

        <h2
          style={{
            marginTop: "20px",
            fontSize: "28px",
          }}
        >
          A Promise to Stay Connected
        </h2>

        <p
          style={{
            marginTop: "30px",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Check in once a day.
          <br />
          If you stop checking in for an extended period,
          your loved ones will receive your message.
        </p>

        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#FF6699",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Download App
          </button>
        </div>
      </div>
    </main>
  );
}