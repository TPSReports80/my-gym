import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link
        to="/"
        style={{
          fontSize: "30px",
          textDecoration: "none",
          display: "flex",
          alignItems: "flex-end",
          fontWeight: "bold",
          color: "rgb(58, 18, 18)",
        }}
      >
        <img
          src={Logo}
          alt="My Gym"
          style={{ width: "48px", height: "42px", margin: "0 8px 0 20px" }}
        />{" "}
        My Gym
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Home
        </Link>
        <LinkS
          to="search-exercises"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </LinkS>
      </Stack>
    </Stack>
  );
};

export default Navbar;
