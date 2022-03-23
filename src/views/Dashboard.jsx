import React, { useState, useEffect } from "react";

const Dashboard = (props: any) => {
  const [slide, setSlide] = useState(1);

  const backgrounds = [
    "https://lumiere-a.akamaihd.net/v1/images/marchion-ro-concept-art-5450_80572382.jpeg?region=0%2C17%2C1281%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/62335c2ddbbde50001f2766b-image_75531ce1.jpeg?region=0%2C0%2C1536%2C864",
    "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-singlehero-b-mobile_31e06718.jpeg?region=0,0,640,1000",
  ];

  // slide show effect
  /**  useEffect(() => {
    setTimeout(() => {
      if (slide > backgrounds.length) setSlide(0);
      else setSlide((state) => state + 1);
    }, 2 * 1000);
  }, [slide]);*/

  const background1 =
    "https://lumiere-a.akamaihd.net/v1/images/marchion-ro-concept-art-5450_80572382.jpeg?region=0%2C17%2C1281%2C720";
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/62335c2ddbbde50001f2766b-image_75531ce1.jpeg?region=0%2C0%2C1536%2C864";
  const background2 =
    "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-singlehero-b-mobile_31e06718.jpeg?region=0,0,640,1000";

  return (
    <main
      className="h-full w-full"
      style={{
        backgroundImage: `url(${backgrounds[slide]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></main>
  );
};

export default Dashboard;
