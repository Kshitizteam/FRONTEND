import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS for styling

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2); // Move to password step
    } else {
      // Dummy authentication (you can replace with API call)
      if (email === "user@example.com" && password === "password") {
        navigate("/upload");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://tse3.mm.bing.net/th?id=OIP.f6J937qjgzRvGlxKY_Hm-QHaHi&pid=Api&P=0&h=180" alt="EY Logo" className="logo" />
        <h2>Sign in</h2>
        <form onSubmit={handleNext}>
          {step === 1 ? (
            <>
              <label>Email address*</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Next</button>
            </>
          ) : (
            <>
              <label>Password*</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
