import React from 'react';

const SocialButton = ({ href, logoSrc, altText, buttonText, logoSize }) => (
  <div className="md:w-96 rounded shadow-lg p-5 bg-purple-800 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    <div className="flex flex-col items-center justify-center mb-4">
      <img className={logoSize} src={logoSrc} alt={altText} />
      <a href={href} className="text-indigo-700 rounded bg-gray-50 focus:outline-none hover:opacity-90 p-2 text-sm font-medium leading-3 mt-2">{buttonText}</a>
    </div>
  </div>
);

const Resume = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4 flex-wrap">
      <SocialButton 
        href="https://github.com/seth20smith" 
        logoSrc="./images/github-mark.png" 
        altText="Github Logo" 
        buttonText="Source Code" 
        logoSize="h-20 w-20 mb-2" 
      />
      <SocialButton 
        href="https://www.linkedin.com/in/seth20smith" 
        logoSrc="./images/LI-Logo.png" 
        altText="LinkedIn Logo" 
        buttonText="Seth Smith LinkedIn Profile" 
        logoSize="h-12 w-22 mb-2"
      />
      <SocialButton 
        href="https://drive.google.com/file/d/1CPehENhScJSVeklNo_RfyIgz3d2HcVQ3/view?usp=sharing" 
        logoSrc="./images/resumePic.png" 
        altText="Resume Logo" 
        buttonText="Seth Smith Resume"
        logoSize="h-30 w-30 mb-2"
      />
    </div>
  );
}

export default Resume;