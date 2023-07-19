import React from 'react';
import { Box,Stack,Typography } from '@mui/material';

const ExerciseVideos = ({exerciseVideos,name}) => {
  return (
   <Box>  
    <Typography variant="h3" mb='33px' alignItems='center'>Watch <span style={{color:'red', textTransform:'capitalize'}}>{name} </span>exercise videos</Typography>
    <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
      flexDirection:{lg:'row'},
      gap:{lg:'50px', xs:'0'}
    }}>
      {exerciseVideos?.slice(0,6).map((item,index)=>{
        return(
        <a
        key={index}
        className='exercise-video'
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target='blank'
        rel='noreferrer'
        >
          <img src={item.video.thumbnails[0].url} alt={item.video.title} />
        </a>)
      })}
    </Stack>
   </Box>
  )
}

export default ExerciseVideos