// import React from 'react';
// import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

// export function Header() {
//   // Adjust font size based on breakpoint
//   const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
//   const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
//   const titleSize = useBreakpointValue({ base: 'md', md: 'lg' });

//   return (
//     <Box
//       as="header"
//       position="relative"
//       backgroundImage="url('https://images.unsplash.com/photo-1520721080161-b4c6a6454306?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoaW5rJTIwYmlnfGVufDB8fDB8fHww')"
//       backgroundPosition="center"
//       backgroundSize="cover"
//       backgroundRepeat="no-repeat"
//       height="70vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       color="white"
//       textAlign="center"
//       padding="4"
//       margin="0" // Ensure no margin affects the layout
//       border="none" // Remove any potential border
//       boxShadow="none" // Remove any potential shadow
//       transition="transform 0.7s ease-in-out"
//       _hover={{
//         // transform: 'scale(1.03)',
//         backgroundPosition: 'left center',
//       }}
//     >
//       <Box position="absolute" top="4" left="4" zIndex="1">
//         <Text
//           fontSize="30px"
//           color="white"
//           fontWeight="bold"
//           textTransform="uppercase"
//         >
//           DARE&SHARE
//         </Text>
//       </Box>
//       <Box position="relative" zIndex="1" padding="4">
//         <Heading
//           as="h1"
//           size={headingSize}
//           mb={4}
//           color="white"
//         >
//           Let’s Dive Into Nature
//         </Heading>
//         <Text fontSize={textSize} mb={6}>
//           Discover exciting journeys and explore the great outdoors.
//         </Text>
//       </Box>
//     </Box>
//   );
// }

// export default Header;


// import React from 'react';
// import { Box, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
// import Navbar from '../navbar/Navbar';
// import { Cards } from '../cards/cards';
// import LatteCard from '../lattecard/lattecard';
// export function Header() {
//   // Adjust font size based on breakpoint
//   const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
//   const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
//   const titleSize = useBreakpointValue({ base: 'md', md: 'lg' });

//   return (
//     <>
//     <Navbar/>
//     <Box
//       as="header"
//       position="relative"
//       backgroundImage="url('https://images.unsplash.com/photo-1520721080161-b4c6a6454306?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoaW5rJTIwYmlnfGVufDB8fDB8fHww')"
//       backgroundPosition="center"
//       backgroundSize="cover"
//       backgroundRepeat="no-repeat"
//       height="70vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       color="white"
//       textAlign="center"
//       padding="4"
//       margin="0" // Ensure no margin affects the layout
//       border="none" // Remove any potential border
//       boxShadow="none" // Remove any potential shadow
//       transition="transform 0.7s ease-in-out"
//       _hover={{
//         backgroundPosition: 'left center',
//       }}
//     >
//       <Box position="absolute" top="4" left="4" zIndex="1">
//         <Text
//           fontSize="30px"
//           color="white"
//           fontWeight="bold"
//           textTransform="uppercase"
//         >
//           DARE&SHARE
//         </Text>
//       </Box>
//       <Box position="relative" zIndex="1" padding="4">
//         <Heading
//           as="h1"
//           size={headingSize}
//           mb={4}
//           color="white"
//         >
//           Let’s Dive Into Nature
//         </Heading>
//         <Text fontSize={textSize} mb={6}>
//           Discover exciting journeys and explore the great outdoors.
//         </Text>
       
//       </Box>
//     </Box>
//     <Cards/>
//     <LatteCard/>
   
//     </>
//   );
// }

// export default Header;


import React from 'react';
import { Box, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import { Cards } from '../cards/cards';
import LatteCard from '../lattecard/lattecard';
//import BlogForm from '../Blog/Blog_form'; 
import BlogsList from '../blogpage/blog_list';


export function Header() {
  // Adjust font size based on breakpoint
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <>
      <Navbar/>
      <Box
        as="header"
        position="relative"
        backgroundImage="url('https://images.unsplash.com/photo-1520721080161-b4c6a6454306?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoaW5rJTIwYmlnfGVufDB8fDB8fHww')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        height="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        padding="4"
        margin="0"
        border="none"
        boxShadow="none"
        transition="transform 0.7s ease-in-out"
        _hover={{
          backgroundPosition: 'left center',
        }}
      >
        <Box position="absolute" top="4" left="4" zIndex="1">
          <Text
            fontSize="30px"
            color="white"
            fontWeight="bold"
            textTransform="uppercase"
          >
            DARE&SHARE
          </Text>
        </Box>
        <Box position="relative" zIndex="1" padding="4">
          <Heading
            as="h1"
            size={headingSize}
            mb={4}
            color="white"
          >
            Let's Dive Into Nature
          </Heading>
          <Text fontSize={textSize} mb={6}>
            Discover exciting journeys and explore the great outdoors.
          </Text>
        </Box>
      </Box>
      <Cards/>
     
      <BlogsList/>
      <LatteCard/> {/* Render the Blogs component here */}
    </>
  );
}

export default Header;
