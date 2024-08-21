import React, { useState } from 'react';
import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
import Reviews from '../Reviews/review_page';

export function Skycycling() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box as="header" position="relative" backgroundImage="url('https://www.parkercamps.com/assets/img/activities/sky4.jpg')" backgroundPosition="center" backgroundSize="cover" height="70vh" display="flex" alignItems="center" justifyContent="center" color="white" textAlign="center" padding="4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} _hover={{ transition: 'transform 0.7s ease-in-out' }}>
        
        <Flex position="absolute" top="0" left="0" right="0" backgroundColor="rgba(0, 0, 0, 0.5)" padding="2" zIndex="1" alignItems="center" mb={16}>
          <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>

          {/* Centering the search bar */}
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
          <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'black'}} >SKY CYCLING</Heading>
          <Text fontSize="xl" mb={6} style={{color:'beige',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
        <Text style={{fontSize:'25px'}} ><b>KOVALAM,SOUTHERN COAST OF KERALA</b> is the best place to experience Surfing</Text>
        <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
          <b><mark>Surfing in Kovalam</mark></b>, located on the southern coast of Kerala, India, offers an incredible blend of warm waters, consistent waves, and a laid-back beach vibe. Kovalam is one of India's most popular beach destinations, known for its crescent-shaped coastline, fringed by coconut palms, and dotted with traditional fishing villages.
          <br/><br/>
          The main surfing spots in Kovalam are Lighthouse Beach, Hawa Beach, and Samudra Beach. Lighthouse Beach, with its iconic red-and-white-striped lighthouse, is the most popular among surfers. The waves here are typically gentle to moderate, making it an excellent spot for beginners and intermediate surfers. During the monsoon season (June to September), the swells can get larger, attracting more experienced surfers looking for a challenge.
          <br/><br/>
          The water temperature is warm year-round, so you can comfortably surf without a wetsuit. The beach break offers both left and right-hand waves, and the sandy bottom is forgiving, especially for those new to the sport. Surf schools and rental shops are available along the beach, providing lessons and equipment for those eager to learn.
          <br/><br/>
          Kovalam’s surf scene is still growing, so it offers a more relaxed atmosphere compared to the bustling surf spots around the world. Beyond surfing, Kovalam is also known for its vibrant local culture, delicious seafood, and the tranquility of Ayurveda wellness centers.
          <br/><br/>
          Whether you're a seasoned surfer or a beginner looking to catch your first wave, Kovalam's combination of reliable surf, scenic beauty, and cultural richness makes it a fantastic destination.
        </Text>
      
        <Text>
          <b style={{ fontSize: "35px" }}>"PEDAL THE SKY,TOUCH THE CLOUDS"<br /> — Anonymous</b>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYzPWxH0xu0VAFtuVs3R5cbGR-Iol86A3rw&s" style={{ display: 'block', margin: '10px auto', maxWidth: '90%', height: 'auto' }} alt="Hiking Girls" />
        </Text>

        <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
        <Text mb={6} style={{fontSize:'20px'}}>
          Here's a budget plan for a sky cycling adventure in Rishikesh. The costs can vary based on the season, your location, and other factors, but this should give you a general idea.
          <br/><br/>
          1. Travel to Rishikesh:<br/>
           - By Train: ₹1,000 - ₹2,000 (round trip, sleeper class)<br/>
           - By Bus: ₹1,500 - ₹3,000 (round trip, Volvo/AC bus)<br/>
           - By Flight: ₹5,000 - ₹10,000 (round trip, nearest airport is Dehradun)<br/>
          <br/>
          2. Accommodation:<br/>
           - Budget Hotel/Hostel: ₹500 - ₹1,000 per night<br/>
           - Mid-range Hotel: ₹1,500 - ₹3,000 per night<br/>
           - Stay Duration: 2-3 nights, depending on your plan<br/>
          <br/>
          3. Sky Cycling Activity:<br/>
           - Cost: ₹1,000 - ₹1,500 per person (including safety gear and guide)<br/>
          <br/>
          4. Food:<br/>
           - Budget: ₹200 - ₹500 per day for basic meals<br/>
           - Mid-range: ₹500 - ₹1,000 per day for a mix of local and restaurant meals<br/>
           - Total (3 days): ₹600 - ₹3,000<br/>
          <br/>
          5. Local Transport:<br/>
           - Auto/Taxi: ₹500 - ₹1,000 for short trips within Rishikesh<br/>
           - Bike/Scooter Rental: ₹300 - ₹500 per day (optional)<br/>
          <br/>
          6. Miscellaneous:<br/>
           - Adventure Activities (Optional): Rafting, bungee jumping, etc. ₹1,500 - ₹3,000 per activity<br/>
           - Shopping/Souvenirs: ₹500 - ₹1,000<br/>
           - Total Miscellaneous: ₹1,000 - ₹4,000<br/>
          <br/>
          Total Estimated Budget:<br/>
           - Low-end: ₹4,600 - ₹9,000 (excluding travel)<br/>
           - Mid-range: ₹10,000 - ₹20,000 (including travel and additional activities)<br/>
          <br/>
          Tips:<br/>
          - Book in advance for better deals on accommodation and activities.<br/>
          - Travel off-season to save costs on accommodation and flights.<br/>
          - Explore local food and avoid high-end restaurants to stick to your budget.<br/>
          <br/>
          This plan should help you have an exciting sky cycling adventure in Rishikesh while keeping expenses in check!
        </Text>

        <Text fontSize="30px" pt="20px" pl="20px"><u>LOCATION MAP</u></Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31448.63780409273!2d76.94969414626563!3d8.400472484557263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbdb75a62b7b%3A0x7ed6c5d370748e4b!2sKovalam%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1636982926845!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Kovalam Map"
        ></iframe>
      </Container>
<Reviews/>
      <Divider />

      <Box as="footer" textAlign="center" p={4} bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Text><a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="https://www.example.com" style={{ color: 'teal.300', textDecoration: 'underline', marginLeft: '10px' }}>Terms of Service</a></Text>
        </Flex>
      </Box>
    </>
  );
}

export default Skycycling;