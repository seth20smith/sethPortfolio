import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '../components/ScrollContext';


// Card Component
const Card1 = ({ imgSrc }) => (
  <div className="bg-white rounded shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Who I am</h3>
        </div>
        <p className="text-md text-black tracking-normal font-serif">My diverse background starts in Oakland, CA, and includes an athletic career at both the collegiate and professional level. I ventured from a distinguished athletic career into the education sector as a teacher and coach. My academic journey culminated into Bachelor's degree in Digital Film. This creative trajectory, especially my film editing experience, unveiled a new path into software development where I now revel in the joys of coding. </p>
      </div>
    </div>
  </div>
);

const Card2 = ({ imgSrc }) => (
  <div className="bg-white rounded shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Coding Life</h3>
        </div>
        <p className="text-md text-black tracking-normal font-serif">Having recently completed an intensive bootcamp at UC Davis, I've transitioned into the world of freelance software development. I've been diligently building websites for a variety of clients, and this portfolio is a testament to my work, encompassing both past and current projects.</p>
      </div>
    </div>
  </div>
);

const Card3 = ({ imgSrc }) => (
  <div className="bg-white rounded shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Goals</h3>
        </div>
        <p className="text-md text-black tracking-normal font-serif ">My professional aspiration is to contribute as a full-time Front-End Developer, particularly in a role that allows for creative problem-solving. Additionally, contract roles or positions as a Junior Full Stack Developer are opportunities that I regard as significant milestones in my career path.</p>
       
      </div>
    </div>
  </div>
);

const Aboutme = () => {
  const { pathname } = useLocation();
  const {  loadScroll } = useScroll();

  useEffect(() => {
    if (loadScroll(pathname)) {
      window.scrollTo(0, loadScroll(pathname));
    }
  }, [loadScroll, pathname]);

 
  return (
    <>
    <section className="AboutMe py-8 px-4">
      
      {/* New Card Section */}
      <div className=" rounded-lg min-h-screen bg-gradient-to-r from-purple-900 via-gray-500 to-gray-700  flex justify-center items-center py-20 shadow-xl shadow-blue-300/20">
        <div className="container mx-auto p-12 sm:p-12 bg-gray-200 rounded-xl shadow-xl shadow-blue-300/20">
          <h1 className="text-4xl uppercase text-black font-bold from-current mb-8">About Me</h1>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            <Card1 imgSrc="./images/FB2.jpg" />
            <Card2 imgSrc="./images/Teach2.jpg" />
            <Card3 imgSrc="./images/him1.jpg" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Aboutme;
