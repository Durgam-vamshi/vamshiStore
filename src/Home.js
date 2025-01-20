import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const navigate = useNavigate();
  const user = Cookies.get("user");

  // If no user is found in cookies, navigate to login page
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const data = {
    name: "thapa store",
  };

  return (
    <div>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
