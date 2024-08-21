
// // import React from 'react';
// // import {
// //   SimpleGrid,
// //   Card,
// //   CardBody,
// //   Image,
// //   Stack,
// //   Heading,
// //   Text,
// //   CardFooter,
// //   ButtonGroup,
// //   Box,
// //   VStack
// // } from "@chakra-ui/react";

// // export const Cards = ({ image }) => {
// //     return (
// //         <VStack spacing={8} align='center' px={4} py={8}>
// //             <Heading 
// //                 as="h1" 
// //                 size="lg" 
// //                 fontWeight="bold" 
// //                 px={4}  // Add horizontal padding to the Heading
// //                 textAlign="center"  // Center the text if needed
// //             >
// //                 Unforgettable Nature Experiences
// //             </Heading>
// //             <SimpleGrid 
// //                 columns={{ base: 1, sm: 2, md: 3 }} 
// //                 spacing='20px' // Increased spacing between items
// //                 maxW='1200px'  // Adjust the maximum width as needed
// //                 mx='auto'      // Center the grid horizontally
// //             >
// //                 {[ // Use array mapping to simplify card creation
// //                     {
// //                         src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
// //                         title: 'River Rafting',
// //                         description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.'
// //                     },
// //                     {
// //                         src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
// //                         title: 'Scuba Diving',
// //                         description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.'
// //                     },
// //                     {
// //                         src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
// //                         title: 'Sky Cycling',
// //                         description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.'
// //                     },
// //                     {
// //                         src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
// //                         title: 'Rock Climbing',
// //                         description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.'
// //                     },
// //                     {
// //                         src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
// //                         title: 'Surfing',
// //                         description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.'
// //                     },
// //                     {
// //                         src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
// //                         title: 'Skiing',
// //                         description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.'
// //                     }
// //                 ].map((card, index) => (
// //                     <Box
// //                         key={index}
// //                         transition='transform 0.3s ease'
// //                         _hover={{ transform: 'scale(0.95)' }}  // Scale down on hover
// //                         border="none"
// //                         boxShadow="md"
// //                         display='flex'
// //                         flexDirection='column'
// //                         height='100%'
// //                     >
// //                         <Card maxW='md' border="none" boxShadow="none" height='100%'>
// //                             <CardBody p={0}>
// //                                 <Image
// //                                     src={card.src}
// //                                     alt={card.title}
// //                                     borderRadius='lg'
// //                                     objectFit='cover'
// //                                     boxShadow='md'
// //                                 />
// //                                 <Stack mt='4' spacing='4'>
// //                                     <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
// //                                     <Text fontSize='md' lineHeight='taller' p={4}>
// //                                         {card.description}
// //                                     </Text>
// //                                 </Stack>
// //                             </CardBody>
// //                             <CardFooter>
// //                                 <ButtonGroup spacing='2'>
// //                                     {/* <Button variant='solid' colorScheme='blue'> */}
// //                                 </ButtonGroup>
// //                             </CardFooter>
// //                         </Card>
// //                     </Box>
// //                 ))}
// //             </SimpleGrid>
// //         </VStack>
// //     );
// // };
// // mport React from 'react';
// // import { SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, Box, VStack } from "@chakra-ui/react";
// // import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// // export const Cards = () => {
// //     return (
// //         <VStack spacing={8} align='center' px={4} py={8}>
// //             <Heading 
// //                 as="h1" 
// //                 size="lg" 
// //                 fontWeight="bold" i
// //                 px={4}  
// //                 textAlign="center"  
// //             >
// //                 Unforgettable Nature Experiences
// //             </Heading>
// //             <SimpleGrid 
// //                 columns={{ base: 1, sm: 2, md: 3 }} 
// //                 spacing='20px' 
// //                 maxW='1200px'  
// //                 mx='auto'      
// //             >
// //                 {[
// //                     {
// //                         src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
// //                         title: 'River Rafting',
// //                         description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.',
// //                         route: '/raft' // Example route
// //                     },
// //                     {
// //                         src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
// //                         title: 'Scuba Diving',
// //                         description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.',
// //                         route: '/scuba' // Example route
// //                     },
// //                     {
// //                         src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
// //                         title: 'Sky Cycling',
// //                         description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.',
// //                         route: '/cycle' // Example route
// //                     },
// //                     {
// //                         src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
// //                         title: 'Rock Climbing',
// //                         description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.',
// //                         route: '/rock' // Example route
// //                     },
// //                     {
// //                         src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
// //                         title: 'Surfing',
// //                         description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.',
// //                         route: '/surf' // Example route
// //                     },
// //                     {
// //                         src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
// //                         title: 'Skiing',
// //                         description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.',
// //                         route: '/skiing' // Example route
// //                     }
// //                 ].map((card, index) => (
// //                     <Box
// //                         key={index}
// //                         transition='transform 0.3s ease'
// //                         _hover={{ transform: 'scale(0.95)' }}  
// //                         border="none"
// //                         boxShadow="md"
// //                         display='flex'
// //                         flexDirection='column'
// //                         height='100%'
// //                     >
// //                         <Link to={card.route}> 
// //                             <Card maxW='md' border="none" boxShadow="none" height='100%'>
// //                                 <CardBody p={0}>
// //                                     <Image
// //                                         src={card.src}
// //                                         alt={card.title}
// //                                         borderRadius='lg'
// //                                         objectFit='cover'
// //                                         boxShadow='md'
// //                                     />
// //                                     <Stack mt='4' spacing='4'>
// //                                         <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
// //                                         <Text fontSize='md' lineHeight='taller' p={4}>
// //                                             {card.description}
// //                                         </Text>
// //                                     </Stack>
// //                                 </CardBody>
// //                             </Card>
// //                         </Link>
// //                     </Box>
// //                 ))}
// //             </SimpleGrid>
// //         </VStack>
// //     );
// // };
// // import React from 'react';
// // import { SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, Box, VStack } from "@chakra-ui/react";
// // import { Link, useNavigate } from 'react-router-dom'; // Import Link and useHistory from react-router-dom

