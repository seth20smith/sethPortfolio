import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';


import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'About Me', href: '/Aboutme' },
  { name: 'Work', href: '/Work' },
  { name: 'Resume', href: '/Resume' },
  { name: 'Contact', href: '/Contact' },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Header(props) {
  return (
    <>
      <Disclosure as="nav" className="bg-purple-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-14 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">


                    {/* Logo Images */}
                    {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src=""
                    alt="Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src=""
                    alt="Logo"
                  /> */}

                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">

                      {/* Home link */}
                      <NavLink to="/Home">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="./images/S1.jpg"
                          alt="Home"
                        />
                      </NavLink>


                      {/* Nav Items Start Here */}

                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return ('rounded-md px-3 py-2 text-sm font-medium no-underline ' +
                              (isActive
                                ? ' bg-gray-900 text-white '
                                : ' text-gray-300 hover:bg-gray-700 hover:text-white')
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {[
                  { name: 'Home', href: '/Home' },
                  ...navigation
                ].map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return ('block rounded-md px-3 py-2 text-base font-medium no-underline ' +
                        (isActive
                          ? ' bg-gray-900 text-white '
                          : ' text-gray-300 hover:bg-gray-700 hover:text-white')
                      );
                    }} >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className='bg-gray-700'>
        <div className=' max-auto max-w-8xl min-h-screen p-2 text-white '>{props.children}</div>
      </div>


      <footer className="bg-gradient-to-r from-purple-900 via-gray-500 to-gray-700 mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 text-white flex justify-between items-center" >
        <div>
          <section className="Contact">
            <h4>Contact</h4>
          </section>
          <p>
            Seth Smith <br />
            Oakland, Ca <br />
            Phone: (510.282.7693)<br />
            Email: <NavLink href="mailto:seth20smith@gmail.com">seth20smith@gmail.com</NavLink>
          </p>
        </div>
        <div className="flex justify-end space-x-2">
          {/* icons */}
          <FontAwesomeIcon icon={faHtml5} className="h-10 w-10 text-red-600" />
          <FontAwesomeIcon icon={faCss3Alt} className="h-10 w-10 text-blue-500" />
          <FontAwesomeIcon icon={faJs} className="h-10 w-10 text-yellow-500" />
          <FontAwesomeIcon icon={faGithub} className="h-10 w-10 text-black" />
          <FontAwesomeIcon icon={faReact} className="h-10 w-10 text-blue-400" />
          <FontAwesomeIcon icon={faNodeJs} className="h-10 w-10 text-green-500" />
          <FontAwesomeIcon icon={faBootstrap} className="h-10 w-10 text-purple-600" />
          <FontAwesomeIcon icon={faPython} className="h-10 w-10 text-blue-600" />
          <img className="h-12 w-14" src="./images/tailwind-css.png" alt="Tailwind" />
          <img className="h-10 w-24" src="./images/MongoDB.png" alt="MongoDB" />
          <img className="h-10 w-18" src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySql" />
          <img className="h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="JSON" />
          <img className="h-12 w-12" src="./images/API.png" alt="API" />
        </div>
      </footer>

    </>
  );
}