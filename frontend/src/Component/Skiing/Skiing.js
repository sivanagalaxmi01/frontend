// import React, { useState } from 'react';
// import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Reviews from '../Reviews/review_page'

// function Skiing() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <>
//       <Box
//         as="header"
//         position="relative"
//         backgroundImage="url('https://www.travelandleisure.com/thmb/eLbEhYjdVMES874m9B5PVHq-7ZU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-whitefish-mountain-resort-montana-NEWSKIMT1121-5a607e69e46c4971939a51cce0e9dd0f.jpg')"
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
//         >
//           <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

//           {/* Centering the search bar */}
//           <InputGroup
//             size="md"
//             maxW="400px"
//             borderColor="teal.300"
//             bg="white"
//             borderRadius="md"
//             mx="auto"
//             marginRight="4"
//           >
//             {/* <InputLeftElement pointerEvents="none" children={<FontAwesomeIcon icon={faSearch} color="gray.300" />} /> */}
//             <Input placeholder="Find rare things to do" variant="outline" borderColor="teal.300" focusBorderColor="teal.400" />
//           </InputGroup>

//           <Flex alignItems="center" ml="auto">
//             <Button variant="link" color="white" mr={4}>Home</Button>
//             <Button variant="link" color="white" mr={4}>About</Button>
//             <Button variant="link" color="white" mr={4}>Contact Us</Button>
//             <Button variant="link" color="white">Sign Up</Button>
//           </Flex>
//         </Flex>

//         <Box position="relative" zIndex="1" textAlign="center">
//           <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'black'}}>SKIING</Heading>
//           <Text fontSize="xl" mb={6} style={{color:'black',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
//         </Box>
//       </Box>

//       <Container maxW="container.lg" py={6}>
//         <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
//         <Text style={{fontSize:'25px'}} ><b>GULMARG,KASHMIR </b>is the best place to experience skiing</Text>
//         <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
//        <b> <mark>Skiing in Gulmarg</mark></b>, located in the Kashmir Valley of India, offers a unique and exhilarating experience. This picturesque resort town is nestled in the Pir Panjal range of the Himalayas and is renowned for its deep powder snow, long ski runs, and breathtaking views.

// Gulmarg is one of Asia's top ski destinations, attracting both beginners and seasoned skiers. The town is home to the Gulmarg Gondola, one of the highest cable cars in the world, which takes skiers up to nearly 4,000 meters (13,000 feet). From here, you can access a variety of ski slopes, from gentle beginner runs to challenging off-piste routes for experts.

// The terrain is diverse, offering everything from wide-open bowls to steep, tree-lined slopes. The region is known for its heavy snowfall, providing excellent conditions for powder skiing. The natural beauty of the area, with snow-covered pine forests and panoramic views of the surrounding peaks, adds to the charm.

// Beyond skiing, Gulmarg offers opportunities for snowboarding, heli-skiing, and backcountry adventures. The town has a relaxed and welcoming atmosphere, with local Kashmiri culture adding a unique flavor to the experience. Skiing in Gulmarg is not just about the sport; it's about immersing yourself in a winter wonderland with a rich cultural backdrop.
//         </Text>
      
//         <Text>
//           <b style={{ fontSize: "35px" }}>"MOUNTAINS ARE CALLING,I MUST GO..."<br /> — John Muir</b>
//           <img src="https://theluxuryvacationguide.com/wp-content/uploads/2023/02/crans-montana-greg-ski-4.jpg" style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
//         </Text>
//         <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
//         <Text mb={6} style={{fontSize:'20px'}}>
//        <b> 1. Skiing Costs</b><br/>
//    - Ski Pass:<br/>
//      - 1-Day Pass: ₹2,000 - ₹2,500 (includes access to ski lifts and slopes)<br/>
//    - Ski Equipment Rental:<br/>
//      - Per Day: ₹1,500 - ₹2,500 (includes skis, poles, boots, and helmet)<br/>
//    - Ski Lessons:<br/>
//      - Group Lesson (1-2 hours): ₹1,500 - ₹2,500 per person<br/>
//      - Private Lesson (1-2 hours): ₹3,000 - ₹5,000 per person<br/>
//    - Heli-Skiing (if available): ₹25,000 - ₹40,000 (per day, includes helicopter ride and guided skiing)<br/><br/>

  

