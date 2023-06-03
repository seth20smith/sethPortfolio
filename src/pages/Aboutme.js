import React from 'react';


// Card Component
const Card1 = ({ imgSrc }) => (
  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-semibold mb-2">Who I am</h3>
        </div>
        <p className="text-sm text-black tracking-normal">Born and raised in oakland, ex colliegate and pro-athlete who ran into the profession of teaching and coaching after completion of a bachelors in Digital film. My creative path has led me into the software realm finding peace in </p>
        <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">Read more</button>
      </div>
    </div>
  </div>
);

const Card2 = ({ imgSrc }) => (
  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-semibold mb-2">Coding Life</h3>
        </div>
        <p className="text-sm text-black tracking-normal">I am a recent bootcamp grad from the UC DAVIS location. Since my completion I have been freelancing and building sites for those in need. Here you will find some of my past and current work.</p>
        <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">More More?</button>
      </div>
    </div>
  </div>
);

const Card3 = ({ imgSrc }) => (
  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
    <div>
      <img className="w-full" src={imgSrc} alt="" />
      <div className="px-4 py-2">
        <div className="flex space-x-2 mt-2">
          <h3 className="text-lg text-gray-600 font-semibold mb-2">Goals</h3>
        </div>
        <p className="text-sm text-black tracking-normal">My Goal is to land a postion for a full time front end developer. Ideally a postition of creativity. I also would find it as an accomplishment to find contract or Jr fullstack developer work.</p>
        <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">Read more</button>
      </div>
    </div>
  </div>
);

const Aboutme= () => {
  return (
    <>
    <section className="AboutMe py-8 px-4">
      
      {/* New Card Section */}
      <div class=" rounded-lg min-h-screen bg-gradient-to-r from-blue-300 via-gray-500 to-gray-700 flex justify-center items-center py-20 shadow-xl shadow-purple-300/20">
        <div class="container mx-auto p-12 bg-gray-100 rounded-xl">
          <h1 class="text-4xl uppercase text-black font-bold from-current mb-8">About Me</h1>
          <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            <Card1 imgSrc="./images/S2.jpeg" />
            <Card2 imgSrc="https://i.imgur.com/csPYilq.png" />
            <Card3 imgSrc="https://i.imgur.com/chvO4cX.png" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Aboutme;
