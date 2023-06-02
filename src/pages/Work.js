import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Work = () => {

// Add Sidebar later with sections for Front End, Components, Back End, Group Work, Full Sites

  return (
    <section className="Work">

      <div className="container my-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">

        {/* block start */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/weather-dashboard-wk-6/" className="block">
            <h3 className="font-bold mb-2 text-center">Weather Dashboard</h3>
            <div className="flex flex-col items-center">
              <img src="https://user-images.githubusercontent.com/91171134/141701804-bfd78a06-023b-4b36-8540-71c59fe8d803.png" alt="Weather Dashboard" className="h-90 w-90 object-contain" />
              <a className="mt-2 rounded-full p-2 no-underline hover:bg-blue-500" href="https://github.com/seth20smith/weather-dashboard"> Github Links:
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 margin-2 text-black hover:text-white-500" />
              </a>
            </div>
          </a>
        </div>

        {/* Box 2 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/typical9to5/" className="block">
            <h3 className="font-bold mb-2 text-center">Work Day Planner</h3>
            <div className="flex flex-col items-center"></div>
            <img src="https://courses.bootcampspot.com/users/12064/files/1042446/preview?verifier=N5fY1wXjNY0ZpBjivqmF7jtSbF3IUadFDph6Deuo" alt="Work Day Planner" className="h-120 w-120 my-4 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500" href="https://github.com/seth20smith/typical9to5">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 3 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/note_taker/" className="block">
            <h3 className="font-bold mb-2 text-center">Note Taker</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/NoteTaker2.png" alt="Note Taker" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/note_taker">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 4 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/PasswordGen/" className="block">
            <h3 className="font-bold mb-2 text-center">Password Generator</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/Password Gen.png" alt="Password Generator" className="h-70 w-70 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/PasswordGen">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 5 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/week4codequiz/" className="block">
            <h3 className="font-bold mb-2 text-center">Code Quiz</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/codeQuizPic.png" alt="Code Quiz" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/week4codequiz">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 6 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://drive.google.com/file/d/10zd_e4D_UUftlEi2TxCYnLJwwoorSSAv/view" className="block">
            <h3 className="font-bold mb-2 text-center">Employee Programming</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/Profile Gen.png" alt="Employee Database" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/Programming-Challenge-10">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 7 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/day-trip-planner/" className="block">
            <h3 className="font-bold mb-2 text-center">Day Trip Planner</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/Vacation Planner.png" alt="Day Trip Planner" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/day-trip-planner">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 8 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="./images/ExpressPic.png" className="block">
            <h3 className="font-bold mb-2 text-center">Express API Database</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/ExpressPic.png" alt="Blood Tied Kennel" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/eCom_backEnd_13">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>

        {/* Box 9 */}
        <div className="relative rounded border border-gray-300 p-4">
          <a href="https://app.screencastify.com/manage/videos/VnYwHG4lAq7cr2g9Lnvp" className="block">
            <h3 className="font-bold mb-2 text-center">Backend Employee Database</h3>
            <div className="flex flex-col items-center"></div>
            <img src="./images/Employee Database.png" alt="Blood Tied Kennel" className="h-90 w-90 object-contain" />
          </a>
          <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 no-underline hover:bg-blue-500 " href="https://github.com/seth20smith/Employee_database_12">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
