import React from 'react'
import { Box,Button,Stack,Typography } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px', xs:'70px'},
    ml:{sm:'50px'}
   }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
    </Typography>
    <Typography  fontWeight='700'
    sx={{fontSize:{lg:'44px', xs:'40px'}}}
    mb="23px" mt="30px">
        Sweat,Smile <br/>
        And Repeat
    </Typography>
    <Typography fontSize='22px' lineHe
    ='35px' mb={3}>
       Checkout the most effective exercises
    </Typography>
    <Button sx={{backgroundColor:'#FF2625'}} mt='20px' mb='20px' color="error" href="#exercises" variant="contained">Explore Exercises</Button>
    <Typography fontWeight={600}
    color='#ff2625'
    sx={{
        fontSize:{lg:'200px', xs:'100px' },
   opacity:0.1,
   display:{lg:'block',xs:'block'}     
    }}
    >Exercise</Typography>
    <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img'></img>
   </Box>
  )
}

export default HeroBanner