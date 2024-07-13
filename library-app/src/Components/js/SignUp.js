import React, { useState, useEffect } from "react";
import "../css/SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsRegistered(true);
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setIsRegistered(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsRegistered(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="sign-up">
      {isRegistered ? (
        <div>
          <h1>مرحبا، {JSON.parse(localStorage.getItem("user")).username}</h1>
          <button class="logout-button" onClick={handleLogout}>
            تسجيل خروج
          </button>
        </div>
      ) : (
        <form onSubmit={handleSignUp}>
          <h1>تسجيل</h1>
          <div>
            <label>اسم المستخدم:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>كلمة المرور:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">تسجيل</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