// // export const Cards = () => {
// //     const navigate = useNavigate(); // Hook to navigate programmatically

// //     const handleCardClick = (route) => {
// //         const isAuthenticated = sessionStorage.getItem('auth'); // Check session storage for authToken
// //         if (isAuthenticated) {
// //             navigate(route); // Navigate to the card's route if authenticated
// //         } else {
// //             navigate('/signin'); // Redirect to sign-in page if not authenticated
// //         }
// //     };

// //     return (
// //         <VStack spacing={8} align='center' px={4} py={8}>
// //             <Heading 
// //                 as="h1" 
// //                 size="lg" 
// //                 fontWeight="bold" 
// //                 px={4}  
// //                 textAlign="center"  
// //             >
// //                 Unforgettable Nature Experiences
// //             </Heading>
// //             <SimpleGrid 
// //                 columns={{ base: 1, sm: 2, md: 3 }} 
// //                 spacing='20px' 
// //                 maxW='1200px'  
// //                 mx='auto'      
// //             >
// //                 {[
// //                     {
// //                         src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
// //                         title: 'River Rafting',
// //                         description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.',
// //                         route: '/raft'
// //                     },
// //                     {
// //                         src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
// //                         title: 'Scuba Diving',
// //                         description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.',
// //                         route: '/scuba'
// //                     },
// //                     {
// //                         src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
// //                         title: 'Sky Cycling',
// //                         description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.',
// //                         route: '/cycle'
// //                     },
// //                     {
// //                         src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
// //                         title: 'Rock Climbing',
// //                         description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.',
// //                         route: '/rock'
// //                     },
// //                     {
// //                         src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
// //                         title: 'Surfing',
// //                         description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.',
// //                         route: '/surf'
// //                     },
// //                     {
// //                         src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
// //                         title: 'Skiing',
// //                         description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.',
// //                         route: '/skiing'
// //                     }
// //                 ].map((card, index) => (
// //                     <Box
// //                         key={index}
// //                         transition='transform 0.3s ease'
// //                         _hover={{ transform: 'scale(0.95)' }}  
// //                         border="none"
// //                         boxShadow="md"
// //                         display='flex'
// //                         flexDirection='column'
// //                         height='100%'
// //                         onClick={() => handleCardClick(card.route)} // Handle click event
// //                     >
// //                         <Card maxW='md' border="none" boxShadow="none" height='100%'>
// //                             <CardBody p={0}>
// //                                 <Image
// //                                     src={card.src}
// //                                     alt={card.title}
// //                                     borderRadius='lg'
// //                                     objectFit='cover'
// //                                     boxShadow='md'
// //                                 />
// //                                 <Stack mt='4' spacing='4'>
// //                                     <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
// //                                     <Text fontSize='md' lineHeight='taller' p={4}>
// //                                         {card.description}
// //                                     </Text>
// //                                 </Stack>
// //                             </CardBody>
// //                         </Card>
// //                     </Box>
// //                 ))}
// //             </SimpleGrid>
// //         </VStack>
// //     );
// // };
// // import React from 'react';
// // import {
// //   SimpleGrid,
// //   Card,
// //   CardBody,
// //   Image,
// //   Stack,
// //   Heading,
// //   Text,
// //   CardFooter,
// //   ButtonGroup,
// //   Box,
// //   VStack
// // } from "@chakra-ui/react";