// <b>2. Accommodation</b> <br/>
//    - Budget Hotels/Guesthouses: ₹1,500 - ₹3,000 per night<br/>
//    - Mid-Range Hotels/Resorts: ₹3,500 - ₹6,000 per night<br/>
//    - Luxury Resorts: ₹7,000 - ₹15,000 per night.<br/><br/>

//    <b> Tip:</b> Prices can fluctuate based on the season, with peak winter months (December to February) being more expensive. Booking in advance can secure better rates.<br/><br/>

//     <b> 3. Food</b><br/>
//    - Local Eateries/Street Food: ₹200 - ₹400 per meal<br/>
//    - Budget Restaurants: ₹400 - ₹700 per meal<br/>
//    - Mid-Range Hotels/Resorts Dining: ₹700 - ₹1,200 per meal<br/><br/>
  

//    <b>Tip:</b> Opt for local eateries for affordable and hearty meals. Resort dining options may be pricier but offer convenience.<br/><br/>
// <b>4. Transportation</b><br/><br/>
//    - Travel to Gulmarg:<br/>
//      - By Taxi (from Srinagar): ₹2,000 - ₹3,500 one-way<br/>
//      - By Shared Taxi/Bus: ₹1,000 - ₹1,500 one-way<br/>
//    - Local Transportation (Auto-rickshaws, Taxis): ₹500 - ₹1,000 per day<br/><br/>

//    <b>Tip: </b>Shared taxis or buses are cost-effective for travel from Srinagar to Gulmarg, while private taxis offer comfort and flexibility.<br/><br/>

// <b>5. Miscellaneous Expenses</b><br/>
//    - Entry Fees (for local attractions): ₹50 - ₹200 per person<br/>
//    - Snow Gear (if purchasing or renting): ₹500 - ₹1,500 per item (gloves, goggles, etc.)<br/>
//    - Souvenirs/Local Shopping: ₹500 - ₹1,500<br/>

//    - Solo Traveler (Budget Option): ₹15,000 - ₹20,000<br/>
//    - Couples/Group (Mid-Range Option): ₹25,000 - ₹35,000 per person<br/><br/>

//    <b>###Tips for Budgeting:</b><br/>
// - Book in advance for skiing lessons and equipment rentals to secure better rates and availability, especially during peak season.<br/>
// - Travel in a group to share costs, particularly for transportation and accommodation.<br/>
// - Look for package deals that include skiing, accommodation, and meals for better value.<br/>
// - Carry sufficient cash, as some smaller establishments might not accept credit cards or digital payments.<br/>

//         </Text>
//       </Container>

//       <Divider />

     
//   <Reviews/>
//   <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
//         <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
//         <Flex justify="center" mt={2}>
//           <Text><a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a></Text>
//         </Flex>
//       </Box>
//     </>
//   );
// }

// export default Skiing;

// import React, { useState } from 'react';
// import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Reviews from '../Reviews/review_page'

// function Skiing() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <>
//       <Box
//         as="header"
//         position="relative"
//         backgroundImage="url('https://www.travelandleisure.com/thmb/eLbEhYjdVMES874m9B5PVHq-7ZU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-whitefish-mountain-resort-montana-NEWSKIMT1121-5a607e69e46c4971939a51cce0e9dd0f.jpg')"
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
//         >
//           <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

//           {/* Centering the search bar */}
//           <InputGroup
//             size="md"
//             maxW="400px"
//             borderColor="teal.300"
//             bg="white"
//             borderRadius="md"
//             mx="auto"
//             marginRight="4"
//           >
//             {/* <InputLeftElement pointerEvents="none" children={<FontAwesomeIcon icon={faSearch} color="gray.300" />} /> */}
//             <Input placeholder="Find rare things to do" variant="outline" borderColor="teal.300" focusBorderColor="teal.400" />
//           </InputGroup>

//           <Flex alignItems="center" ml="auto">
//             <Button variant="link" color="white" mr={4}>Home</Button>
//             <Button variant="link" color="white" mr={4}>About</Button>
//             <Button variant="link" color="white" mr={4}>Contact Us</Button>
//             <Button variant="link" color="white">Sign Up</Button>
//           </Flex>
//         </Flex>

//         <Box position="relative" zIndex="1" textAlign="center">
//           <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'black'}}>SKIING</Heading>
//           <Text fontSize="xl" mb={6} style={{color:'black',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
//         </Box>
//       </Box>

