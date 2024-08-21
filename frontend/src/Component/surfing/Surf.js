import React, { useState } from 'react';
import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
import Reviews from '../Reviews/review_page';

export function Surfing() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box as="header" position="relative" backgroundImage="url('https://www.riveradventures.com/media/443194/wilderness-river-adventures_rafting_8852_1000x667.jpg')" backgroundPosition="center" backgroundSize="cover" height="70vh" display="flex" alignItems="center" justifyContent="center" color="white" textAlign="center" padding="4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} _hover={{ transition: 'transform 0.7s ease-in-out' }}>
        
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
          
          window.location.href = '/contact'; }}>Contact Us</Button>
            <Button variant="link" color="white" onClick={() => { 
          
          window.location.href = '/signup'; }}>Sign Up</Button>
          </Flex>
        </Flex>

        <Box position="relative" zIndex="1" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'WHITE'} } >SURFING</Heading>
          <Text fontSize="xl" mb={6} style={{color:'beige',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
        <Text style={{fontSize:'25px'}} ><b>KOVALAM, SOUTHERN COAST OF KERALA</b> is the best place to experience Surfing</Text>
        <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
          <b><mark>Surfing in Kovalam</mark></b>, located on the southern coast of Kerala, India, offers an incredible blend of warm waters, consistent waves, and a laid-back beach vibe. Kovalam is one of India's most popular beach destinations, known for its crescent-shaped coastline, fringed by coconut palms, and dotted with traditional fishing villages.

          The main surfing spots in Kovalam are Lighthouse Beach, Hawa Beach, and Samudra Beach. Lighthouse Beach, with its iconic red-and-white-striped lighthouse, is the most popular among surfers. The waves here are typically gentle to moderate, making it an excellent spot for beginners and intermediate surfers. During the monsoon season (June to September), the swells can get larger, attracting more experienced surfers looking for a challenge.

          The water temperature is warm year-round, so you can comfortably surf without a wetsuit. The beach break offers both left and right-hand waves, and the sandy bottom is forgiving, especially for those new to the sport. Surf schools and rental shops are available along the beach, providing lessons and equipment for those eager to learn.

          Kovalam’s surf scene is still growing, so it offers a more relaxed atmosphere compared to the bustling surf spots around the world. Beyond surfing, Kovalam is also known for its vibrant local culture, delicious seafood, and the tranquility of Ayurveda wellness centers.

          Whether you're a seasoned surfer or a beginner looking to catch your first wave, Kovalam's combination of reliable surf, scenic beauty, and cultural richness makes it a fantastic destination.
        </Text>

        <Text>
         
          <img src="https://t2conline.com/wp-content/uploads/2017/09/Surfing-Wallpaper3.jpg" style={{ display: 'block', margin: '20px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
        </Text>

        <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
        <Text mb={6} style={{fontSize:'20px'}}>
        Planning a budget for surfing in Kovalam involves considering the costs of surfing lessons or rentals, accommodation, food, transportation, and other activities. Here’s a detailed breakdown:<br/>

 <b>1. Surfing Costs</b><br/>
   - Surfboard Rental:<br/>
     - Per Hour: ₹300 - ₹500<br/>
     - Per Day: ₹1,000 - ₹1,500<br/>
   - Surfing Lessons:<br/>
     - Group Lesson (1-2 hours): ₹1,200 - ₹2,000 per person<br/>
     - Private Lesson (1-2 hours): ₹2,000 - ₹3,500 per person<br/>
   - Surfing Course (3-5 days): ₹8,000 - ₹15,000 (includes multiple lessons and board rental)<br/><br/>

   Inclusions: Lessons usually include board rental, safety gear (like a rash guard), and instruction from professional surfers.<br/><br/>

   <b>2. Accommodation</b><br/>
   - Budget Guesthouses: ₹800 - ₹1,500 per night<br/>
   - Mid-Range Hotels: ₹2,000 - ₹4,000 per night<br/>
   - Beachfront Resorts: ₹4,500 - ₹8,000 per night<br/><br/>

   Tip: There are plenty of budget guesthouses and mid-range hotels within walking distance of Kovalam’s main beaches, providing convenient access to surfing spots.<br/><br/>

   <b> 3. Food</b><br/>
   - Local Eateries/Street Food: ₹150 - ₹300 per meal<br/>
   - Budget Restaurants: ₹300 - ₹600 per meal<br/>
   - Beachfront Restaurants/Cafes: ₹500 - ₹1,200 per meal<br/>

   Tip: Enjoy fresh seafood and traditional Kerala dishes at local eateries for an authentic and affordable dining experience.<br/><br/>

   <b>4. Transportation</b><br/>
   - Travel to Kovalam:<br/>
     - By Bus (from Trivandrum): ₹50 - ₹150 one-way<br/>
     - By Taxi (from Trivandrum): ₹800 - ₹1,500 one-way<br/>
     - By Auto-Rickshaw (from Trivandrum): ₹500 - ₹800 one-way<br/>
   - Local Transportation (Auto-rickshaws, Scooters): ₹200 - ₹500 per day<br/><br/>

   Tip: Kovalam is a small town, so most places are within walking distance. Renting a scooter can be a fun and economical way to explore nearby areas.<br/><br/>

   <b>5. Miscellaneous Expenses</b><br/>
   - Beach Activities (Yoga, Massage): ₹500 - ₹2,000 per session<br/>
   - Shopping (Local Handicrafts, Souvenirs): ₹500 - ₹1,500<br/>
   - Entry Fees (for nearby attractions): ₹50 - ₹200 per person<br/><br/>

   <b>6. Estimated Total Budget (for a 2-day Trip)</b><br/>
   - Solo Traveler (Budget Option): ₹5,000 - ₹8,000<br/>
   - Couples/Group (Mid-Range Option): ₹10,000 - ₹15,000 per person<br/><br/>

 Tips for Budgeting:<br/>
- Book surfing lessons in advance during peak season (October to March) to secure better rates and availability.<br/>
- Travel in a group to share costs, particularly for accommodation and transportation.<br/>
- Consider package deals that include surfing lessons, accommodation, and meals for better value.<br/>
- Carry cash, especially for small purchases and payments at local eateries, as some may not accept cards or digital payments.<br/><br/>

With this budget planning, you can enjoy an exciting surfing experience in Kovalam while keeping your expenses manageable.
        </Text>

        {/* Google Map Embed */}
        <Box my={10}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4623038179163!2d76.97122977377643!3d8.404224793902898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb29a17ed9ab%3A0x6f2a7c3b29d1e7e1!2sKovalam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1687697557763!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kovalam Map"
          ></iframe>
        </Box>
      </Container>

      <Divider />
<Reviews/>
      <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Text><a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a></Text>
        </Flex>
      </Box>
    </>
  );
}

export default Surfing;