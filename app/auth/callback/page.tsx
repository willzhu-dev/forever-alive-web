export default function ResetPasswordPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Reset Password</h1>

        <input
          type="password"
          placeholder="New Password"
          style={{
            padding: "10px",
            width: "300px",
            display: "block",
            marginBottom: "10px",
          }}
        />

        <button>
          Update Password
        </button>
      </div>
    </main>
  )
}