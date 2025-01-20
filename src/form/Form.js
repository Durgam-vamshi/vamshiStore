












import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";  // Optional: if you're using cookies for persistence (Firebase also handles sessions automatically)
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import  {useFirebase} from "../context/firebaseContext"; // Firebase context where sign-up/login methods are stored
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth methods
import "./form.css";  // Your CSS file for styling

const Form = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // React Router hook for navigation

  // Firebase methods from the context
  const { signUpUserWithEmailAndPassword, signInUserWithEmailAndPassword } = useFirebase();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && window.location.pathname !== "/home") {
        navigate("/home"); // Redirect to home page if user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  // Handle login (using Firebase auth)
  const handleLogin = async (email, password) => {
    try {
      await signInUserWithEmailAndPassword(email, password); // Firebase login method
      navigate("/home"); // Redirect to Home page
    } catch (error) {
      setError(error.message); // Handle errors (e.g., incorrect credentials)
    }
  };

  // Handle sign-up (using Firebase auth)
  const handleSignUp = async (email, password) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!"); // Password mismatch check
      return;
    }

    try {
      await signUpUserWithEmailAndPassword(email, password); // Firebase sign-up method
      navigate("/home"); // Redirect to Home page
    } catch (error) {
      setError(error.message); // Handle errors (e.g., weak password)
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin(email, password); // Login logic
    } else {
      handleSignUp(email, password); // Sign-up logic
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </div>
        {!isLogin && (
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
              required
            />
          </div>
        )}
        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

      <div className="toggle">
        <span>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </span>
        <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Form;
























