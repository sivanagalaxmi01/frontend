//  import React from 'react';
// import {
//   Box,
//   Card,
//   CardBody,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   Button,
//   useTheme,
//   Grid,
//   GridItem
// } from '@chakra-ui/react';

// export const LatteCard = () => {
//   // Access the theme to use custom font families
//   const theme = useTheme();

//   return (
//     <Box position='relative' p={4} maxW='full' mx='auto' minH='calc(100vh - 100px)'>
//       <Card
//         direction={{ base: 'column', sm: 'row' }}
//         overflow='hidden'
//         variant='outline'
//         boxShadow='md'
//         borderRadius='lg'
//         textAlign='center'
//         mx='auto'
//         mb='100px' // Margin-bottom for space for footer
//         position='relative' // Ensure the button is positioned relative to this card
//         p={4} // Add padding to ensure content isn't too close to the edges
//       >
//         <Image
//           objectFit='cover'
//           maxW={{ base: '100%', sm: '500px' }}
//           src='https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg'
//           alt='Caffe Latte'
//         />

//         <Stack spacing={4} p={4}>
//           <CardBody>
//             <Heading size='xl' mb={4} fontFamily={theme.fonts.heading}>
//               Your travel journey starts here
//             </Heading>
//             <Text py='5' fontFamily={theme.fonts.body}>
//               <Heading size='md'>
//                 Sign up for travel tips, personalized itineraries, and vacation inspiration straight to your inbox
//               </Heading>
//             </Text>
//           </CardBody>
//         </Stack>
       
//         {/* Button positioned at the bottom right of the card */}
//         <Box position='absolute' bottom='20px' right='20px'>
//           {/* <Button 
//             variant='solid' 
//             colorScheme='blue' 
//             size='lg'
//             px='8' 
//             py='4' 
//             fontSize='lg'
//             borderWidth='2px'
//             boxShadow='lg'
//             borderColor='blue.500'
//             _hover={{
//               bg: 'blue.600',
//               color: 'white',
//               boxShadow: 'xl',
//               transform: 'scale(1.05)',
//             }}
//           >
//             Signup
//           </Button> */}
//            <Button
//           colorScheme="teal"
//           variant="solid"
//           size="lg"
//           mt={4}
//           onClick={() => { 
//             // Handle button click here, e.g., redirect to the create blog page
//             window.location.href = '/blogf'; 
//           }}
//         >
//           Create Blog
//         </Button> 
//         </Box>
//       </Card>
      
//       <Box
//         position='absolute'
//         bottom='0'
//         left='0'
//         width='full'
//         p={4}
//         textAlign='center'
//         bg='gray.100'
//         borderTop='1px'
//         borderColor='gray.200'
//       >
//         <Text fontSize='25px' color='black.600'>
//           © {new Date().getFullYear()} DARE&SHARE. All rights reserved.
//         </Text>
//       </Box>

//       {/* Our Suggestions Section */}
//       <Box
//         p={4}
//         maxW='full'
//         mx='auto'
//         mt={4} // Margin-top to create space from the card
//         bg='navy' // Use a valid color name
//         color='white'
//         borderRadius='md'
//         boxShadow='md'
//       >
//         <Heading size='lg' mb={5} fontFamily={theme.fonts.heading}>
//           Our Suggestions
//         </Heading>
//         <Grid templateColumns='repeat(3, 1fr)' gap={4}>
//           <GridItem>
//             <Text>Surfing in Bondi Beach, Sydney</Text>
//           </GridItem>
//           <GridItem>
//             <Text>Rock Climbing in Kalymnos, Greece</Text>
//           </GridItem>
//           <GridItem>
//             <Text>Scuba Diving in Great Barrier Reef</Text>
//           </GridItem>
//           <GridItem>
//             <Text>River Rafting in Colorado River</Text>
//           </GridItem>
//           <GridItem>
//             <Text>Sky Cycling in Gimmelwald, Switzerland</Text>
//           </GridItem>
//           <GridItem>
//             <Text>Skiing in Chamonix-Mont-Blanc</Text>
//           </GridItem>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default LatteCard;

import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useTheme,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const LatteCard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const auth = sessionStorage.getItem('auth');
  const test = auth && JSON.parse(auth)?.Email; // Check if auth and Email exist

  console.log('Auth:', auth); // Log auth data
  console.log('Test:', test); // Log test value

  const handleCreateBlog = () => {
    if (test) {
      navigate('/blogf');
    } else {
      navigate('/signup');
    }
  };

  const handleSuggestionsNavigation = (path) => {
    if (test) {
      navigate(path);
    } else {
      navigate('/signup');
    }
  };

  return (
    <Box position='relative' p={4} maxW='full' mx='auto' minH='calc(100vh - 100px)'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        boxShadow='md'
        borderRadius='lg'
        textAlign='center'
        mx='auto'
        mb='100px'
        position='relative'
        p={4}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '500px' }}
          src='https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg'
          alt='Caffe Latte'
        />

        <Stack spacing={4} p={4}>
          <CardBody>
            <Heading size='xl' mb={4} fontFamily={theme.fonts.heading}>
              Your travel journey starts here
            </Heading>
            <Text py='5' fontFamily={theme.fonts.body}>
              <Heading size='md'>
                Sign up for travel tips, personalized itineraries, and vacation inspiration straight to your inbox
              </Heading>
            </Text>
          </CardBody>
        </Stack>
       
        <Box position='absolute' bottom='20px' right='20px'>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            mt={4}
            onClick={handleCreateBlog}
          >
            Create Blog
          </Button>
        </Box>
      </Card>
      
      <Box
        position='absolute'
        bottom='0'
        left='0'
        width='full'
        p={4}
        textAlign='center'
        bg='gray.100'
        borderTop='1px'
        borderColor='gray.200'
      >
        <Text fontSize='25px' color='black.600'>
          © {new Date().getFullYear()} DARE&SHARE. All rights reserved.
        </Text>
      </Box>

      <Box
        p={4}
        maxW='full'
        mx='auto'
        mt={4}
        bg='navy'
        color='white'
        borderRadius='md'
        boxShadow='md'
      >
        <Heading size='lg' mb={5} fontFamily={theme.fonts.heading}>
          Our Suggestions
        </Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/surf')}>Surfing in Bondi Beach, Sydney</Text>
          </GridItem>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/rock')}>Rock Climbing in Kalymnos, Greece</Text>
          </GridItem>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/scuba')}>Scuba Diving in Great Barrier Reef</Text>
          </GridItem>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/raft')}>River Rafting in Colorado River</Text>
          </GridItem>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/cycle')}>Sky Cycling in Gimmelwald, Switzerland</Text>
          </GridItem>
          <GridItem>
            <Text as="button" onClick={() => handleSuggestionsNavigation('/skiing')}>Skiing in Chamonix-Mont-Blanc</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatteCard;
