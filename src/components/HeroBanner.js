import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "300px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      p="20px"
      position="relative"
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        lineHeight="48px"
        margin="22px 0 40px"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="40px">
        Check out the most effective exercises
      </Typography>
      <Link
        to="search-exercises"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "#ff2625",
            padding: "10px 20px",
          }}
        >
          Explore Exercises
        </Button>
      </Link>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        mt="40px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
