import React from 'react';

const Resume = () => {
  return (
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
  );
}

export default Resume;
