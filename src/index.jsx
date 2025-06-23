
import { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loginMode, setLoginMode] = useState(true);

  const demoData = {
    tasks: [
      { date: "2025-06-20", work: "5 pcs Correct" },
      { date: "2025-06-21", work: "3 pcs Correct" },
    ],
    amount: "৳350",
    paymentStatus: "Payment Running",
    bkashNumber: "017XXXXXXXX",
  };

  const handleSubmit = () => {
    if (form.email && form.password && (loginMode || form.name)) {
      setUser({ ...form, id: Math.floor(Math.random() * 10000) });
    }
  };

  if (user) {
    return (
      <div style={{ textAlign: "center", width: "90%", maxWidth: "500px" }}>
        <h1 style={{ color: "lime", fontSize: "28px" }}>SK SHUVOJIT</h1>
        <p>FB ID SELL USER INFO</p>
        <hr />
        <p><b>User:</b> {user.name}</p>
        <p><b>User ID:</b> {user.id}</p>
        <p><b>Payment Status:</b> {demoData.paymentStatus}</p>
        <p><b>Amount Earned:</b> {demoData.amount}</p>
        <p><b>bKash/Nagad Number:</b> {demoData.bkashNumber}</p>
        <h3>Work History:</h3>
        <ul style={{ textAlign: "left" }}>
          {demoData.tasks.map((task, idx) => (
            <li key={idx}>{task.date}: {task.work}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", width: "90%", maxWidth: "400px" }}>
      <h2>{loginMode ? "Login" : "Create Account"}</h2>
      {!loginMode && (
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {loginMode ? "Login" : "Create Account"}
      </button>
      <p style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setLoginMode(!loginMode)}>
        {loginMode ? "Don't have an account? Create one" : "Already have an account? Login"}
      </p>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
