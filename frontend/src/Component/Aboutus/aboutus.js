
// // import React, { useState } from 'react';
// // import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // function About() {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <>
// //       <Box as="header" position="relative" backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')" backgroundPosition="center" backgroundSize="cover" height="70vh" display="flex" alignItems="center" justifyContent="center" color="white" textAlign="center" padding="4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} _hover={{ transition: 'transform 0.7s ease-in-out' }}>
        
// //         <Flex position="absolute" top="0" left="0" right="0" backgroundColor="rgba(0, 0, 0, 0.5)" padding="2" zIndex="1" alignItems="center" mb={16}>
// //           <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

// //           {/* Centering the search bar */}
// //           <InputGroup size="md" maxW="400px" borderColor="teal.300" bg="white" borderRadius="md" mx="auto" marginRight="4">
// //             {/* <InputLeftElement pointerEvents="none" children={<FontAwesomeIcon icon={faSearch} color="gray.300" />} /> */}
// //             <Input placeholder="Find rare things to do" variant="outline" borderColor="teal.300" focusBorderColor="teal.400" />
// //           </InputGroup>

// //           <Flex alignItems="center" ml="auto">
// //             <Button variant="link" color="white" mr={4}>Home</Button>
// //             <Button variant="link" color="white" mr={4}>About</Button>
// //             <Button variant="link" color="white" mr={4}>Contact Us</Button>
// //             <Button variant="link" color="white">Sign Up</Button>
// //           </Flex>
// //         </Flex>

// //         <Box position="relative" zIndex="1" textAlign="center">
// //           <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" color={hovered ? 'green.400' : 'white'}>Let's dive into nature</Heading>
// //           <Text fontSize="xl" mb={6}>Create unforgettable memories with us.</Text>
// //         </Box>
// //       </Box>

// //       <Container maxW="container.lg" py={6}>
// //         <Text fontSize="30px" pt="20px" pl="20px"><u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u></Text>
// //         <Text mb={6}>
// //           Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the
// //           eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by
// //           providing a platform where you can share your personal experiences and read the insights of others.
// //         </Text>
// //         <Text mb={6}>
// //           We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.<br /><br />
// //           <b style={{ fontSize: "35px" }}>"The mountains are calling and I must go."</b><br /><b style={{ fontSize: "35px" }}>— John Muir</b>
// //         </Text>
// //         <Text mb={6}>
// //           Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.<br /><br />
// //           <b style={{ fontSize: "35px" }}>"In every walk with nature one receives far more than he seeks."<br /> — John Muir</b>
// //           <img src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg" style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
// //         </Text>
// //         <Text fontSize="30px" pt="20px" pl="20px"><u>JOIN US!!</u></Text>
// //         <Text mb={6}>
// //           Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.<br /><br />
// //           <b style={{ fontSize: "35px" }}> "The Earth has music for those who listen."<br />— William Shakespeare</b>
// //         </Text>
// //       </Container>

// //       <Divider />

// //       <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
// //         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
// //         <Flex justify="center" mt={2}>
// //           <Text><a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a></Text>
// //         </Flex>
// //       </Box>
// //     </>
// //   );
// // }

// // export default About;



// // import React, { useState } from 'react';
// // import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';

// // function About() {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <>
// //       <Box
// //         as="header"
// //         position="relative"
// //         backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')"
// //         backgroundPosition="center"
// //         backgroundSize="cover"
// //         height="70vh"
// //         display="flex"
// //         alignItems="center"
// //         justifyContent="center"
// //         color="white"
// //         textAlign="center"
// //         padding="4"
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //         _hover={{ transition: 'transform 0.7s ease-in-out' }}
// //       >
// //         <Flex
// //           position="absolute"
// //           top="0"
// //           left="0"
// //           right="0"
// //           backgroundColor="rgba(0, 0, 0, 0.5)"
// //           padding="2"
// //           zIndex="1"
// //           alignItems="center"
// //           mb={16}
// //         >
// //           <Text fontSize="2xl" fontWeight="bold" mr="auto">
// //             DARE & SHARE
// //           </Text>

