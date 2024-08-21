import React from 'react';
import './App.css';

import SignIn from './Component/Signin/Sign_in';
import Signup from './Component/Login/Login_page';
import ResetPassword from './Component/Forgotpass/Forgot_password';
import About from './Component/Aboutus/aboutus';
import ContactUs from './Component/Contactus/contact';
import Navbar from './Component/navbar/Navbar';
import { Header } from './Component/header/header';
import { Cards } from './Component/cards/cards';
import { LatteCard } from './Component/lattecard/lattecard';
import Skiing from './Component/Skiing/Skiing'
import ScubaDiving from './Component/Scubadiving/Scuba_Diving';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Blog from './Component/Blog/Blog_page';
//import Blogs from './Component/Blog/Blog_form';
import RockClimbing from './Component/Rockclimbing/Rock_climbing';
import Riverrafting from './Component/Riverraft/river_raft';
import Skycycling from './Component/skycycling/sky_cycle';
import Surfing from './Component/surfing/Surf';
///import BlogsList from './Component/blogpage/blog_list';
import BlogForm from './Component/Blog/Blog_form';

import BlogHome from './Component/Blog/Blog_form';
import Button from './button';
// function App() {
//   const test = sessionStorage?.auth && JSON.parse(sessionStorage?.auth)?.Email;
//   return (
//     <>
   
//       <BrowserRouter>
//         {/* <Navbar />
       
//           <Route 
//             path='/' 
//             element={
//               <>
//                 <Header />
//                 <Cards />
//                 <LatteCard />
//               </>
//             } 
//           /> */}
//            <Routes>
//            <Route path='/' element={<Header />} />
//           <Route path='/signin' element={<SignIn />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/updatepass' element={<ResetPassword />} />
//           <Route path='/aboutus' element={<About />} />
//           <Route path='/contact' element={<ContactUs />} />
//           <Route path='/skiing' element={test?<Skiing/>:<Signup/>}></Route>
//           <Route path='/scuba' element={test?<ScubaDiving/>:<Signup/>}></Route>
//           <Route path='/blogl' element={<BlogForm/>}></Route>
//           <Route path='/rock'element={test?<RockClimbing/>:<Signup/>}></Route>
//       <Route path='/raft' element={test?<Riverrafting/>:<Signup/>}></Route>
//       <Route path='/cycle' element={test?<Skycycling/>:<Signup/>}></Route>
//       <Route path='/surf' element={test?<Surfing/>:<Signup/>}></Route>
//       <Route path='/blogd' element={<BlogsDel/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

function App() {

  const test = sessionStorage?.auth && JSON.parse(sessionStorage?.auth)?.Email;
  console.log(test)
console.log(!!test)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/updatepass' element={<ResetPassword />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/skiing' element={test ? <Skiing /> : <Signup />} />
        <Route path='/scuba' element={test ? <ScubaDiving /> : <Signup />} />
        <Route path='/blogf' element={<BlogHome />} />
        <Route path='/rock' element={test ? <RockClimbing /> : <Signup />} />
        <Route path='/raft' element={test ? <Riverrafting /> : <Signup />} />
        <Route path='/cycle' element={test ? <Skycycling /> : <Signup />} />
        <Route path='/surf' element={test ? <Surfing /> : <Signup />} />
        <Route path='/button' element={ <Button />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
