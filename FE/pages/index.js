import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to My Full Stack App</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
