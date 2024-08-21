
// import React, { useState } from 'react';
// import axios from 'axios';
// import api from '../Actions/Api1';
// import { Box, Textarea, Input, Button, Flex, useToast, Text, Spacer } from '@chakra-ui/react';
// import { ArrowUpIcon } from '@chakra-ui/icons';

// // Header Component
// const Header = () => {
//   return (
//     <Box
//       as="header"
//       bgImage="url('https://wallpapercave.com/wp/wp4545692.jpg')"
//       bgSize="cover"
//       bgPosition="center"
//       p={4}
//       color="white"
//       position="relative"
//       zIndex={1000}
//       h="250px" // Adjust height as needed
//     >
//       <Text
//         fontSize="4xl"
//         fontWeight="bold"
//         textAlign="center"
//         position="absolute"
//         top="50%"
//         left="50%"
//         transform="translate(-50%, -50%)"
//         color="white"
//         zIndex={1}
//       >
//         Blogs
//       </Text>
//       <Flex align="center" justify="center" wrap="wrap" position="relative" zIndex={2}>
//         <Input
//           placeholder="Search..."
//           size="md"
//           width="500px"
//           mb={4}
//           borderRadius={6}
//           bg="black"
//           color="white"
//           _placeholder={{ color: 'gray.300' }}
//         />
//         <Flex>
//           <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'}>Home</Button>
//           <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'}>About</Button>
//           <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'}>Contact</Button>
//           <Button colorScheme="black" variant="link" fontSize={'20px'}>Signup</Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// // BlogForm Component
// const BlogFormComponent = ({ onBlogSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [place, setPlace] = useState('');
//   const [experience, setExperience] = useState('');
//   const [suggestions, setSuggestions] = useState('');
//   const toast = useToast();

//   const username = JSON.parse(sessionStorage?.auth)?.FirstName + " " + JSON.parse(sessionStorage?.auth)?.LastName;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!username) {
//       toast({
//         title: 'Username not found',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     try {
//       await axios.post(api + '/addBlog', { username, title, place, experience, suggestions });

//       onBlogSubmit({ username, title, place, experience, suggestions });
//       setTitle('');
//       setPlace('');
//       setExperience('');
//       setSuggestions('');

//       toast({
//         title: 'Blog posted successfully.',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error('Error posting blog:', error);
//     }
//   };

//   return (
//     <Flex
//       as="form"
//       onSubmit={handleSubmit}
//       align="center"
//       direction="column"
//       borderWidth="1px"
//       borderRadius="md"
//       overflow="hidden"
//       p={6}
//       m={4}
//       bg="rgba(255, 255, 255, 0.9)" // Semi-transparent white background
//       shadow="md"
//     >
//       <Box
//         flex="1"
//         p={4}
//         bg="rgba(255, 255, 255, 0.9)" // Semi-transparent white background
//         borderRadius="md"
//         w="100%"
//       >
//         <Input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//           mb={3}
//           required
//         />
//         <Input
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//           placeholder="Place"
//           mb={3}
//           required
//         />
//         <Textarea
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//           placeholder="Experience"
//           resize="none"
//           rows={4}
//           border="1px"
//           borderColor="gray.300"
//           mb={3}
//           required
//         />
//         <Textarea
//           value={suggestions}
//           onChange={(e) => setSuggestions(e.target.value)}
//           placeholder="Suggestions"
//           resize="none"
//           rows={4}
//           border="1px"
//           borderColor="gray.300"
//           mb={3}
//           required
//         />
//       </Box>
//       <Button
//         type="submit"
//         colorScheme="teal"
//         variant="solid"
//         px={6}
//         py={3}
//         borderRadius="full"
//         bg="black"
//         color="white"
//         _hover={{ bg: 'gray.800' }}
//       >
//         <ArrowUpIcon />
//       </Button>
//     </Flex>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <Box
//       as="footer"
//       bg="black"
//       color="white"
//       p={4}
//       textAlign="center"
//       mt={4}
//       width="100%"
//       position="absolute"
//       bottom={0}
//     >
//       <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
//     </Box>
//   );
// };

// // Main BlogHome Component
// const BlogHome = () => {
//   const handleBlogSubmit = (blog) => {
//     // Handle the new blog post here (e.g., update state or fetch new posts)
//   };

