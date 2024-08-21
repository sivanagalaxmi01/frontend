// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack ,Link} from "@chakra-ui/react";
// import api from '../Actions/Api1';
// import { useNavigate } from 'react-router-dom';
// const Signup = () => {
//   const [FirstName, setFirstName] = useState('');
//   const [LastName, setLastName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [PhoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 
//   const signup = async () => {
//     try {
//       const response = await axios.post(api + "/signup", {
//         FirstName,
//         LastName,
//         PhoneNumber,
//         Email,
//         password
//       });
  
//       const message = response.data.message; // Access response data correctly
  
//       if (message === "Signup successful") {
//         alert("Sign up successful");
//         window.location.href = '/signin';
//       } else if (message === "email already exists") {
//         alert("Email already exists");
//       }
//     } catch (e) {
//       console.error(e.response ? e.response.data : e.message);
//       alert("An error occurred. Please try again.");
//     }
//   };
  
//   const handlesignin = () => {
//     navigate("/signin");  // Navigate to the Forgot Password page
//   };


//   return (
//     <Box 
//       display="flex" 
//       alignItems="center" 
//       justifyContent="center" 
//       height="100vh" 
//       backgroundColor="gray.100"
//     >
//       <Card 
//         className="signup-card" 
//         width="400px" 
//         boxShadow="xl" 
//         borderRadius="md" 
//         backgroundColor="white"
//       >
//         <CardBody>
//           <Stack spacing={4}>
//             <FormControl>
//               <FormLabel className="signup-label">First Name</FormLabel>
//               <Input 
//                 type='text' 
//                 className="signup-input" 
//                 placeholder='Enter your First name'
//                 value={FirstName} 
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel className="signup-label">Last Name</FormLabel>
//               <Input 
//                 type='text'
//                 className="signup-input"
//                 placeholder='Enter your Last name'
//                 value={LastName} 
//                 onChange={(e) => setLastName(e.target.value)}
//               /> 
//             </FormControl>
//             <FormControl>
//               <FormLabel className="signup-label">Phone Number</FormLabel>
//               <Input 
//                 type='number' 
//                 className="signup-input"
//                 placeholder='Enter your phone number'
//                 value={PhoneNumber} 
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel className="signup-label">Email Address</FormLabel>
//               <Input 
//                 type='email' 
//                 className="signup-input" 
//                 placeholder='Enter your email'
//                 value={Email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel className="signup-label">Password</FormLabel>
//               <Input 
//                 type='password' 
//                 className="signup-input" 
//                 placeholder='Enter your password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} 
               
//               />
//             </FormControl>
//             <FormControl>
//             <Button 
//               className="signup-button" 
//               size='lg' 
//               mt={4} 
//               colorScheme="teal" 
//               onClick={signup}
//               _hover={{ bg: "teal.600" }}
//             >
//               Sign Up
              
//             </Button>
//             <Box marginTop="4" textAlign="center">
//                 <Link color="teal.500" onClick={handlesignin}>
//                   Already have an account? Sign in
//                 </Link>
//               </Box>
//             </FormControl>
//           </Stack>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// }

// export default Signup;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack, Link } from "@chakra-ui/react";
// import api from '../Actions/Api1';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [FirstName, setFirstName] = useState('');
//   const [LastName, setLastName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [PhoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 
//   const signup = async () => {
//     try {
//       const response = await axios.post(api + "/signup", {
//         FirstName,
//         LastName,
//         PhoneNumber,
//         Email,
//         password
//       });
  
//       const message = response.data.message; // Access response data correctly
  
//       if (message === "Signup successful") {
//         alert("Sign up successful");
//         window.location.href = '/signin';
//       } else if (message === "email already exists") {
//         alert("Email already exists");
//       }
//     } catch (e) {
//       console.error(e.response ? e.response.data : e.message);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   const handlesignin = () => {
//     navigate("/signin");  // Navigate to the Sign In page
//   };

//   return (
//     <Box 
//       display="flex" 
//       alignItems="center" 
//       justifyContent="center" 
//       height="100vh" 
//       backgroundColor="gray.100"
//     >
//       <Card 
//         width="400px" 
//         boxShadow="xl" 
//         borderRadius="md" 
//         backgroundColor="white"
//         p={4}  // Add padding for internal spacing
//       >
//         <CardBody>
//           <Stack spacing={4}>
//             <FormControl>
//               <FormLabel>First Name</FormLabel>
//               <Input 
//                 type='text' 
//                 placeholder='Enter your First name'
//                 value={FirstName} 
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Last Name</FormLabel>
//               <Input 
//                 type='text'
//                 placeholder='Enter your Last name'
//                 value={LastName} 
//                 onChange={(e) => setLastName(e.target.value)}
//               /> 
//             </FormControl>
//             <FormControl>
//               <FormLabel>Phone Number</FormLabel>
//               <Input 
//                 type='text'  // Changed to text to handle different phone number formats
//                 placeholder='Enter your phone number'
//                 value={PhoneNumber} 
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Email Address</FormLabel>
//               <Input 
//                 type='email' 
//                 placeholder='Enter your email'
//                 value={Email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Password</FormLabel>
//               <Input 
//                 type='password' 
//                 placeholder='Enter your password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} 
//               />
//             </FormControl>
//             <Button 
//               size='lg' 
//               mt={4} 
//               colorScheme="teal" 
//               onClick={signup}
//               _hover={{ bg: "teal.600" }}
//               width="100%" // Full width button
//             >
//               Sign Up
//             </Button>
//             <Box marginTop="4" textAlign="center">
//               <Link color="teal.500" onClick={handlesignin}>
//                 Already have an account? Sign in
//               </Link>
//             </Box>
//           </Stack>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack, Link } from "@chakra-ui/react";
import api from '../Actions/Api1';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const signup = async () => {
    try {
      const response = await axios.post(api + "/signup", {
        FirstName,
        LastName,
        PhoneNumber,
        Email,
        password
      });
  
      const message = response.data.message;
  
      if (message === "Signup successful") {
        alert("Sign up successful");
        window.location.href = '/signin';
      } else if (message === "Email already exists") {
        alert("Email already exists");
      }
    } catch (e) {
      console.error(e.response ? e.response.data : e.message);
      alert("An error occurred. Please try again.");
    }
  };

  const handlesignin = () => {
    navigate("/signin");
  };

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      backgroundImage="url('https://images.hdqwalls.com/wallpapers/beautiful-sunset-jo.jpg')" 
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Card 
        width="400px" 
        boxShadow="xl" 
        borderRadius="md" 
        backgroundColor="rgba(255, 255, 255, 0.9)" // Slightly transparent background
        p={4}
      >
        <CardBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input 
                type='text' 
                placeholder='Enter your First name'
                value={FirstName} 
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input 
                type='text'
                placeholder='Enter your Last name'
                value={LastName} 
                onChange={(e) => setLastName(e.target.value)}
              /> 
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input 
                type='text'
                placeholder='Enter your phone number'
                value={PhoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input 
                type='email' 
                placeholder='Enter your email'
                value={Email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
                type='password' 
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </FormControl>
            <Button 
              size='lg' 
              mt={4} 
              backgroundColor="#ff4500" // Adjusted to match the sky color in the sunset image
              onClick={signup}
              _hover={{ bg: "#ff7f50" }}
              width="100%"
            >
              Sign Up
            </Button>
            <Box marginTop="4" textAlign="center">
              <Link color="teal.500" onClick={handlesignin}>
                Already have an account? Sign in
              </Link>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Signup;
