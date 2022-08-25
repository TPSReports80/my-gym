import React from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData, API_URL } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = React.useState("");

  const [bodyParts, setBodyParts] = React.useState([]);

  React.useEffect(() => {
    const renderExercises = async () => {
      const bodyPartsData = await fetchData(
        `${API_URL}/bodyPartList`,
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    renderExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(API_URL, exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    } else {
      console.log("no search");
    }
  };

  return (
    <Stack
      id="search-exercises"
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Great Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            height: "56px",
            position: "absolute",
            right: "0",

            textTransform: "uppercase",
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            width: {
              lg: "175px",
              xs: "80px",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
