

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../Actions/Api1';
import { Box, Textarea, Button, Flex, VStack, Text, useToast } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

function Reviews() {
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);
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
      await axios.post(api + '/addReview', { username, comment });

      setReviews((prevReviews) => [...prevReviews, { username, comment }]);
      setComment('');

      toast({
        title: 'Review submitted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      // toast({
      //   // title: 'Error submitting review.',
      //   // description: 'There was an error submitting your review. Please try again.',
      //   status: 'error',
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(api + '/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };


  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="xl" mb={2}>YOUR ADVENTURE..YOUR STORY..SHARE IT HERE!!</Text>
          <Flex as="form" onSubmit={handleSubmit} align="center" borderWidth="1px" borderRadius="md" overflow="hidden">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your review here..."
              resize="none"
              rows={3}
              border="none"
              _focus={{ border: 'none' }}
              px={4}
              py={2}
              flex="1"
              required
            />
            <Button
              type="submit"
              colorScheme="teal"
              variant="solid"
              px={4}
              py={2}
              borderRadius="full"
              bg="black"
              color="white"
              _hover={{ bg: 'gray.800' }}
            >
              <ArrowUpIcon />
            </Button>
          </Flex>
        </Box>

        <Box>
          <Text fontSize="xl" mb={2}>Reviews</Text>
          <Box borderWidth="1px" borderRadius="md" p={4} bg="gray.50">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Box key={index} mb={4} p={3} borderWidth="1px" borderRadius="md" borderColor="gray.200" bg="white">
                  <Text fontWeight="bold" mb={1}>{review.username}</Text>
                  <Text>{review.comment}</Text>
                </Box>
              ))
            ) : (
              <Text>No reviews yet.</Text>
            )}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default Reviews;

