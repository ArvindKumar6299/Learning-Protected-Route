import React, { useState } from "react";
import axios from "axios";

const Text = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Function to make a request to the middleware-protected route
  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:9000/protected", {
        withCredentials: true, // Ensures cookies are sent with the request
      });
      setMessage(response.data.message);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      setMessage(""); // Clear any previous messages
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Middleware Authentication Test</h1>
      <button
        onClick={checkAuth}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Check Authentication
      </button>

      {/* Display message or error */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default Text;
