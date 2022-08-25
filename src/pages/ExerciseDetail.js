import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  exerciseOptions,
  fetchData,
  API_URL,
  YT_API_URL,
  youtubeOptions,
} from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = React.useState({});
  const [exerciseVideos, setExerciseVideos] = React.useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = React.useState([]);
  const [equipmentExercises, setEquipmentExercises] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";
        const exerciseDetailData = await fetchData(
          `${API_URL}/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(
          `${YT_API_URL}/search?query=${exerciseDetailData.name}`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${API_URL}/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${API_URL}/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        console.log(equipmentExercisesData);
        setEquipmentExercises(equipmentExercisesData);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