//       <Container maxW="container.lg" py={6}>
//         <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
//         <Text style={{fontSize:'25px'}} ><b>GULMARG, KASHMIR</b> is the best place to experience skiing</Text>
//         <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
//           <b><mark>Skiing in Gulmarg</mark></b>, located in the Kashmir Valley of India, offers a unique and exhilarating experience. This picturesque resort town is nestled in the Pir Panjal range of the Himalayas and is renowned for its deep powder snow, long ski runs, and breathtaking views.<br/><br/>
//           Gulmarg is one of Asia's top ski destinations, attracting both beginners and seasoned skiers. The town is home to the Gulmarg Gondola, one of the highest cable cars in the world, which takes skiers up to nearly 4,000 meters (13,000 feet). From here, you can access a variety of ski slopes, from gentle beginner runs to challenging off-piste routes for experts.<br/><br/>
//           The terrain is diverse, offering everything from wide-open bowls to steep, tree-lined slopes. The region is known for its heavy snowfall, providing excellent conditions for powder skiing. The natural beauty of the area, with snow-covered pine forests and panoramic views of the surrounding peaks, adds to the charm.<br/><br/>
//           Beyond skiing, Gulmarg offers opportunities for snowboarding, heli-skiing, and backcountry adventures. The town has a relaxed and welcoming atmosphere, with local Kashmiri culture adding a unique flavor to the experience. Skiing in Gulmarg is not just about the sport; it's about immersing yourself in a winter wonderland with a rich cultural backdrop.
//         </Text>
      
//         <Text>
//           <b style={{ fontSize: "35px" }}>"MOUNTAINS ARE CALLING, I MUST GO..."<br /> — John Muir</b>
//           <img src="https://theluxuryvacationguide.com/wp-content/uploads/2023/02/crans-montana-greg-ski-4.jpg" style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
//         </Text>
//         <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
//         <Text mb={6} style={{fontSize:'20px'}}>
//           <b>1. Skiing Costs</b><br/>
//           - Ski Pass:<br/>
//             - 1-Day Pass: ₹2,000 - ₹2,500 (includes access to ski lifts and slopes)<br/>
//           - Ski Equipment Rental:<br/>
//             - Per Day: ₹1,500 - ₹2,500 (includes skis, poles, boots, and helmet)<br/>
//           - Ski Lessons:<br/>
//             - Group Lesson (1-2 hours): ₹1,500 - ₹2,500 per person<br/>
//             - Private Lesson (1-2 hours): ₹3,000 - ₹5,000 per person<br/>
//           - Heli-Skiing (if available): ₹25,000 - ₹40,000 (per day, includes helicopter ride and guided skiing)<br/><br/>
//           <b>2. Accommodation</b><br/>
//           - Budget Hotels/Guesthouses: ₹1,500 - ₹3,000 per night<br/>
//           - Mid-Range Hotels/Resorts: ₹3,500 - ₹6,000 per night<br/>
//           - Luxury Resorts: ₹7,000 - ₹15,000 per night.<br/><br/>
//           <b>Tip:</b> Prices can fluctuate based on the season, with peak winter months (December to February) being more expensive. Booking in advance can secure better rates.<br/><br/>
//           <b>3. Food</b><br/>
//           - Local Eateries/Street Food: ₹200 - ₹400 per meal<br/>
//           - Budget Restaurants: ₹400 - ₹700 per meal<br/>
//           - Mid-Range Hotels/Resorts Dining: ₹700 - ₹1,200 per meal<br/><br/>
//           <b>Tip:</b> Opt for local eateries for affordable and hearty meals. Resort dining options may be pricier but offer convenience.<br/><br/>
//           <b>4. Transportation</b><br/><br/>
//           - Travel to Gulmarg:<br/>
//             - By Taxi (from Srinagar): ₹2,000 - ₹3,500 one-way<br/>
//             - By Shared Taxi/Bus: ₹1,000 - ₹1,500 one-way<br/>
//           - Local Transportation (Auto-rickshaws, Taxis): ₹500 - ₹1,000 per day<br/><br/>
//           <b>Tip:</b> Shared taxis or buses are cost-effective for travel from Srinagar to Gulmarg, while private taxis offer comfort and flexibility.<br/><br/>
//           <b>5. Miscellaneous Expenses</b><br/>
//           - Entry Fees (for local attractions): ₹50 - ₹200 per person<br/>
//           - Snow Gear (if purchasing or renting): ₹500 - ₹1,500 per item (gloves, goggles, etc.)<br/>
//           - Souvenirs/Local Shopping: ₹500 - ₹1,500<br/><br/>
//           - Solo Traveler (Budget Option): ₹15,000 - ₹20,000<br/>
//           - Couples/Group (Mid-Range Option): ₹25,000 - ₹35,000 per person<br/><br/>
//           <b>### Tips for Budgeting:</b><br/>
//           - Book in advance for skiing lessons and equipment rentals to secure better rates and availability, especially during peak season.<br/>
//           - Travel in a group to share costs, particularly for transportation and accommodation.<br/>
//           - Look for package deals that include skiing, accommodation, and meals for better value.<br/>
//           - Carry sufficient cash, as some smaller establishments might not accept credit cards or digital payments.<br/>
//         </Text>
        
