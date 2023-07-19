import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Clean up the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  const settings = {
   
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    smooth: true,
    slidesToShow: isSmallScreen ? 2 : 4,
    slidesToScroll: 1,
  };

  console.log(data);
  return (
    <div style={{ width: "100vw", position: "relative" }}>
      <Slider {...settings}>
         {data.map((item) => {
          return (
            <Box
              key={item.id || item}
              title={item.id || item}
              itemId={item.id || item}
              m="0 40px"
            >
            {isBodyPart? <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />:<ExerciseCard exercise={item}/>}
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default HorizontalScrollbar;