// //           <InputGroup
// //             size="md"
// //             maxW="400px"
// //             borderColor="teal.300"
// //             bg="white"
// //             borderRadius="md"
// //             mx="auto"
// //             marginRight="4"
// //           >
// //             <Input
// //               placeholder="Find rare things to do"
// //               variant="outline"
// //               borderColor="teal.300"
// //               focusBorderColor="teal.400"
// //             />
// //           </InputGroup>
// //         </Flex>

// //         <Box position="relative" zIndex="1" textAlign="center">
// //           <Heading
// //             as="h1"
// //             size="2xl"
// //             mb={4}
// //             transition="color 0.5s ease-in-out"
// //             color={hovered ? 'green.400' : 'white'}
// //           >
// //             Let's dive into nature
// //           </Heading>
// //           <Text fontSize="xl" mb={6}>
// //             Create unforgettable memories with us.
// //           </Text>
// //         </Box>
// //       </Box>

// //       <Container maxW="container.lg" py={6}>
// //         <Text fontSize="30px" pt="20px" pl="20px">
// //           <u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u>
// //         </Text>
// //         <Text mb={6}>
// //           Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by providing a platform where you can share your personal experiences and read the insights of others.
// //         </Text>
// //         <Text mb={6}>
// //           We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "The mountains are calling and I must go."
// //           </b>
// //           <br />
// //           <b style={{ fontSize: '35px' }}>— John Muir</b>
// //         </Text>
// //         <Text mb={6}>
// //           Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "In every walk with nature one receives far more than he seeks."
// //             <br /> — John Muir
// //           </b>
// //           <img
// //             src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg"
// //             style={{
// //               display: 'block',
// //               margin: '20px auto',
// //               maxWidth: '90%',
// //               height: 'auto',
// //             }}
// //             alt="Hiking Girls"
// //           />
// //         </Text>
// //         <Text fontSize="30px" pt="20px" pl="20px">
// //           <u>JOIN US!!</u>
// //         </Text>
// //         <Text mb={6}>
// //           Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "The Earth has music for those who listen."
// //             <br />— William Shakespeare
// //           </b>
// //         </Text>
// //       </Container>

// //       <Divider />

// //       <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
// //         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
// //         <Flex justify="center" mt={2}>
// //           <Text>
// //             <a
// //               href="https://www.example.com"
// //               style={{ color: 'teal.300', textDecoration: 'underline' }}
// //             >
// //               Privacy Policy
// //             </a>{' '}
// //             |{' '}
// //             <a
// //               href="https://www.example.com"
// //               style={{
// //                 color: 'teal.300',
// //                 textDecoration: 'underline',
// //                 marginLeft: '10px',
// //               }}
// //             >
// //               Terms of Service
// //             </a>
// //           </Text>
// //         </Flex>
// //       </Box>
// //     </>
// //   );
// // }

// // export default About;


// // import React, { useState } from 'react';
// // import { Box, Heading, Text, Flex, Container, Divider } from '@chakra-ui/react';

// // function About() {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <>
// //       <Box
// //         as="header"
// //         position="relative"
// //         backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')"
// //         backgroundPosition="center"
// //         backgroundSize="cover"
// //         height="70vh"
// //         display="flex"
// //         alignItems="center"
// //         justifyContent="center"
// //         color="white"
// //         textAlign="center"
// //         padding="4"
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //         _hover={{ transition: 'transform 0.7s ease-in-out' }}
// //       >
// //         <Flex
// //           position="absolute"
// //           top="0"
// //           left="0"
// //           right="0"
// //           backgroundColor="rgba(0, 0, 0, 0.5)"
// //           padding="2"
// //           zIndex="1"
// //           alignItems="center"
// //           mb={16}
// //         >
// //           <Text fontSize="2xl" fontWeight="bold" mr="auto">
// //             DARE & SHARE
// //           </Text>
// //         </Flex>

// //         <Box position="relative" zIndex="1" textAlign="center">
// //           <Heading
// //             as="h1"
// //             size="2xl"
// //             mb={4}
// //             transition="color 0.5s ease-in-out"
// //             color={hovered ? 'green.400' : 'white'}
// //           >
// //             Let's dive into nature
// //           </Heading>
// //           <Text fontSize="xl" mb={6}>
// //             Create unforgettable memories with us.
// //           </Text>
// //         </Box>
// //       </Box>

