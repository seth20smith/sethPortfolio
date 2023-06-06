import React, { useEffect } from 'react'
import '../index.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useScroll } from '../components/ScrollContext';


function Home() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { saveScroll, loadScroll } = useScroll();

  useEffect(() => {
    if (loadScroll(pathname)) {
      window.scrollTo(0, loadScroll(pathname));
    }
  }, [loadScroll, pathname]);

  const handleClick = (path) => {
    saveScroll(pathname);
    navigate(path);
  };

  return (
    <>
      <section className="rounded-lg mb-40 bg-gradient-to-r from-purple-900 via-gray-500 to-gray-700 shadow-xl shadow-blue-300/20">
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <img className="h-24 w-24 md:h-40 md:w-40 rounded-full my-2 mx-auto" src="./images/S1.jpg" alt="Seth Smith" />
                <h1 className="mt-0 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Seth <br /><span className="text-blue-400">Smith</span>
                </h1>
                <p className="text-xl font-sans text-center mx-auto max-w-md text-white uppercase">
                  Aspiring software developer <span className="text-blue-400 font-bold font-mono"> passionate</span> about building engaging and efficient applications. Always <span className="text-blue-400 font-bold font-mono">eager</span> to learn and take on new challenges applying my <span className="text-blue-400 font-bold font-mono">creative</span> background into the world!</p>
              </div>
              {/* Container for the image and quote */}
              <div className="relative mb-10 lg:mb-0">
                <img src="./images/istockphoto3.jpeg" className="w-full blur-sm rounded-lg shadow-2xl shadow-blue-400/20" alt="Office Space" />
                {/* Quote Section */}
                <div className=" text-gray-800 absolute top-0 left-0  opacity-50">
                  <blockquote className="text-xl italic font-semibold  dark:text-gray">
                    <svg aria-hidden="true" className="w-10 h-10 text-center text-black " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>
                    <p>"The function of good software is to make the complex appear to be simple." - Grady Booch</p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-36 my-8 select-none border-slate-950 items-center px-4 py-8"> 
  <NavLink to="/Aboutme">
    <button  className="py-2 px-8 shadow-xl shadow-purple-500/20 no-underline rounded-full bg-yellow-500 text-white font-sans font-semibold text-lg  btn-primary hover:text-white  hover:animate-bounce focus:outline-none active:shadow-blue-400 mb-2 md:mb-0">About Me</button>
  </NavLink>
  <NavLink to="/Work">
    <button  className="py-2 px-8 shadow-xl shadow-purple-500/20 no-underline rounded-full bg-green-700 text-white font-sans font-semibold text-lg  btn-primary hover:text-white  hover:animate-bounce focus:outline-none active:shadow-blue-400 mb-2 md:mb-0">Work</button>
  </NavLink>
  <NavLink to="/Resume">
    <button  className="py-2 px-8 shadow-xl shadow-purple-500/20 no-underline rounded-full bg-red-600 text-white font-sans font-semibold text-lg btn-primary hover:text-white  hover:animate-bounce focus:outline-none active:shadow-blue-400 mb-2 md:mb-0">Resume</button>
  </NavLink>
</div>
      <div>
        {/* Call to Action Section */}
        <section className="mt-24">
          <h4>Let's Connect!</h4>
          <p>Interested in working with me? Reach out!</p>
        </section>
      </div>
    </>
  )
}
export default Home;
