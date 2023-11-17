import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './app.css';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


function App() {
  const introRef = useRef(null);    // used for animation using Gsap
  const lineRef=useRef(null);
  const about1Ref=useRef(null);
  const about2Ref=useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);  // used for animation using Gsap

  const[Intro,setIntro]=useState(true)    // used for Conditional rendering
  const[Main,setMain]=useState(false);  

  useEffect(() => {                        // this useEffect is used to Conditional Rendring Fn


    const timeout = setTimeout(() => {     // delay for rendering pages
      setIntro(false);
      setMain(true);
    },3000);

    const timeout1 = setTimeout(() => {
      setShow1(false);
      setShow2(true);
    },1000) ;  // delay for rendering animation

    const timeout2 = setTimeout(() => {
      setShow2(false);
      setShow3(true);
    },2000) ; 

    return () => {
      clearTimeout(timeout)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    };
  }, []);

   


  useEffect(() => {
    if(Main){
    const intro = introRef.current;
    const line= lineRef.current;
    const about1=about1Ref.current;
    const about2=about2Ref.current;
    const project1 = project1Ref.current;
    const project2 = project2Ref.current;
    const project3 = project3Ref.current;


    gsap.to(intro, { //for the introRef
      opacity: 1,
      duration: 1,
    });
    
    gsap.from(about1,{
      opacity:0,
      x:-50,
      duration:1,
      scrollTrigger:{
         trigger:about1,
         start:"top 3%",
         toggleActions: 'play pause none none',
         ease: 'linear',
      }
    });

    gsap.from(about2,{
      opacity:0,
      x:50,
      duration:1,
      scrollTrigger:{
         trigger:about2,
         start:"top 75%",
         toggleActions: 'play pause none none',
         ease: 'linear',
      }
    });

    gsap.from(line,{
      width: 150,
      duration:2,
      scrollTrigger:{
        trigger:line,
        start: 'top 70%',
        toggleActions: 'play  reverse reset',
        ease: 'linear',
      }
    });


    gsap.from(project1, {  //project1
      opacity: 0,
      y: -15,
      duration: 0.5,
      scrollTrigger: {
        trigger: project1,
        start: 'top 85%',
        toggleActions: 'play pause none none',
        ease: 'linear',
      },
    });
    gsap.from( project2, {   //project2
      opacity: 0,
      y: -25,
      duration: 0.3,
      scrollTrigger: {
        trigger:  project2,
        start: 'top 85%',
        toggleActions: 'play pause none none',
        ease: 'linear',
      },
    });
    gsap.from( project3, {   //project3
      opacity: 0,
      y: -25,
      duration: 0.3,
      scrollTrigger: {
        trigger:project3,
        start: 'top 85%',
        toggleActions: 'play pause none none',
        ease: 'linear',
      },
    });

    }
    
  }, [Main]);

  return (
    
     <div className='Portfolio'>
        { Intro && 
            <div className='intro-before'>
              <div className='intro-before-text'>
                 {show1 && <h1>Designer</h1>}
                 {show2 && <h1>MLengineer</h1>}
                 {show3 && <h1>Developer</h1>}
              </div>
            </div>
         }
        { Main && (                   // conditional Rendering Main
         <div className="top">
          <nav className='navbar'>
            <div className="nav-left">
              <h1>MAK</h1>
            </div>
            <div className="nav-right">
              <ul className='nav-links'>
                <li className='nav-link-active'>home</li>
                <li><a className="nav-link-misc" href="#about-link">about </a></li>
                <li><a className="nav-link-misc"href="#projects">projects </a></li>
                <li><a className="nav-link-misc"href="#end">contact </a></li>
              </ul>
            </div>
          </nav>
          <div ref={introRef} className="intro">
            <div  className='intro-text'>
             <h1>ARJUN</h1>
             <ul className='hobby'>
               <li>Designer</li>
               <li>MLengineer</li>
               <li>Developer</li>
             </ul>
             <h1>KRISHNA</h1>
            </div>
          </div>
          <div id='about'>
            <div ref={about1Ref} className="about1">
              <div className='about-data'>
              <span id="about-link"></span>
                <h1 className='about-heading'>AboutMe</h1>
                <p>I'm a Freshman student at Govt. Model Engineering College doing major in Computer Science. I am passionate about Technology and the world of Software. I do projects when I get time and also enjoy doing Machine learning. </p>
              </div>
            </div>
            <div ref={about2Ref} className="about2">
              <div className="about-data2">
              <h3>Currently I'am</h3>
                 <ul>
                  <li>Polishing my design skills</li>
                  <li>Doing a little bit machine learning</li>
                  <li>Surviving under academic pressure</li>
                 </ul>
                 </div>
            </div>
          </div>
          <h5 ref={lineRef} className="project-seperator">scroll to see projects |</h5>
          <div  id="projects">
              
              <div ref={project1Ref} className="project">
                <div className="left">
                  <h1>Project 1</h1>
                  <p>Project 1 description</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi exercitationem ipsum magni suscipit consectetur aut velit, necessitatibus nam minima rem, odio neque quisquam voluptate ad quos illum esse blanditiis.</p>
                </div>
                <div className="right"></div>
              </div>
              <div ref={project2Ref} className="project">
              <div className="left">
                  <h1>Project 1</h1>
                  <p>Project 1 description</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi exercitationem ipsum magni suscipit consectetur aut velit, necessitatibus nam minima rem, odio neque quisquam voluptate ad quos illum esse blanditiis.</p>
                </div>
                <div className="right"></div>
              </div>
              <div ref={project3Ref} className="project">
              <div className="left">
                  <h1>Project 1</h1>
                  <p>Project 1 description</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi exercitationem ipsum magni suscipit consectetur aut velit, necessitatibus nam minima rem, odio neque quisquam voluptate ad quos illum esse blanditiis.</p>
                </div>
                <div className="right"></div>
              </div>
            </div>
            <div id="end">
        <a href="https://www.linkedin.com/in/m-arjun-krishna-5b924b256" className='link'>LinkedIn</a>
        <a href="link" className='link'>Resume</a>
        <a href="mailto:arjunkrishna7356@gmail.com" className='link'>ContactMe</a>
        <a href="https://github.com/ArjunKrish7356" className='link'>Github</a>
        
       </div>
       <div className='copyright'>
          <p>© 2023 Arjun Krishna. All rights reserved.</p>
       </div>
            </div>
        )}
       </div>
          
    
  )
}

export default App
