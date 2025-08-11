// App.jsx
import React from "react";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      backgroundColor: "#f4f4f4" 
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        width: "400px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          User Registration
        </h2>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