// // export const Cards = ({ image }) => {
// //     return (
// //         <VStack spacing={8} align='center' px={4} py={8}>
// //             <Heading 
// //                 as="h1" 
// //                 size="lg" 
// //                 fontWeight="bold" 
// //                 px={4}  // Add horizontal padding to the Heading
// //                 textAlign="center"  // Center the text if needed
// //             >
// //                 Unforgettable Nature Experiences
// //             </Heading>
// //             <SimpleGrid 
// //                 columns={{ base: 1, sm: 2, md: 3 }} 
// //                 spacing='20px' // Increased spacing between items
// //                 maxW='1200px'  // Adjust the maximum width as needed
// //                 mx='auto'      // Center the grid horizontally
// //             >
// //                 {[ // Use array mapping to simplify card creation
// //                     {
// //                         src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
// //                         title: 'River Rafting',
// //                         description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.'
// //                     },
// //                     {
// //                         src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
// //                         title: 'Scuba Diving',
// //                         description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.'
// //                     },
// //                     {
// //                         src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
// //                         title: 'Sky Cycling',
// //                         description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.'
// //                     },
// //                     {
// //                         src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
// //                         title: 'Rock Climbing',
// //                         description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.'
// //                     },
// //                     {
// //                         src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
// //                         title: 'Surfing',
// //                         description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.'
// //                     },
// //                     {
// //                         src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
// //                         title: 'Skiing',
// //                         description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.'
// //                     }
// //                 ].map((card, index) => (
// //                     <Box
// //                         key={index}
// //                         transition='transform 0.3s ease'
// //                         _hover={{ transform: 'scale(0.95)' }}  // Scale down on hover
// //                         border="none"
// //                         boxShadow="md"
// //                         display='flex'
// //                         flexDirection='column'
// //                         height='100%'
// //                     >
// //                         <Card maxW='md' border="none" boxShadow="none" height='100%'>
// //                             <CardBody p={0}>
// //                                 <Image
// //                                     src={card.src}
// //                                     alt={card.title}
// //                                     borderRadius='lg'
// //                                     objectFit='cover'
// //                                     boxShadow='md'
// //                                 />
// //                                 <Stack mt='4' spacing='4'>
// //                                     <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
// //                                     <Text fontSize='md' lineHeight='taller' p={4}>
// //                                         {card.description}
// //                                     </Text>
// //                                 </Stack>
// //                             </CardBody>
// //                             <CardFooter>
// //                                 <ButtonGroup spacing='2'>
// //                                     {/* <Button variant='solid' colorScheme='blue'> */}
// //                                 </ButtonGroup>
// //                             </CardFooter>
// //                         </Card>
// //                     </Box>
// //                 ))}
// //             </SimpleGrid>
// //         </VStack>
// //     );
// // };
// import React from 'react';
// import { SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, Box, VStack } from "@chakra-ui/react";
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// export const Cards = () => {
//     const test = sessionStorage?.auth && JSON.parse(sessionStorage?.auth)?.Email;
//     return (
//         <VStack spacing={8} align='center' px={4} py={8}>
//             <Heading 
//                 as="h1" 
//                 size="lg" 
//                 fontWeight="bold" 
//                 px={4}  
//                 textAlign="center"  
//             >
//                 Unforgettable Nature Experiences
//             </Heading>
//             <SimpleGrid 
//                 columns={{ base: 1, sm: 2, md: 3 }} 
//                 spacing='20px' 
//                 maxW='1200px'  
//                 mx='auto'      
//             >
//                 {[
//                     {
//                         src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
//                         title: 'River Rafting',
//                         description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.',
//                         route: '/raft' // Example route
//                     },
//                     {
//                         src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
//                         title: 'Scuba Diving',
//                         description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.',
//                         route: '/scuba' // Example route
//                     },
//                     {
//                         src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
//                         title: 'Sky Cycling',
//                         description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.',
//                         route: '/cycle' // Example route
//                     },
//                     {
//                         src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
//                         title: 'Rock Climbing',
//                         description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.',
//                         route: '/rock' // Example route
//                     },
//                     {
//                         src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
//                         title: 'Surfing',
//                         description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.',
//                         route: '/surf' // Example route
//                     },
//                     {
//                         src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
//                         title: 'Skiing',
//                         description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.',
//                         route: '/skiing' // Example route
//                     }
//                 ].map((card, index) => (
//                     <Box
//                         key={index}
//                         transition='transform 0.3s ease'
//                         _hover={{ transform: 'scale(0.95)' }}  
//                         border="none"
//                         boxShadow="md"
//                         display='flex'
//                         flexDirection='column'
//                         height='100%'
//                     >
//                         <Link to={test?card.route:'/signup'}> 
//                             <Card maxW='md' border="none" boxShadow="none" height='100%'>
//                                 <CardBody p={0}>
//                                     <Image
//                                         src={card.src}
//                                         alt={card.title}
//                                         borderRadius='lg'
//                                         objectFit='cover'
//                                         boxShadow='md'
//                                     />
//                                     <Stack mt='4' spacing='4'>
//                                         <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
//                                         <Text fontSize='md' lineHeight='taller' p={4}>
//                                             {card.description}
//                                         </Text>
//                                     </Stack>
//                                 </CardBody>
//                             </Card>
//                         </Link>
//                     </Box>
//                 ))}
//             </SimpleGrid>
//         </VStack>
//     );
// };


