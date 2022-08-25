import React from "react";
import { Typography, Stack, Box } from "@mui/material";
const ExerciseVideos = ({ name, exerciseVideos }) => {
  return (
    <Box
      sx={{
        marginTop: {
          lg: "200px",
          xs: "20px",
        },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="34px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: {
            lg: "row",
          },
          gap: {
            lg: "110px",
            xs: "0",
          },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((el, index) => (
          <a
            key={index}
            className="exercise-video"
            target="_blank"
            href={`https://www.youtube.com/watch?v=${el.video.videoId}`}
          >
            <img src={el.video.thumbnails[0].url} alt={el.video.title} />
            <Box>
              <Typography
                variant="h5"
                fontSize="20px"
                fontWeight={600}
                color="#000"
              >
                {el.video.title}
              </Typography>
              <Typography variant="h6" color="#000" fontSize="16px">
                {el.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
