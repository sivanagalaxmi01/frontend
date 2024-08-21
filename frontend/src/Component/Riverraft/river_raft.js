
import React, { useState } from 'react';
import Reviews from '../Reviews/review_page'
import {
  Box,
  Heading,
  Text,
  InputGroup,
  Input,
  Flex,
  Button,
  Container,
  Divider
} from '@chakra-ui/react';

function Riverrafting() {
//   const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box
        as="header"
        position="relative"
        backgroundImage="url('https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-01t144448.411-min.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        height="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        padding="4"
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        // _hover={{ transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease-in-out' }}
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
        >
          <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

          <InputGroup
            size="md"
            maxW="400px"
            borderColor="teal.300"
            bg="white"
            borderRadius="md"
            mx="auto"
            marginRight="4"
          >
            <Input
              placeholder="Find rare things to do"
              variant="outline"
              borderColor="teal.300"
              focusBorderColor="teal.400"
            />
          </InputGroup>

          <Flex alignItems="center" ml="auto">
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/'; }}>Home</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/aboutus'; }}>About</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/contact'; }}>Contact Us</Button>
            <Button variant="link" color="white" onClick={() => { 
          
          window.location.href = '/signup'; }}>Sign Up</Button>
          </Flex>
        </Flex>

        <Box position="relative" zIndex="1" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="black">RIVER RAFTING</Heading>
          <Text fontSize="xl" mb={6} color="white">
            Create unforgettable memories with us.
          </Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px">
          <u>OUR SUGGESTIONS</u>
        </Text>
        <Text fontSize="25px" fontWeight="bold">
          RISHIKESH is the best place to experience river rafting
        </Text>

        {/* Add Google Map using iframe */}
        

        <Text mb={6} fontFamily="arial" fontSize="20px">
          <b><mark>River rafting in Rishikesh</mark></b> is one of the most thrilling and popular adventure activities in India, drawing adrenaline seekers from around the world. Nestled in the foothills of the Himalayas, Rishikesh is known as the "Gateway to the Garhwal Himalayas" and is revered both as a spiritual center and an adventure hub.
          <br /><br />
          The rafting experience in Rishikesh takes place on the mighty Ganges River, where the crystal-clear waters flow down from the mountains, creating a series of exciting rapids that range in difficulty from beginner-friendly to challenging. The most popular stretch for rafting spans from <i>Brahmapuri to Rishikesh</i>, covering around 9 kilometers and offering relatively mild rapids suitable for beginners. For those seeking more intense thrills, the stretch from <i>Shivpuri to Rishikesh</i>, covering 16 kilometers, features some of the most famous rapids like "Roller Coaster," "Golf Course," and "Double Trouble."
          <br /><br />
          For the ultimate adventure, experienced rafters can tackle the <i>Marine Drive to Rishikesh</i> route, which is about 24 kilometers long and includes some of the most challenging rapids on the river, such as "Three Blind Mice" and "The Wall."
          <br /><br />
          As you navigate through the rapids, the scenery around you is breathtaking—lush green forests, towering cliffs, and glimpses of ancient temples and ashrams along the riverbanks. The thrill of the rapids is complemented by moments of calm, where you can float along the serene stretches of the river, soaking in the natural beauty and tranquility of the surroundings.
          <br /><br />
          Rafting in Rishikesh is usually best during the months of September to June, when the water levels and weather conditions are ideal. During the monsoon season (July to August), rafting is generally suspended due to safety concerns.
          <br /><br />
          Whether you’re a first-timer looking for a taste of adventure or an experienced rafter seeking the ultimate challenge, river rafting in Rishikesh offers an unforgettable experience, combining the thrill of navigating the rapids with the spiritual and natural beauty of this iconic location.
        </Text>

        <img
          src="https://blog.redbus.in/wp-content/uploads/2022/03/shutterstock_1372981319-850x570.jpg"
          style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }}
          alt="Hiking Girls"
        />

        <Text fontSize="30px" pt="20px" pl="20px">
          <u>HERE IS YOUR BUDGET ROUTE MAP!!</u>
        </Text>
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54802.17044322114!2d78.24122113702777!3d30.086928227530137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d1c2d7ac77ff%3A0xdcdbe3f0b05b20c!2sRishikesh%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1622507330113!5m2!1sen!2sus"
          width="100%"
          height="400px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          border="0"
        ></Box>
        <Text mb={6} fontSize="20px">
          Planning a budget for river rafting in Rishikesh involves considering several factors, including the cost of the rafting trip itself, accommodation, food, transportation, and other miscellaneous expenses. Here's a breakdown to help you plan:
          <br /><br />
          <b>1. Rafting Cost</b><br />
          - Short Route (Brahmapuri to Rishikesh - 9 km): ₹600 - ₹800 per person<br />
          - Medium Route (Shivpuri to Rishikesh - 16 km): ₹800 - ₹1,200 per person<br />
          - Long Route (Marine Drive to Rishikesh - 24 km): ₹1,200 - ₹1,800 per person<br />
          - Full-Day Rafting (Kaudiyala to Rishikesh - 36 km): ₹1,800 - ₹2,500 per person<br /><br />
          <i>Inclusions:</i> Rafting gear (life jackets, helmets, paddles), safety briefings, and guides are typically included in the cost.
          <br /><br />
          <b>2. Accommodation</b><br />
          - Budget Hotels/Guesthouses: ₹500 - ₹1,500 per night<br />
          - Camping (Riverside Camps): ₹1,200 - ₹2,500 per night (includes meals)<br />
          - Mid-Range Hotels/Resorts: ₹2,000 - ₹4,000 per night<br /><br />
          <i>Tip:</i> For a more immersive experience, consider staying at a riverside camp, where the price often includes meals and evening activities like bonfires.
          <br /><br />
          <b>3. Food</b><br />
          - Street Food/Local Eateries: ₹150 - ₹300 per meal<br />
          - Budget Restaurants: ₹300 - ₹600 per meal<br />
          - Cafes/Restaurants (with a view): ₹500 - ₹1,000 per meal<br /><br />
          <i>Tip:</i> Rishikesh has a wide variety of vegetarian options, especially around the Laxman Jhula and Ram Jhula areas.
          <br /><br />
          <b>4. Transportation</b><br />
          - Travel to Rishikesh:<br />
            - By Bus (from Delhi): ₹500 - ₹1,200 one way, depending on the type of bus<br />
            - By Train (from Delhi to Haridwar): ₹200 - ₹1,500, depending on the class and train type. From Haridwar, you can take a taxi or a bus to Rishikesh.<br />
            - By Air: The nearest airport is Jolly Grant Airport in Dehradun, approximately 35 kilometers from Rishikesh. Flights from Delhi to Dehradun can cost between ₹2,500 - ₹5,000 one way. From the airport, you can hire a taxi or take a bus to Rishikesh.<br /><br />
          <i>Local Transport in Rishikesh:</i> Auto-rickshaws and cycle-rickshaws are common modes of local transport, and they are relatively inexpensive.
        </Text>
      </Container>
      <Reviews/>
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

export default Riverrafting;