// //       <Container maxW="container.lg" py={6}>
// //         <Text fontSize="30px" pt="20px" pl="20px">
// //           <u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u>
// //         </Text>
// //         <Text mb={6}>
// //           Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by providing a platform where you can share your personal experiences and read the insights of others.
// //         </Text>
// //         <Text mb={6}>
// //           We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "The mountains are calling and I must go."
// //           </b>
// //           <br />
// //           <b style={{ fontSize: '35px' }}>— John Muir</b>
// //         </Text>
// //         <Text mb={6}>
// //           Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "In every walk with nature one receives far more than he seeks."
// //             <br /> — John Muir
// //           </b>
// //           <img
// //             src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg"
// //             style={{
// //               display: 'block',
// //               margin: '20px auto',
// //               maxWidth: '90%',
// //               height: 'auto',
// //             }}
// //             alt="Hiking Girls"
// //           />
// //         </Text>
// //         <Text fontSize="30px" pt="20px" pl="20px">
// //           <u>JOIN US!!</u>
// //         </Text>
// //         <Text mb={6}>
// //           Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.
// //           <br />
// //           <br />
// //           <b style={{ fontSize: '35px' }}>
// //             "The Earth has music for those who listen."
// //             <br />— William Shakespeare
// //           </b>
// //         </Text>
// //       </Container>

// //       <Divider />

// //       <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
// //         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
// //         <Flex justify="center" mt={2}>
// //           <Text>
// //             <a
// //               href="https://www.example.com"
// //               style={{ color: 'teal.300', textDecoration: 'underline' }}
// //             >
// //               Privacy Policy
// //             </a>{' '}
// //             |{' '}
// //             <a
// //               href="https://www.example.com"
// //               style={{
// //                 color: 'teal.300',
// //                 textDecoration: 'underline',
// //                 marginLeft: '10px',
// //               }}
// //             >
// //               Terms of Service
// //             </a>
// //           </Text>
// //         </Flex>
// //       </Box>
// //     </>
// //   );
// // }

// // export default About;

// import React, { useState } from 'react';
// import { Box, Heading, Text, Flex, Container, Divider } from '@chakra-ui/react';
// // import {InputGroup, InputLeftElement,Input} from '@chakra-ui/react';
// // import { FaSearch } from 'react-icons/fa';
// function About() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <>
//       <Box
//         as="header"
//         position="relative"
//         backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')"
//         backgroundPosition="center"
//         backgroundSize="cover"
//         height="70vh"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         color="white"
//         textAlign="center"
//         padding="4"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         _hover={{ transition: 'transform 0.7s ease-in-out' }}
//       >
//         <Flex
//           position="absolute"
//           top="0"
//           left="0"
//           right="0"
//           backgroundColor="rgba(0, 0, 0, 0.5)"
//           padding="2"
//           zIndex="1"
//           alignItems="center"
//           mb={16}
//           height="100px" // Increased height
//         >
//           <Text fontSize="2xl" fontWeight="bold" mr="auto">
//             DARE & SHARE
//           </Text>
//         </Flex>

//         <Box position="relative" zIndex="1" textAlign="center">
//           <Heading
//             as="h1"
//             size="2xl"
//             mb={4}
//             transition="color 0.5s ease-in-out"
//             color={hovered ? 'green.400' : 'white'}
//           >
//             Let's dive into nature
//           </Heading>
//           <Text fontSize="xl" mb={6}>
//             Create unforgettable memories with us.
//           </Text>
//         </Box>
//       </Box>

//       <Container maxW="container.lg" py={6}>
//         <Text fontSize="30px" pt="20px" pl="20px">
//           <u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u>
//         </Text>
//         <Text mb={6}>
//           Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by providing a platform where you can share your personal experiences and read the insights of others.
//         </Text>
//         <Text mb={6}>
//           We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "The mountains are calling and I must go."
//           </b>
//           <br />
//           <b style={{ fontSize: '35px' }}>— John Muir</b>
//         </Text>
//         <Text mb={6}>
//           Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "In every walk with nature one receives far more than he seeks."
//             <br /> — John Muir
//           </b>
//           <img
//             src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg"
//             style={{
//               display: 'block',
//               margin: '20px auto',
//               maxWidth: '90%',
//               height: 'auto',
//             }}
//             alt="Hiking Girls"
//           />
//         </Text>
//         <Text fontSize="30px" pt="20px" pl="20px">
//           <u>JOIN US!!</u>
//         </Text>
//         <Text mb={6}>
//           Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "The Earth has music for those who listen."
//             <br />— William Shakespeare
//           </b>
//         </Text>
//       </Container>

