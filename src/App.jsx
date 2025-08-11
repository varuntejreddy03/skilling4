import React, { useState } from 'react';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!agree) newErrors.agree = 'You must agree to terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      setFullName('');
      setEmail('');
      setStudentId('');
      setAgree(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      {errors.fullName && <div className="error">{errors.fullName}</div>}

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Student ID</label>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      {errors.studentId && <div className="error">{errors.studentId}</div>}

      <div>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to terms and conditions
      </div>
      {errors.agree && <div className="error">{errors.agree}</div>}

      <button type="submit" disabled={!fullName || !email || !studentId || !agree}>
        Submit
      </button>

      {submitted && <div className="success">Form submitted successfully!</div>}
    </form>
  );
}
