import React from 'react';
import { Box, Heading, SimpleGrid, Image, Container } from '@chakra-ui/react';

const SurfingGallery = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={8} textAlign="center">Surfing</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        <Box>
          <Image 
            src="https://images.app.goo.gl/3MQMT3HKZGqvXy5v6" 
            alt="Surfing Image 1" 
            borderRadius="md" 
            boxSize="100%" 
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image 
            src="https://images.app.goo.gl/PYpHszgNdPeWz91R6" 
            alt="Surfing Image 2" 
            borderRadius="md" 
            boxSize="100%" 
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image 
            src="https://images.app.goo.gl/CgTNNZ6WCQSuEmfW6" 
            alt="Surfing Image 3" 
            borderRadius="md" 
            boxSize="100%" 
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image 
            src="" 
            alt="Surfing Image 4" 
            borderRadius="md" 
            boxSize="100%" 
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default SurfingGallery;
