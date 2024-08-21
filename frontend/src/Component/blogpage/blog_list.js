import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import api from '../Actions/Api1';
import { Box, Text, VStack } from '@chakra-ui/react';

function BlogsList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get(api + '/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="xl" mb={2} style={{fontSize:'40px',marginLeft:'650px'}}>Blogs</Text>
          <Box borderWidth="1px" borderRadius="md" p={4} bg="gray.50">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <Box key={index} mb={4} p={3} borderWidth="1px" borderRadius="md" borderColor="gray.200" bg="white">
                  <Text fontWeight="bold" mb={1}>{blog.username}</Text>
                  <Text fontWeight="bold" mb={1}>{blog.title}</Text>
                  <Text fontWeight="bold" mb={1}>{blog.place}</Text>
                  <Text mb={1}>{blog.experience}</Text>
                  <Text>{blog.suggestions}</Text>
                </Box>
              ))
            ) : (
              <Text>No blogs yet.</Text>
            )}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default BlogsList;
