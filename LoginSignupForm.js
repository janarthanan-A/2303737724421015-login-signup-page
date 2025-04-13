import React, { useState } from "react";
import "./form.css";

export default function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);
<form>
  {!isLogin && (
    <div className="form-group">
      <input type="text" required />
      <label>👤 Username</label>
    </div>
  )}
  <div className="form-group">
    <input type="email" required />
    <label>📧 Email</label>
  </div>
  <div className="form-group">
    <input type="password" required />
    <label>🔒 Password</label>
  </div>
  <button type="submit" className="submit-btn">
    {isLogin ? "Login 🚀" : "Sign Up 🎉"}
  </button>
</form>

  return (
    <div className="form-card">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        {!isLogin && (
          <input type="text" placeholder="👤 Username" required />
        )}
        <input type="email" placeholder="📧 Email" required />
        <input type="password" placeholder="🔒 Password" required />
        <button type="submit" className="submit-btn">
          {isLogin ? "Login 🚀" : "Sign Up 🎉"}
        </button>
      </form>
      <p className="toggle-link" onClick={toggleForm}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
}
