// import React from 'react';
// import { HStack, Link, Box, Flex } from '@chakra-ui/react';
// import SearchBar from '../searchbar/searchbar';

// export const Navbar = () => {
//   return (
//     <Box
//       as="nav"
//       position="absolute"
//       top="0"
//       left="0"
//       right="0"
//       zIndex="2"
//       padding="10px"
//       background="transparent" // Transparent background
//       boxShadow="none" // Remove any shadow
//       margin="0" // Remove any margin
//       height="80px" // Adjust height as needed
//     >
//       <Flex
//         justifyContent="space-between"
//         alignItems="center"
//         height="100%"
//       >
//         {/* Space for left-aligned navbar components */}
//         <Box flex="1" />
        
//         {/* Centered SearchBar with increased width */}
//         <Box flex="2" display="flex" justifyContent="center">
//           <SearchBar width="200%" maxWidth="1000px" /> {/* Adjust width as needed */}
//         </Box>
        
//         {/* Right-aligned Navbar components */}
//         <HStack
//           spacing="4"
//           color="white"
//           display="flex"
//           alignItems="center"
//           flex="1"
//           justifyContent="flex-end"
//         >
//           <Link
//             href="#"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black', // Change text color to black on hover
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//             fontSize="25px"
//           >
//             Home
//           </Link>
//           <Link
//             href="#"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//              fontSize="25px"
//           >
//             About
//           </Link>
//           <Link
//             href="#"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//              fontSize="25px"
//           >
//             Services
//           </Link>
//           <Link
//             href="#"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//             fontSize="25px"

//           >
//             Contact
//           </Link>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;




// import React from 'react';
// import { HStack, Link as ChakraLink, Box, Flex } from '@chakra-ui/react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import SearchBar from '../searchbar/searchbar';

// export const Navbar = () => {
//   return (
//     <Box
//       as="nav"
//       position="absolute"
//       top="0"
//       left="0"
//       right="0"
//       zIndex="2"
//       padding="10px"
//       background="transparent" // Transparent background
//       boxShadow="none" // Remove any shadow
//       margin="0" // Remove any margin
//       height="80px" // Adjust height as needed
//     >
//       <Flex
//         justifyContent="space-between"
//         alignItems="center"
//         height="100%"
//       >
//         {/* Space for left-aligned navbar components */}
//         <Box flex="1" />
        
//         {/* Centered SearchBar with increased width */}
//         <Box flex="2" display="flex" justifyContent="center">
//           <SearchBar width="200%" maxWidth="1000px" /> {/* Adjust width as needed */}
//         </Box>
        
//         {/* Right-aligned Navbar components */}
//         <HStack
//           spacing="4"
//           color="white"
//           display="flex"
//           alignItems="center"
//           flex="1"
//           justifyContent="flex-end"
//         >
//           <ChakraLink
//             as={Link} // Use Link from react-router-dom for navigation
//             to="/"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black', // Change text color to black on hover
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//             fontSize="25px"
//           >
//             Home
//           </ChakraLink>
//           <ChakraLink
//             as={Link}
//             to="/Aboutus"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//              fontSize="25px"
//           >
//             About
//           </ChakraLink>
//           <ChakraLink
//             as={Link}
//             to="/signup"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//              fontSize="25px"
//           >
//             signup
//           </ChakraLink>
//           <ChakraLink
//             as={Link}
//             to="/contact"
//             padding="12px 24px"
//             borderRadius="8px"
//             color="white"
//             _hover={{
//               color: 'black',
//               textDecoration: 'none',
//             }}
//             transition="color 0.3s"
//             fontSize="25px"
//           >
//             Contact
//           </ChakraLink>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

import React from 'react';
import { HStack, Link as ChakraLink, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchBar from '../searchbar/searchbar';

export const Navbar = () => {
  return (
    <Box
      as="nav"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="2"
      padding="10px"
      background="transparent" // Transparent background
      boxShadow="none" // Remove any shadow
      margin="0" // Remove any margin
      height="80px" // Adjust height as needed
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        {/* Space for left-aligned navbar components */}
        <Box flex="1" />
        
        {/* Centered SearchBar with increased width */}
        <Box flex="2" display="flex" justifyContent="center">
          <SearchBar width="200%" maxWidth="1000px" /> {/* Adjust width as needed */}
        </Box>
        
        {/* Right-aligned Navbar components */}
        <HStack
          spacing="3"
          color="white"
          display="flex"
          alignItems="center"
          flex="1"
          justifyContent="flex-end"
        >
          <ChakraLink
            as={Link} // Use Link from react-router-dom for navigation
            to="/"
            padding="12px 16px" // Adjusted padding
            borderRadius="8px"
            color="white"
            _hover={{
              textDecoration: 'underline',
              textDecorationColor: 'white', // White underline color
              textDecorationThickness: '2px', // Thickness of the underline
              textUnderlineOffset: '4px' // Offset for the underline
            }}
            transition="text-decoration 0.3s"
            fontSize="20px"
            whiteSpace="nowrap" // Prevent text wrapping
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/Aboutus"
            padding="12px 16px" // Adjusted padding
            borderRadius="8px"
            color="white"
            _hover={{
              textDecoration: 'underline',
              textDecorationColor: 'white',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px'
            }}
            transition="text-decoration 0.3s"
            fontSize="20px"
            whiteSpace="nowrap" // Prevent text wrapping
          >
            About
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/signup"
            padding="12px 16px" // Adjusted padding
            borderRadius="8px"
            color="white"
            _hover={{
              textDecoration: 'underline',
              textDecorationColor: 'white',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px'
            }}
            transition="text-decoration 0.3s"
            fontSize="20px"
            whiteSpace="nowrap" // Prevent text wrapping
          >
            Sign Up
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/contact"
            padding="12px 16px" // Adjusted padding
            borderRadius="8px"
            color="white"
            _hover={{
              textDecoration: 'underline',
              textDecorationColor: 'white',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px'
            }}
            transition="text-decoration 0.3s"
            fontSize="20px"
            whiteSpace="nowrap" // Prevent text wrapping
          >
            Contact
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