import React from 'react';
import { SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, Box, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';

export const Cards = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleCardClick = (route) => {
        const isAuthenticated = sessionStorage.getItem('auth'); // Check session storage for authToken
        if (isAuthenticated) {
            navigate(route); // Navigate to the card's route if authenticated
        } else {
            navigate('/signin'); // Redirect to sign-in page if not authenticated
        }
    };

    return (
        <VStack spacing={8} align='center' px={4} py={8}>
            <Heading 
                as="h1" 
                size="lg" 
                fontWeight="bold" 
                px={4}  
                textAlign="center"  
            >
                Unforgettable Nature Experiences
            </Heading>
            <SimpleGrid 
                columns={{ base: 1, sm: 2, md: 3 }} 
                spacing='20px' 
                maxW='1200px'  
                mx='auto'      
            >
                {[
                    {
                        src: 'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png',
                        title: 'River Rafting',
                        description: 'River rafting, also known as whitewater rafting, is a recreational activity that involves navigating a river or other body of water in an inflatable raft or boat. It\'s a thrilling adventure that challenges your teamwork and coordination skills while enjoying the beauty of nature.',
                        route: '/raft'
                    },
                    {
                        src: 'https://www.tripsavvy.com/thmb/GiaEltqBKCTRFjUt2dlz3wsjIuM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-597572085-584819855f9b5851e593fd0b-5c336fd646e0fb0001d39014.jpg',
                        title: 'Scuba Diving',
                        description: 'Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface breathing gas supply. It\'s a fantastic way to explore underwater life and experience the tranquility of the ocean depths.',
                        route: '/scuba'
                    },
                    {
                        src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7b/c0/2b/sky-cycling-in-eden-nature.jpg',
                        title: 'Sky Cycling',
                        description: 'Sky cycling boosts the spirit of adventure amongst tourists when they ride on the rope which is suspended in the air at a height of 50 feet or above. This exhilarating experience offers a unique view of the landscape and a rush of adrenaline.',
                        route: '/cycle'
                    },
                    {
                        src: 'https://media.istockphoto.com/id/1443791471/photo/a-woman-in-nature-rock-climbing-training-and-fitness-outdoors-on-a-sunny-day-with-climbing.webp?b=1&s=170667a&w=0&k=20&c=tAW5uAnJYHx92hVgesb-bwAPyKjfINJdDxfebrl5KKU=',
                        title: 'Rock Climbing',
                        description: 'Rock climbing is an activity where participants climb up, down, or across natural rocks or artificial rock walls. The goal is to reach the summit or endpoint of a route without falling, testing both physical strength and mental focus.',
                        route: '/rock'
                    },
                    {
                        src: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
                        title: 'Surfing',
                        description: 'Surfing isn\'t just about riding waves; it could also be a metaphor for life\'s journey, full of valuable lessons. Each wave and ride mirrors the challenges we face in life, providing an exhilarating experience as you conquer the ocean.',
                        route: '/surf'
                    },
                    {
                        src: 'https://hips.hearstapps.com/hmg-prod/images/skiing-in-sun-valley-royalty-free-image-1703440692.jpg',
                        title: 'Skiing',
                        description: 'Skiing is the sport of sliding down snow-covered hills on skis with fixed-heel bindings. It combines thrill with skill, offering an adrenaline rush as you navigate through snowy slopes and enjoy breathtaking winter landscapes.',
                        route: '/skiing'
                    }
                ].map((card, index) => (
                    <Box
                        key={index}
                        transition='transform 0.3s ease'
                        _hover={{ transform: 'scale(0.95)' }}  
                        border="none"
                        boxShadow="md"
                        display='flex'
                        flexDirection='column'
                        height='100%'
                        onClick={() => handleCardClick(card.route)} // Handle click event
                    >
                        <Card maxW='md' border="none" boxShadow="none" height='100%'>
                            <CardBody p={0}>
                                <Image
                                    src={card.src}
                                    alt={card.title}
                                    borderRadius='lg'
                                    objectFit='cover'
                                    boxShadow='md'
                                />
                                <Stack mt='4' spacing='4'>
                                    <Heading size='md' fontSize='xl' fontWeight='semibold'>{card.title}</Heading>
                                    <Text fontSize='md' lineHeight='taller' p={4}>
                                        {card.description}
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>
                ))}
            </SimpleGrid>
        </VStack>
    );
};
