import React from 'react';

const Resume = () => {
  return (

    <>
      <section className="GitHub bg-cover bg-center py-8 px-4 relative">
        <div className="overlay  bg-opacity-50 p-4 rounded">
          <div id="GitHub" className="mb-4">

            <img className="github-image h-20 w-20 mb-2" src="./images/github-mark.png" alt="Github Logo" />
            <a href="https://github.com/seth20smith" className="text-white underline" target="_blank" rel="noopener noreferrer">Seth Smith GitHub</a>
          </div>
          <div id="LinkedIn">

            <img className="linkedin-image h-12 w-22 mb-2" src="./images/LI-Logo.png" alt="LinkedIn Logo" />
            <a href="https://www.linkedin.com/in/seth20smith" className="text-white underline" target="_blank" rel="noopener noreferrer">Seth Smith LinkedIn Profile</a>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg p-5 bg-purple-800">
          <h1 className="text-lg font-bold leading-7 pt-6 text-white">Learn, share and get help from our community</h1>
          <p className="pt-4 text-xs leading-5 pr-12 text-white"></p>
          <div className="pt-7 flex items-center justify-between">
            <button className="text-indigo-700 rounded bg-gray-50 focus:outline-none hover:opacity-90 p-2 text-xs font-medium leading-3">Seth Smith GitHub </button>
          </div>
        </div>
      </div>




    </>
  );
}

export default Resume;