//       <Divider />

//       <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
//         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
//         <Flex justify="center" mt={2}>
//           <Text>
//             <a
//               href="https://www.example.com"
//               style={{ color: 'teal.300', textDecoration: 'underline' }}
//             >
//               Privacy Policy
//             </a>{' '}
//             |{' '}
//             <a
//               href="https://www.example.com"
//               style={{
//                 color: 'teal.300',
//                 textDecoration: 'underline',
//                 marginLeft: '10px',
//               }}
//             >
//               Terms of Service
//             </a>
//           </Text>
//         </Flex>
//       </Box>
//     </>
//   );
// }

// export default About;

// import React, { useState } from 'react';
// import { Box, Heading, Text, Flex, Container, Divider } from '@chakra-ui/react';

// function About() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <>
//       <Box
//         as="header"
//         position="relative"
//         backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')"
//         backgroundPosition="center"
//         backgroundSize="cover"
//         height="70vh"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         color="white"
//         textAlign="center"
//         padding="4"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         _hover={{ transition: 'transform 0.7s ease-in-out' }}
//       >
//         <Flex
//           position="absolute"
//           top="0"
//           left="0"
//           right="0"
//           backgroundColor="rgba(0, 0, 0, 0.5)"
//           padding="2"
//           zIndex="1"
//           alignItems="center"
//           mb={16}
//           height="100px" // Increased height
//         >
//           <Text fontSize="2xl" fontWeight="bold" mr="auto">
//             DARE & SHARE
//           </Text>
//         </Flex>

//         <Box position="relative" zIndex="1" textAlign="center">
//           <Heading
//             as="h1"
//             size="2xl"
//             mb={4}
//             transition="color 0.5s ease-in-out"
//             color={hovered ? 'green.400' : 'white'}
//           >
//             Let's dive into nature
//           </Heading>
//           <Text fontSize="xl" mb={6}>
//             Create unforgettable memories with us.
//           </Text>
//         </Box>
//       </Box>

//       <Container maxW="container.lg" py={6}>
//         <Text fontSize="30px" pt="20px" pl="20px">
//           <u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u>
//         </Text>
//         <Text mb={6}>
//           Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by providing a platform where you can share your personal experiences and read the insights of others.
//         </Text>
//         <Text mb={6}>
//           We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "The mountains are calling and I must go."
//           </b>
//           <br />
//           <b style={{ fontSize: '35px' }}>— John Muir</b>
//         </Text>
//         <Text mb={6}>
//           Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "In every walk with nature one receives far more than he seeks."
//             <br /> — John Muir
//           </b>
//           <img
//             src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg"
//             style={{
//               display: 'block',
//               margin: '20px auto',
//               maxWidth: '90%',
//               height: 'auto',
//             }}
//             alt="Hiking Girls"
//           />
//         </Text>
//         <Text fontSize="30px" pt="20px" pl="20px">
//           <u>JOIN US!!</u>
//         </Text>
//         <Text mb={6}>
//           Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.
//           <br />
//           <br />
//           <b style={{ fontSize: '35px' }}>
//             "The Earth has music for those who listen."
//             <br />— William Shakespeare
//           </b>
//         </Text>
//       </Container>

//       <Divider />

//       <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
//         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
//         <Flex justify="center" mt={2}>
//           <Text>
//             <a
//               href="https://www.example.com"
//               style={{ color: 'teal.300', textDecoration: 'underline' }}
//             >
//               Privacy Policy
//             </a>{' '}
//             |{' '}
//             <a
//               href="https://www.example.com"
//               style={{
//                 color: 'teal.300',
//                 textDecoration: 'underline',
//                 marginLeft: '10px',
//               }}
//             >
//               Terms of Service
//             </a>
//           </Text>
//         </Flex>
//       </Box>
//     </>
//   );
// }

// export default About;

