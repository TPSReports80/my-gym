import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" p="40px">
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <img
            src={Logo}
            alt="logo"
            width="48px"
            height="42px"
            style={{ marginRight: "8px" }}
          />
          <span
            style={{
              fontSize: "30px",
              textDecoration: "none",
              display: "flex",
              alignItems: "flex-end",
              fontWeight: "bold",
              color: "rgb(58, 18, 18)",
            }}
          >
            My Gym
          </span>
        </div>

        <Typography>Built by Mike Joo</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
