import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Textarea,
  Icon,
  FormErrorMessage,
  useDisclosure
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaCommentDots, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

function ContactUs() {
  const [formValues, setFormValues] = useState({
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formValues.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formValues.message) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      onOpen();
    } else {
      setFormErrors({});
      // Handle form submission logic here
      alert('Message sent!');
      setFormValues({
        subject: '',
        message: '',
      });
    }
  };

  return (
    <>
      <Box as="header" position="relative" backgroundColor="black" color="white" py={4}>
        <Flex maxW="container.lg" mx="auto" alignItems="center" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold" mr="auto">DARE & SHARE</Text>
          
          <InputGroup size="md" maxW="400px" borderColor="white" bg="white" borderRadius="md" mx="auto" marginRight="4">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search..." variant="outline" borderColor="white" focusBorderColor="black" />
          </InputGroup>
          
          <Flex alignItems="center">
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/'; }}>Home</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/aboutus'; }}>About</Button>
            <Button variant="link" color="white" mr={4} onClick={() => { 
          
          window.location.href = '/signup'; }}>Sign Up</Button>
            <Button variant="link" color="white" onClick={() => { 
          
          window.location.href = '/contact'; }}>Contact</Button>
          </Flex>
        </Flex>
      </Box>

      <Container maxW="container.lg" py={6}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">Get In Touch With Us</Heading>
        <Box as="form" maxW="md" mx="auto" onSubmit={handleSubmit}>
          <FormControl mb={4} isInvalid={!!formErrors.subject}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input
              id="subject"
              type="text"
              placeholder="Subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            <FormErrorMessage>
              <Flex align="center">
                <Icon as={FaExclamationTriangle} color="red.500" mr={2} />
                {formErrors.subject}
              </Flex>
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={4} isInvalid={!!formErrors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Your Message"
              rows={6}
              value={formValues.message}
              onChange={handleChange}
            />
            <FormErrorMessage>
              <Flex align="center">
                <Icon as={FaExclamationTriangle} color="red.500" mr={2} />
                {formErrors.message}
              </Flex>
            </FormErrorMessage>
          </FormControl>

          <Button
            colorScheme="blue"
            size="lg"
            fontSize="lg"
            variant="solid"
            type="submit"
            width="full"
            mt={4}
            _hover={{ bg: "blue.500", color: "white" }}
            _active={{ bg: "blue.600", color: "white" }}
          >
            Send Message
          </Button>
        </Box>
      </Container>

      <Divider />

      <Flex direction="column" align="center" py={6} bg="black" color="white">
        <Flex mb={4}>
          <Button variant="link" color="white" mr={6} leftIcon={<FaPhoneAlt />}>
            +123 456 7890
          </Button>
          <Button variant="link" color="white" mr={6} leftIcon={<FaEnvelope />}>
            contact@dareandshare.com
          </Button>
        </Flex>
        <Flex mb={4}>
          <Button variant="link" color="white" mr={6} leftIcon={<FaCommentDots />}>
            Contact Us
          </Button>
          <Button variant="link" color="white" leftIcon={<FaCommentDots />}>
            Send a Message
          </Button>
        </Flex>
      </Flex>

      <Box as="footer" textAlign="center" p={4} bg="black" color="white">
        <Text>&copy; {new Date().getFullYear()} DARE & SHARE. All rights reserved.</Text>
      </Box>
    </>
  );
}

export default ContactUs;