//   return (
//     <Box minH="100vh" position="relative" pb="100px">
//       <Header />
//       <main>
//         <BlogFormComponent onBlogSubmit={handleBlogSubmit} />
//       </main>
//       <Footer />
//     </Box>
//   );
// };

// export default BlogHome;

import React, { useState } from 'react';
import axios from 'axios';
import api from '../Actions/Api1';
import { Box, Textarea, Input, Button, Flex, useToast, Text, Spacer } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

// Header Component
const Header = () => {
  return (
    <Box
      as="header"
      bgImage="url('https://wallpapercave.com/wp/wp4545692.jpg')"
      bgSize="cover"
      bgPosition="center"
      p={4}
      color="white"
      position="relative"
      zIndex={1000}
      h="250px" // Adjust height as needed
    >
      <Flex justify="space-between" align="center">
        {/* Left side: DARE & SHARE Title */}
        <Text fontSize="3xl" fontWeight="bold" color="white">
          DARE & SHARE
        </Text>
        
        {/* Center: Search Bar */}
        <Input
          placeholder="Search..."
          size="md"
          width="300px"
          borderRadius={6}
          bg="black"
          color="white"
          _placeholder={{ color: 'gray.300' }}
          mx="auto" // This will center the search bar
        />

        {/* Right side: Navigation Menu */}
        <Flex align="center">
          <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'} onClick={() => { 
          
          window.location.href = '/'; }}>Home</Button>
          <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'}onClick={() => { 
          
          window.location.href = '/aboutus'; }} >About</Button>
          <Button colorScheme="black" variant="link" mr={4} fontSize={'20px'}onClick={() => { 
          
          window.location.href = '/contact'; }}>Contact</Button>
          <Button colorScheme="black" variant="link" fontSize={'20px'}onClick={() => { 
          
          window.location.href = '/signup'; }}>Signup</Button>
        </Flex>
      </Flex>
      <Text style={{marginTop:'30px',fontSize:'40px',marginLeft:'650px'}}>BLOGS</Text>
    </Box>
  );
};

// BlogForm Component
const BlogFormComponent = ({ onBlogSubmit }) => {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const toast = useToast();

  const username = JSON.parse(sessionStorage?.auth)?.FirstName + " " + JSON.parse(sessionStorage?.auth)?.LastName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      toast({
        title: 'Username not found',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await axios.post(api + '/addBlog', { username, title, place, experience, suggestions });

      onBlogSubmit({ username, title, place, experience, suggestions });
      setTitle('');
      setPlace('');
      setExperience('');
      setSuggestions('');

      toast({
        title: 'Blog posted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      align="center"
      direction="column"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      p={6}
      m={4}
      bg="rgba(255, 255, 255, 0.9)" // Semi-transparent white background
      shadow="md"
    >
      <Box
        flex="1"
        p={4}
        bg="rgba(255, 255, 255, 0.9)" // Semi-transparent white background
        borderRadius="md"
        w="100%"
      >
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          mb={3}
          required
        />
        <Input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Place"
          mb={3}
          required
        />
        <Textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience"
          resize="none"
          rows={4}
          border="1px"
          borderColor="gray.300"
          mb={3}
          required
        />
        <Textarea
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          placeholder="Suggestions"
          resize="none"
          rows={4}
          border="1px"
          borderColor="gray.300"
          mb={3}
          required
        />
      </Box>
      <Button
        type="submit"
        colorScheme="teal"
        variant="solid"
        px={6}
        py={3}
        borderRadius="full"
        bg="black"
        color="white"
        _hover={{ bg: 'gray.800' }}
      >
        <ArrowUpIcon />
      </Button>
    </Flex>
  );
};

// Footer Component
const Footer = () => {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      p={4}
      textAlign="center"
      mt={4}
      width="100%"
      position="fixed"
      bottom={0}
    >
      <Text>&copy; {new Date().getFullYear()} DARE&SHARE. All rights reserved.</Text>
    </Box>
  );
};

// Main BlogHome Component
const BlogHome = () => {
  const handleBlogSubmit = (blog) => {
    // Handle the new blog post here (e.g., update state or fetch new posts)
  };

  return (
    <Box minH="100vh" position="relative" pb="100px">
      <Header />
      <main>
        <BlogFormComponent onBlogSubmit={handleBlogSubmit} />
      </main>
      <Footer />
    </Box>
  );
};

export default BlogHome;
