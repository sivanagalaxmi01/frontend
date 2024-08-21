

// import React, { useState } from 'react';
// import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Heading, Link } from '@chakra-ui/react';
// import axios from 'axios';
// import api from '../Actions/Api1';
// import { useNavigate } from 'react-router-dom';  
// import { SlStar } from "react-icons/sl";//importing stars
// function SignIn() {
//   const [Email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();  

  
//   const signin = async () => {
//     try {
//       const response = await axios.post(api + "/signin", { Email, password });
//       if (response.data.message === "Login successful") {
//         console.log(response)
//         sessionStorage.auth = JSON.stringify(response?.data?.values);
//         alert("Login successful");
//         navigate('/')
//       } else if (response.data.message === "incorrect password") {
//         alert("Incorrect password");
//       } else {
//         alert("User not found");
//         navigate("/signup");  
//       }
//     } catch (e) {
//       console.log(e);  
//     }
//   };
  

  
//   const handleForgotPassword = () => {
//     navigate("/updatepass");  
//   };

//   return (
//     <Box 
//       display="flex" 
//       alignItems="center" 
//       justifyContent="center" 
//       height="100vh" 
//       backgroundColor="#f7fafc"  
//     >
//       <Box
//         padding="30px"
//         maxWidth="400px"
//         boxShadow="lg"
//         borderRadius="md"
//         backgroundColor="white"
//         borderWidth="1px"
//         borderColor="gray.300"
//       >
//         <Heading as="h2" size="lg" textAlign="center" marginBottom="20px">Sign In</Heading>
        
//         <FormControl>
//           <FormLabel>Email address</FormLabel>
//           <Input
//             type='email' 
//             placeholder="Enter your email" 
//             marginBottom="12px" 
//             value={Email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//           </FormControl>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type='password' 
//             placeholder="Enter your password" 
//             marginBottom="12px" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />

//           <FormHelperText marginBottom="16px">
//             We&apos;ll never share your email and password.<SlStar />
//           </FormHelperText>

//           <Button 
//             colorScheme="teal" 
//             width="100%" 
//             onClick={signin}  
//           >
//             Submit
//           </Button>
    
//           <Box marginTop="4" textAlign="center">
//             <Link color="teal.500" onClick={handleForgotPassword}>
//               Forgot Password?
//             </Link>
//           </Box>
//         </FormControl>
//       </Box>
//     </Box>
//   );
// }

// export default SignIn;
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Heading, Link } from '@chakra-ui/react';
import axios from 'axios';
import api from '../Actions/Api1';
import { useNavigate } from 'react-router-dom';  


function SignIn() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const signin = async () => {
    try {
      const response = await axios.post(api + "/signin", { Email, password });
      if (response.data.message === "Login successful") {
        console.log(response);
        sessionStorage.auth = JSON.stringify(response?.data?.values);
       
        alert("Login successful");
        navigate('/');
         window.location.reload();
      } else if (response.data.message === "Incorrect password") {
        alert("Incorrect password");
      } else {
        alert("User not found");
        navigate("/signup");  
      }
    } catch (e) {
      console.log(e);  
    }
  };

  const handleForgotPassword = () => {
    navigate("/updatepass");  
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
      <Box
        padding="30px"
        maxWidth="400px"
        boxShadow="lg"
        borderRadius="md"
        backgroundColor="rgba(255, 255, 255, 0.9)" // Semi-transparent background for better readability
        borderWidth="1px"
        borderColor="gray.300"
      >
        <Heading as="h2" size="lg" textAlign="center" marginBottom="20px">
          Sign In
        </Heading>
        
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type='email' 
            placeholder="Enter your email" 
            marginBottom="12px" 
            value={Email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FormControl>
        
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type='password' 
            placeholder="Enter your password" 
            marginBottom="12px" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <FormHelperText marginBottom="16px">
            We&apos;ll never share your email and password.
          </FormHelperText>

          <Button 
            backgroundColor="#ff4500" // Coral color similar to the sky in the image
            color="white"
            _hover={{ backgroundColor: "#ff7f50" }} // Darker coral on hover
            width="100%" 
            onClick={signin}  
          >
            Submit
          </Button>
    
          <Box marginTop="4" textAlign="center">
            <Link color="teal.500" onClick={handleForgotPassword}>
              Forgot Password?
            </Link>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SignIn;
