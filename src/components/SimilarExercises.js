import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      p="20px"
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h4" mb={6}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        display="block"
        mb="100px"
        sx={{ p: "2", position: "relative" }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb={6}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        display="block"
        sx={{ p: "2", position: "relative" }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