//         {/* Embed the location map */}
//         <Box my={8}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.756913185344!2d74.36202351521756!3d34.07622908060185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b8b2e7f2a3f7e7%3A0x5871a7c53a4f6bd2!2sGulmarg%2C%20Kashmir!5e0!3m2!1sen!2sin!4v1695449352953!5m2!1sen!2sin"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Gulmarg, Kashmir"
//           />
//         </Box>
        
//         <Reviews />
        
       
//     </>
//   );
// }

// export default Skiing;
import React, { useState } from 'react';
import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Reviews from '../Reviews/review_page'

function Skiing() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box
        as="header"
        position="relative"
        backgroundImage="url('https://www.travelandleisure.com/thmb/eLbEhYjdVMES874m9B5PVHq-7ZU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-whitefish-mountain-resort-montana-NEWSKIMT1121-5a607e69e46c4971939a51cce0e9dd0f.jpg')"
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
          mb={16}
        >
          <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

          {/* Centering the search bar */}
          <InputGroup
            size="md"
            maxW="400px"
            borderColor="teal.300"
            bg="white"
            borderRadius="md"
            mx="auto"
            marginRight="4"
          >
            {/* <InputLeftElement pointerEvents="none" children={<FontAwesomeIcon icon={faSearch} color="gray.300" />} /> */}
            <Input placeholder="Find rare things to do" variant="outline" borderColor="teal.300" focusBorderColor="teal.400" />
          </InputGroup>

          <Flex alignItems="center" ml="auto">
            <Button variant="link" color="white" mr={4}  onClick={() => { 
          
            window.location.href = '/'; 
          }}>Home</Button>
            <Button variant="link" color="white" mr={4}  onClick={() => { 
            
            window.location.href = '/aboutus'; 
          }}> About</Button>
            <Button variant="link" color="white" mr={4}  onClick={() => { 
            
            window.location.href = '/contact'; 
          }}>Contact Us</Button>
            <Button variant="link" color="white"  onClick={() => { 
            
            window.location.href = '/signup'; 
          }}>Sign Up</Button>
          </Flex>
        </Flex>

        <Box position="relative" zIndex="1" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'black'}}>SKIING</Heading>
          <Text fontSize="xl" mb={6} style={{color:'black',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
        <Text style={{fontSize:'25px'}} ><b>GULMARG, KASHMIR</b> is the best place to experience skiing</Text>
        <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
          <b><mark>Skiing in Gulmarg</mark></b>, located in the Kashmir Valley of India, offers a unique and exhilarating experience. This picturesque resort town is nestled in the Pir Panjal range of the Himalayas and is renowned for its deep powder snow, long ski runs, and breathtaking views.<br/><br/>
          Gulmarg is one of Asia's top ski destinations, attracting both beginners and seasoned skiers. The town is home to the Gulmarg Gondola, one of the highest cable cars in the world, which takes skiers up to nearly 4,000 meters (13,000 feet). From here, you can access a variety of ski slopes, from gentle beginner runs to challenging off-piste routes for experts.<br/><br/>
          The terrain is diverse, offering everything from wide-open bowls to steep, tree-lined slopes. The region is known for its heavy snowfall, providing excellent conditions for powder skiing. The natural beauty of the area, with snow-covered pine forests and panoramic views of the surrounding peaks, adds to the charm.<br/><br/>
          Beyond skiing, Gulmarg offers opportunities for snowboarding, heli-skiing, and backcountry adventures. The town has a relaxed and welcoming atmosphere, with local Kashmiri culture adding a unique flavor to the experience. Skiing in Gulmarg is not just about the sport; it's about immersing yourself in a winter wonderland with a rich cultural backdrop.
        </Text>
      
        <Text>
          <b style={{ fontSize: "35px" }}>"MOUNTAINS ARE CALLING, I MUST GO..."<br /> — John Muir</b>
          <img src="https://theluxuryvacationguide.com/wp-content/uploads/2023/02/crans-montana-greg-ski-4.jpg" style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
        </Text>
        <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
        <Text mb={6} style={{fontSize:'20px'}}>
          <b>1. Skiing Costs</b><br/>
          - Ski Pass:<br/>
            - 1-Day Pass: ₹2,000 - ₹2,500 (includes access to ski lifts and slopes)<br/>
          - Ski Equipment Rental:<br/>
            - Per Day: ₹1,500 - ₹2,500 (includes skis, poles, boots, and helmet)<br/>
          - Ski Lessons:<br/>
            - Group Lesson (1-2 hours): ₹1,500 - ₹2,500 per person<br/>
            - Private Lesson (1-2 hours): ₹3,000 - ₹5,000 per person<br/>
          - Heli-Skiing (if available): ₹25,000 - ₹40,000 (per day, includes helicopter ride and guided skiing)<br/><br/>
          <b>2. Accommodation</b><br/>
          - Budget Hotels/Guesthouses: ₹1,500 - ₹3,000 per night<br/>
          - Mid-Range Hotels/Resorts: ₹3,500 - ₹6,000 per night<br/>
          - Luxury Resorts: ₹7,000 - ₹15,000 per night.<br/><br/>
          <b>Tip:</b> Prices can fluctuate based on the season, with peak winter months (December to February) being more expensive. Booking in advance can secure better rates.<br/><br/>
          <b>3. Food</b><br/>
          - Local Eateries/Street Food: ₹200 - ₹400 per meal<br/>
          - Budget Restaurants: ₹400 - ₹700 per meal<br/>
          - Mid-Range Hotels/Resorts Dining: ₹700 - ₹1,200 per meal<br/><br/>
          <b>Tip:</b> Opt for local eateries for affordable and hearty meals. Resort dining options may be pricier but offer convenience.<br/><br/>
          <b>4. Transportation</b><br/><br/>
          - Travel to Gulmarg:<br/>
            - By Taxi (from Srinagar): ₹2,000 - ₹3,500 one-way<br/>
            - By Shared Taxi/Bus: ₹1,000 - ₹1,500 one-way<br/>
          - Local Transportation (Auto-rickshaws, Taxis): ₹500 - ₹1,000 per day<br/><br/>
          <b>Tip:</b> Shared taxis or buses are cost-effective for travel from Srinagar to Gulmarg, while private taxis offer comfort and flexibility.<br/><br/>
          <b>5. Miscellaneous Expenses</b><br/>
          - Entry Fees (for local attractions): ₹50 - ₹200 per person<br/>
          - Snow Gear (if purchasing or renting): ₹500 - ₹1,500 per item (gloves, goggles, etc.)<br/>
          - Souvenirs/Local Shopping: ₹500 - ₹1,500<br/><br/>
          - Solo Traveler (Budget Option): ₹15,000 - ₹20,000<br/>
          - Couples/Group (Mid-Range Option): ₹25,000 - ₹35,000 per person<br/><br/>
          <b>### Tips for Budgeting:</b><br/>
          - Book in advance for skiing lessons and equipment rentals to secure better rates and availability, especially during peak season.<br/>
          - Travel in a group to share costs, particularly for transportation and accommodation.<br/>
          - Look for package deals that include skiing, accommodation, and meals for better value.<br/>
          - Carry sufficient cash, as some smaller establishments might not accept credit cards or digital payments.<br/>
        </Text>
        
        {/* Embed the location map */}
        <Box my={8}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.756913185344!2d74.36202351521756!3d34.07622908060185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b8b2e7f2a3f7e7%3A0x5871a7c53a4f6bd2!2sGulmarg%2C%20Kashmir!5e0!3m2!1sen!2sin!4v1695449352953!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gulmarg, Kashmir"
          />
        </Box>
        
        <Reviews />
        {/* <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Text>
            <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | 
            <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a>
          </Text>
        </Flex>
      </Box> */}
        {/* <Box as="footer" textAlign="center" mb={0}p={4} bg="gray.800" color="white" w="100%">
          <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
          <Flex justify="center" mt={2}>
            <Text>
              <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> 
              | 
              <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a>
            </Text>
          </Flex>
        </Box> */}
        <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Text><a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a></Text>
        </Flex>
      </Box>
      </Container>
    </>
  );
}

export default Skiing;
