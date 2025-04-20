import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../utils/api";

export default function Dashboard() {
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchRequests = async () => {
      try {
        const res = await api.get("/demo-requests");
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
        router.push("/login");
      }
    };

    fetchRequests();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>🎓 Demo Requests</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>School</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={req.id}>
                <td>{index + 1}</td>
                <td>{req.school_name}</td>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.phone}</td>
                <td>{req.message}</td>
                <td>{new Date(req.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && (
          <p style={{ marginTop: 20, textAlign: "center" }}>No requests found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#dc2626",
    color: "#fff",
    padding: "8px 14px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  th: {
    backgroundColor: "#f3f4f6",
    fontWeight: "bold",
    padding: "12px 10px",
    borderBottom: "1px solid #e5e7eb",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #e5e7eb",
  },
};
