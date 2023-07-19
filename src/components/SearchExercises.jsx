import React, { useState, useEffect } from "react";
import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercises = ({bodyPart,setBodyPart,setExercises}) => {
  const [search, setSearch] = useState("");

const[bodyParts,setBodyParts]=useState([])
useEffect(() => {
const fetchExerciseData=async()=>{
  const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  exerciseOptions);
setBodyParts(['all', ...bodyPartsData])
}
fetchExerciseData();
}, [])


  const handelSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchExercises=exerciseData.filter((exercise)=>
      exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search) 
      );
      setSearch('');
      setExercises(searchExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You
        <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          id="filled-search"
          label="Search exercises"
          type="search"
          variant="filled"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            height: "76px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        ></TextField>
        <Button
          variant="contained"
          color="error"
          sx={{
            bgColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handelSearch}
          position="absolute"
          right="0"
        >
          Search
        </Button>
        <Box sx={{position:'relative',width:'100%', p:'20px'}}>
        </Box>
      </Box>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
    </Stack>
  );
};

export default SearchExercises;
