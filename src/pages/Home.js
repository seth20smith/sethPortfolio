import React from 'react'
import Contact from './Contact'

function Home() {
  return (
    <>
      <section className="home-container relative bg-blue-500 text-white h-screen flex">
        {/* Profile Section */}
        <div className="profile text-left flex-1 flex flex-col justify-center items-start pl-20">
          <img className="h-40 w-40 rounded-full" src="./images/S1.jpg" alt="Seth Smith" />
          <h1 className="name text-4xl mt-4">Seth Smith</h1>
          <p className="text-xl mt-4">
            Aspiring software developer passionate about building engaging and efficient applications. Always eager to learn and take on new challenges applying my creative background into the world!
          </p>
        </div>

        {/* Quote Section */}
        <div className="quote flex-1 flex justify-center items-center pr-20">
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
            <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
          </blockquote>
        </div>
      </section>

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
