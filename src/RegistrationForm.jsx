import React, { useState } from "react";

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submittedName, setSubmittedName] = useState("");

  const handleFullNameBlur = () => {
    if (!fullName.trim()) {
      setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.fullName;
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!studentId.trim()) newErrors.studentId = "Student ID is required";
    if (!agreed) newErrors.agreed = "You must agree to the terms";
    return newErrors;
  };

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    studentId.trim() !== "" &&
    agreed === true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmittedName(fullName);

    // reset form and validation state
    setFullName("");
    setEmail("");
    setStudentId("");
    setAgreed(false);
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            data-testid="full-name"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              // clear existing fullName error while typing
              setErrors((prev) => {
                const next = { ...prev };
                if (next.fullName) delete next.fullName;
                return next;
              });
            }}
            onBlur={handleFullNameBlur}
          />
          {errors.fullName && (
            <div
              data-testid="error-full-name"
              style={{ color: "red", fontSize: "0.9em" }}
            >
              {errors.fullName}
            </div>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            data-testid="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => {
                const next = { ...prev };
                if (next.email) delete next.email;
                return next;
              });
            }}
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: "0.9em" }}>{errors.email}</div>
          )}
        </div>

        <div>
          <label>Student ID</label>
          <input
            data-testid="student-id"
            type="text"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
              setErrors((prev) => {
                const next = { ...prev };
                if (next.studentId) delete next.studentId;
                return next;
              });
            }}
          />
          {errors.studentId && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              {errors.studentId}
            </div>
          )}
        </div>

        <div>
          <input
            data-testid="agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              setErrors((prev) => {
                const next = { ...prev };
                if (next.agreed) delete next.agreed;
                return next;
              });
            }}
          />
           I agree to terms and conditions
          {errors.agreed && (
            <div style={{ color: "red", fontSize: "0.9em" }}>{errors.agreed}</div>
          )}
        </div>

        <button
          data-testid="submit-btn"
          type="submit"
          disabled={!isFormValid}
          style={{
            background: isFormValid ? "#007bff" : "#ccc",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            cursor: isFormValid ? "pointer" : "not-allowed",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>

      {submittedName && (
        <div
          data-testid="confirmation"
          style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}
        >
          Thanks, {submittedName}!
        </div>
      )}
    </div>
  );
}
