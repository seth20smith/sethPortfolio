import React from 'react'
import '../index.css'

function Home() {
  return (
    <>
    
      <section className="rounded-lg mb-40 bg-gradient-to-r from-purple-900 via-gray-500 to-gray-700 shadow-xl shadow-blue-300/20">
  <div className="px-6 py-12 text-center md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
          <img className="h-24 w-24 md:h-40 md:w-40 rounded-full my-2 mx-auto" src="./images/S1.jpg" alt="Seth Smith" />
          <h1 className="mt-0 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Seth <br /><span className="text-blue-300">Smith</span>
          </h1>
          <p className=" text-xl text-center mx-auto max-w-md text-black text-transform: uppercase">
            Aspiring software developer passionate about building engaging and efficient applications. Always eager to learn and take on new challenges applying my creative background into the world!
          </p>
        </div>

        {/* Container for the image and quote */}
        <div className="relative mb-10 lg:mb-0">
          <img src="./images/istockphoto3.jpeg" className="w-full blur-sm rounded-lg shadow-2xl shadow-blue-400/20" alt="Office Space" />

          {/* Quote Section */}
          <div className=" text-gray-500 absolute top-0 left-0  opacity-50">
            <blockquote className="text-xl italic font-semibold  dark:text-white">
              <svg aria-hidden="true" className="w-10 h-10 text-center text-black " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg>
              <p>"The function of good software is to make the complex appear to be simple." - Grady Booch</p>
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>





<div className="justify-center my-8 select-none flex">
  <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Skills</button>
  <button className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-600 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">About Me</button>
  <button className="py-2 px-4 shadow-md no-underline rounded-full bg-red-600 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">Resume</button>	
</div>



      <div>
        {/* Skills Section */}
        <section className="skills">
          <h2>Skills</h2>
          {/* You can list your skills here */}
          {/* Consider using a library like FontAwesome for icons */}
        </section>

        {/* Portfolio Section */}
        <section className="portfolio">
          <h2>Portfolio</h2>
          {/* Showcase your projects here */}
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What People Say</h2>
          {/* Display your testimonials here */}
        </section>

        {/* Call to Action Section */}
        <section className="cta">
          <h2>Let's Connect!</h2>
          <p>Interested in working with me? Reach out!</p>
          <button>Contact Me</button> {/* Link this button to your contact page or open up a contact form */}
        </section>
      </div>
    </>
  )
}

export default Home;
