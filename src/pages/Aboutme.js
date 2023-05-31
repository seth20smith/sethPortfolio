import React from 'react';

const Aboutme = () => {
  return (
    <>
    <section className="AboutMe py-8 px-4">
      <h2 className="font-bold text-2xl mb-4 text-center underline">About Me</h2>
      <p> Born and raised in oakland, ex colliegate and pro-athlete who ran into the profession of teaching and coaching after completion of a bachelors in Digital film. My creative path has led me into the software realm finding peace in  </p>

      <div className="container mx-auto grid md:grid-cols-3 gap-4">
        <div className="building-block-1">
          <h3 className="font-bold text-xl mb-2">Student Coder</h3>
          <p>Hello, thanks for visiting my Portfolio page. I am a recent bootcamp grad from the UC DAVIS location. Since my completion I have been freelancing and building sites for those in need. Here you will find some of my past and current work.</p>
        </div>
      
        <div className="building-block-2">
          <h3 className="font-bold text-xl mb-2">Goals</h3>
          <p>My Goal is to land a postion for a full time front end developer. Ideally a postition of creativity. I also would find it as an accomplishment to find contract or Jr fullstack developer work.</p>
        </div>

        <div className="building-block-3">
          <h3 className="font-bold text-xl mb-2">Highlights</h3>
          <p>Some of the things I have been able to accomplish are: Using APIs to fetch weather index, Creating a work day planner that uses a API clock, successfully launching an app using Heroku. I've also built a few site using React.JS .</p>
        </div>
      </div>

    </section>
<div>
<img class="bg-fixed h-25" src="./images/S2.jpeg"></img>
</div>
</>
  );
}

export default Aboutme;
