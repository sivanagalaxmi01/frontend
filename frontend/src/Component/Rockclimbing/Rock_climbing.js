import React, { useState } from 'react';
import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
import Reviews from '../Reviews/review_page'
 function RockClimbing() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box as="header" position="relative" backgroundImage="url('https://awe365.com/wp-content/uploads/2014/03/Climb-in-Kalymnos-Greek-Island-rock-climbing-holidays-image-by-Nikolaos-Smalios10.jpg')"
        backgroundPosition="center" backgroundSize="cover" height="70vh" display="flex" alignItems="center" justifyContent="center" color="white" textAlign="center" padding="4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} _hover={{ transition: 'transform 0.7s ease-in-out' }}> 
        <Flex position="absolute" top="0" left="0" right="0" backgroundColor="rgba(0, 0, 0, 0.5)" padding="2" zIndex="1" alignItems="center" mb={16}>
          <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

          <InputGroup size="md" maxW="400px" borderColor="teal.300" bg="white" borderRadius="md" mx="auto" marginRight="4">
            <Input placeholder="Find rare things to do" variant="outline" borderColor="teal.300" focusBorderColor="teal.400" />
          </InputGroup>

          <Flex alignItems="center" ml="auto">
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/'; }}>Home</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/aboutus'; }}>About</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/contact'; }}> Contact Us</Button>
            <Button variant="link" color="white" onClick={() => { 
          
          window.location.href = '/signup'; }}>Sign Up</Button>
          </Flex>
        </Flex>

        <Box position="relative" zIndex="1" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{ color: 'WHITE' }}>ROCKCLIMBING</Heading>
          <Text fontSize="xl" mb={6} style={{ color: 'white', fontSize: '40px' }}>Create unforgettable memories with us.</Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
        <Text style={{ fontSize: '25px' }}><b>MALSHEJ, MAHARASTRA</b> is the best place to experience skiing</Text>
        <Text mb={6} style={{ fontFamily: 'arial', fontSize: '20px' }}>
          <b><mark>Rock climbing in Malshej</mark></b> offers an exhilarating experience in one of Maharashtra's most picturesque mountain ranges. Located in the Western Ghats, Malshej Ghat is known for its rugged terrain, towering cliffs, and stunning natural beauty. The area is a haven for adventure enthusiasts, offering a variety of climbing opportunities that range from beginner-friendly routes to more challenging ascents.

          The rock formations in Malshej Ghat are predominantly made of basalt, providing excellent grip and a variety of holds for climbers. The cliffs and crags are surrounded by lush greenery, especially during the monsoon season, when the area is draped in mist and waterfalls cascade down the mountainsides. This creates a dramatic and inspiring setting for climbers.
        </Text>

        <Text>
          <b style={{ fontSize: "35px" }}>"MOUNTAINS ARE CALLING, I MUST GO..."<br /> — John Muir</b>
          <img src="https://th.bing.com/th/id/OIP.7evZc64cSA2-_muNEULWqwHaFj?w=256&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ display: 'block', margin: '20px auto', width:'600px', height:'400px' }} alt="Hiking Girls" />
        </Text>

        <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
        <Text mb={6} style={{ fontSize: '20px' }}>
          Planning a budget for rock climbing in Malshej Ghat involves accounting for the costs of climbing activities, accommodation, food, transportation, and other incidental expenses. Here's a detailed breakdown to help you plan:

          <b>1. Rock Climbing Costs</b><br />
             - <b>Guided Rock Climbing Session:</b><br />
               - For Beginners: ₹1,500 - ₹2,500 per person (includes basic training, equipment, and guided climbs)<br />
               - For Experienced Climbers: ₹1,000 - ₹2,000 per person (depending on the length and difficulty of the climb)<br />
             - Rock Climbing Courses:₹5,000 - ₹10,000 (2-3 days course, including multiple climbs, advanced techniques, and equipment)<br />
             - Equipment Rental (if not included): ₹500 - ₹1,000 per person (includes climbing shoes, harness, helmet, and ropes)<br />
             Inclusions: Guided sessions usually include professional instruction, safety gear, and equipment. It's advisable to book through a certified adventure company to ensure safety and quality.<br />

          <b>2. Accommodation</b><br />
             - Budget Hotels/Guesthouses: ₹800 - ₹1,500 per night<br />
             - Mid-Range Resorts: ₹2,000 - ₹3,500 per night<br />
             - Luxury Resorts: ₹4,000 - ₹7,000 per night<br />
             Tip: Malshej Ghat has limited but comfortable accommodation options. Booking in advance is recommended, especially during peak season (monsoon and winter).<br />

          <b>3. Food</b><br />
             - Local Eateries/Dhabas:₹150 - ₹300 per meal<br />
             - Mid-Range Restaurants: ₹300 - ₹600 per meal<br />
             - Hotel/Resort Dining: ₹600 - ₹1,200 per meal<br />
             Tip: Enjoy local Maharashtrian cuisine at dhabas, which is often delicious and budget-friendly.<br />

          <b>4. Transportation</b><br />
             - <b>Travel to Malshej Ghat:</b><br />
               -By Bus (from Mumbai/Pune): ₹300 - ₹500 one-way<br />
               - By Train (to nearest station Kalyan, then taxi/bus):₹150 - ₹500 one-way<br />
               - By Taxi (from Mumbai/Pune): ₹2,500 - ₹4,000 one-way (can be shared among travelers)<br />
             - Local Transportation (Taxis/Auto-rickshaws): ₹300 - ₹800 per day (to explore nearby attractions)<br />
             Tip: If traveling with a group, hiring a taxi for the entire trip can be more convenient and cost-effective.<br />

          <b>5. Miscellaneous Expenses</b><br />
             - Entry Fees (for forts or parks nearby): ₹20 - ₹100 per person<br />
             - Adventure Activities (Trekking, Rappelling): ₹500 - ₹1,500 per activity<br />
             - Souvenirs/Local Shopping: ₹300 - ₹1,000<br />

          <b>6. Estimated Total Budget (for a 2-day Trip)</b><br />
             -Solo Traveler (Budget Option): ₹5,000 - ₹8,000<br />
             - Couples/Group (Mid-Range Option): ₹7,000 - ₹12,000 per person<br />

          <b>Tips for Budgeting:</b><br />
          -Book in advance for better deals on rock climbing sessions and accommodation, especially during weekends and peak seasons.<br />
          -Travel in a group to share costs, particularly for transportation and guided sessions.<br />
          - Choose package deals that include rock climbing, accommodation, and meals for better value.<br />
          - Carry cash, as digital payment options may be limited in the area.<br />
        </Text>

        {/* Google Map for Malshej Ghat */}
        <Box my={10} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>Malshej Ghat Location</Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241378.15412808664!2d73.44841718357323!3d19.405473584372733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be878efb3b7dfd5%3A0xb20f64e43f2a52c7!2sMalshej%20Ghat!5e0!3m2!1sen!2sin!4v1692032940278!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Divider />

        <Reviews/>
        <Box as="footer" textAlign="center" py={10} backgroundColor="black" h={'90px'}>
  <Text color="white">© 2023 RockClimbing Adventures. All rights reserved.</Text>
  <Text color="white">Website built by Dare&Share.</Text>
</Box>
      </Container>
    </>
  );
}
export default RockClimbing;