import React, { useState } from 'react';
import { Box, Heading, Text, Flex, Button, InputGroup, Input, InputLeftElement, Container, Divider } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box
        as="header"
        position="relative"
        backgroundImage="url('https://wallpaperboat.com/wp-content/uploads/2021/04/13/74698/adventure-09.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        height="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        padding="4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        _hover={{ transition: 'transform 0.7s ease-in-out' }}
      >
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          padding="2"
          zIndex="1"
          alignItems="center"
          height="100px"
        >
          <Text fontSize="2xl" fontWeight="bold" mr="auto">
            DARE & SHARE
          </Text>

          <InputGroup size="md" maxW="400px" mx="auto" mr={4} borderRadius="md">
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Find rare things to do..."
              variant="outline"
              bg="white"
              borderColor="teal.300"
              focusBorderColor="teal.400"
            />
          </InputGroup>

          <Flex alignItems="center" ml="auto">
            <Button variant="link" color="white" fontSize={'20px'} mr={4} onClick={() => { 
          
          window.location.href = '/'; }}>Home</Button>
            <Button variant="link" color="white" mr={4}  fontSize={'20px'} onClick={() => { 
          
          window.location.href = '/aboutus'; }}>About</Button>
            <Button variant="link" color="white"  fontSize={'20px'} mr={4} onClick={() => { 
          
          window.location.href = '/contact'; }}>Contact</Button>
            <Button variant="link" fontSize={'20px'} color="white"onClick={() => { 
          
          window.location.href = '/signup'; }}>Sign Up</Button>
          </Flex>
        </Flex>

        <Box position="relative" zIndex="1" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            transition="color 0.5s ease-in-out"
            color={hovered ? 'green.400' : 'white'}
          >
            Let's dive into nature
          </Heading>
          <Text fontSize="xl" mb={6}>
            Create unforgettable memories with us.
          </Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px">
          <u>SHARE YOUR UNFORGETTABLE EXPERIENCE HERE!!!</u>
        </Text>
        <Text mb={6}>
          Welcome to <b>DARE & SHARE</b>, your go-to destination for sharing and discovering the wonders of nature through the eyes of fellow adventurers. Our mission is to connect nature enthusiasts, outdoor explorers, and adventure seekers by providing a platform where you can share your personal experiences and read the insights of others.
        </Text>
        <Text mb={6}>
          We’re passionate about fostering a community where every review helps to inspire and inform. Our platform is designed to be a source of both practical advice and emotional inspiration, connecting people with the natural world in meaningful ways.
          <br />
          <br />
          <b style={{ fontSize: '35px' }}>
            "The mountains are calling and I must go."
          </b>
          <br />
          <b style={{ fontSize: '35px' }}>— John Muir</b>
        </Text>
        <Text mb={6}>
          Our user-friendly interface makes it easy to browse through thousands of reviews, share your own experiences, and connect with like-minded adventurers. Each review is an opportunity to reflect on the beauty and challenges of nature, and to offer guidance to those who may follow in your footsteps.
          <br />
          <br />
          <b style={{ fontSize: '35px' }}>
            "In every walk with nature one receives far more than he seeks."
            <br /> — John Muir
          </b>
          <img
            src="https://www.campwalt.com/wp-content/uploads/2017/11/hiking-girls-1110x600.jpg"
            style={{
              display: 'block',
              margin: '20px auto',
              maxWidth: '90%',
              height: 'auto',
            }}
            alt="Hiking Girls"
          />
        </Text>
        <Text fontSize="30px" pt="20px" pl="20px">
          <u>JOIN US!!</u>
        </Text>
        <Text mb={6}>
          Join our community today and become a part of a network that values the incredible experiences that nature offers. Share your journey, read about others, and let’s inspire each other to explore the great outdoors with renewed passion and respect.
          <br />
          <br />
          <b style={{ fontSize: '35px' }}>
            "The Earth has music for those who listen."
            <br />— William Shakespeare
          </b>
        </Text>
      </Container>

      <Divider />

      <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Text>
            <a
              href="https://www.example.com"
              style={{ color: 'teal.300', textDecoration: 'underline' }}
            >
              Privacy Policy
            </a>{' '}
            |{' '}
            <a
              href="https://www.example.com"
              style={{
                color: 'teal.300',
                textDecoration: 'underline',
                marginLeft: '10px',
              }}
            >
              Terms of Service
            </a>
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default About;
