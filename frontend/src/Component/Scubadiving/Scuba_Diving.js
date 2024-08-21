import React, { useState } from 'react';
import { Box, Heading, Text, InputGroup, Input, Flex, Button, Container, Divider } from '@chakra-ui/react';
import Reviews from '../Reviews/review_page'
export function ScubaDiving() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box as="header" position="relative" backgroundImage="url('https://tse2.mm.bing.net/th?id=OIP.ZaNZG3FYwCR7zNPBK40ZXwHaE8&pid=Api&P=0&h=180')" backgroundPosition="center" backgroundSize="cover" height="70vh" display="flex" alignItems="center" justifyContent="center" color="white" textAlign="center" padding="4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} _hover={{ transition: 'transform 0.7s ease-in-out' }}>
        
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
          <Heading as="h1" size="2xl" mb={4} transition="color 0.5s ease-in-out" style={{color:'WHITE'} } >SCUBA DIVING</Heading>
          <Text fontSize="xl" mb={6} style={{color:'beige',fontSize:'40px'}}>Create unforgettable memories with us.</Text>
        </Box>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Text fontSize="30px" pt="20px" pl="20px"><u>OUR SUGGESTIONS</u></Text><br/>
        <Text style={{fontSize:'25px'}} ><b>KOVALAM,SOUTHERN COAST OF KERALA</b>is the best place to experience Surfing</Text>
        <Text mb={6} style={{fontFamily:'arial',fontSize:'20px'}}>
       <b> <mark>ScubaDiving at Neil</mark></b>,Island offers an enchanting underwater adventure in one of the most pristine locations in the Andaman and Nicobar Islands. Known for its unspoiled beauty, Neil Island, also called Shaheed Dweep, is a hidden gem with vibrant coral reefs, clear turquoise waters, and abundant marine life.

The dive sites around Neil Island are less crowded compared to the more popular sites in the Andamans, making it an ideal spot for both novice and experienced divers seeking a serene and immersive experience. The waters around Neil Island are teeming with diverse marine species, including colorful coral gardens, schools of tropical fish, sea turtles, and even occasional sightings of manta rays and reef sharks.

One of the most popular dive sites is Margherita's Mischief, known for its calm waters and excellent visibility. This site features a mix of soft and hard corals and is home to a variety of marine life, such as stingrays, parrotfish, and butterflyfish. Another notable spot is **Bus Stop, where the reef slopes down to the sandy bottom, offering opportunities to see larger pelagic species.

The diving conditions at Neil Island are generally favorable, with warm water temperatures and visibility that can exceed 20 meters (65 feet). 
        </Text>
      
        <Text>
          <b style={{ fontSize: "35px" }}>"AQUA CREATURES ARE CALLING,I MUST GO..."<br /> — John Muir</b>
          <img src="https://tse1.mm.bing.net/th?id=OIP.zYt1i8IdqaRI9bGpWbI7lAHaEK&pid=Api&P=0&h=180" style={{ display: 'block', margin: '10px auto', maxWidth: '100%', height: '100%' }} alt="Scuba Diving" />
        </Text>

        <Text fontSize="30px" pt="20px" pl="20px"><u>HERE IS YOUR BUDGET ROUTE MAP!!</u></Text>
        <Text mb={6} style={{fontSize:'20px'}}>
        Planning a budget for scuba diving on Neil Island involves considering the costs of the dive itself, accommodation, food, transportation, and other incidental expenses. Here's a breakdown to help you plan:

        <b> 1. Scuba Diving Costs</b><br/>
   - Introductory Dive (for beginners): ₹3,500 - ₹4,500 per person (includes basic training, equipment, and a dive up to 12 meters)<br/>
   - Certified Dives (for licensed divers): ₹2,500 - ₹4,000 per dive (depending on the dive site and number of dives)<br/>
   - Scuba Diving Course (PADI Open Water Course): ₹22,000 - ₹28,000 (3-4 days, includes certification, multiple dives, and equipment)<br/>
   - Underwater Photography/Videography: ₹1,500 - ₹3,000 extra<br/>

   Inclusions: All dives typically include equipment (mask, fins, wetsuit, tank), boat transfers to dive sites, and professional dive instructors.<br/>

   <b>2. Accommodation</b><br/>
   - Budget Guesthouses: ₹1,000 - ₹2,000 per night<br/>
   - Mid-Range Hotels/Resorts: ₹2,500 - ₹4,500 per night<br/>
   - Luxury Resorts: ₹5,000 - ₹10,000 per night<br/>

   Tip: For a budget-friendly stay, consider simple guesthouses or mid-range resorts, which offer comfortable accommodation close to the beaches.<br/>

   <b> 3. Food</b><br/>
   - Local Eateries/Street Food: ₹150 - ₹300 per meal<br/>
   - Budget Restaurants: ₹300 - ₹600 per meal<br/>
   - Resort Dining: ₹700 - ₹1,500 per meal<br/>

   Tip: Explore local seafood delicacies, which are often fresh and affordable at local eateries.<br/>

   <b>4. Transportation</b><br/>
   - Getting to Neil Island:<br/>
     - Ferry from Port Blair to Neil Island: ₹500 - ₹1,500 per person (one-way)<br/>
   - Local Transportation (Bicycles, Auto-rickshaws, Scooters): ₹100 - ₹500 per day (scooters are a convenient way to explore the island)<br/>

   Tip: Renting a bicycle or scooter is a cost-effective and enjoyable way to explore the small island.<br/>

 <b> 5. Miscellaneous Expenses</b><br/>
   - Entry Fees (for natural parks or beaches): ₹10 - ₹100 per person<br/>
   - Souvenirs/Shopping (local handicrafts): ₹500 - ₹1,000<br/>
   - Additional Activities (Snorkeling, Kayaking): ₹500 - ₹2,000 per activity<br/>

  <b>6. Estimated Total Budget (for a 2-day Trip)</b><br/>
   - Solo Traveler (Budget Option): ₹9,000 - ₹14,000<br/>
   - Couples/Group (Mid-Range Option): ₹15,000 - ₹25,000 per person<br/>

 <b> Tips for Budgeting:</b><br/>
- Book dives in advance to secure better rates, especially during peak seasons.<br/>
- Travel during the off-season (May to September) for lower prices on accommodation and activities, though weather conditions should be considered.<br/>
- Opt for package deals that include diving and accommodation to save on overall costs.<br/>
- Carry sufficient cash, as ATMs may not be readily available on the island, and some places may not accept cards.<br/>

With this budget planning, you can experience the rich underwater world of Neil Island while managing your expenses effectively.<br/>
        </Text>

        {/* Google Maps Embed for Neil Island */}
        <Box as="section" mt={10} mb={10}>
          <iframe
            title="Neil Island Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63671.04903328562!2d93.0105697033301!3d11.848035199171384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30892cf78ad5e12f%3A0xb605d2a733c67264!2sNeil%20Island%2C%20Andaman%20and%20Nicobar%20Islands%2C%20India!5e0!3m2!1sen!2sus!4v1692723450121!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
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

export default ScubaDiving;