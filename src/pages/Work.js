import React from 'react';

const Work = () => {
  return (
    <section id="Work" className="Work">
      <h2 className="text-2xl font-bold mb-4">Work</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="box1 rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/weather-dashboard-wk-6/" className="block">
            <h3 className="font-bold mb-2">Weather Dashboard</h3>
            <img src="https://user-images.githubusercontent.com/91171134/141701804-bfd78a06-023b-4b36-8540-71c59fe8d803.png" alt="Weather Dashboard" className="h-48 w-48 object-cover" />
          </a>
        </div>
        <div className="box2 rounded border border-gray-300 p-4">
          <a href="https://seth20smith.github.io/typical9to5/" className="block">
            <h3 className="font-bold mb-2">Work Day Planner</h3>
            <img src="https://courses.bootcampspot.com/users/12064/files/1042446/preview?verifier=N5fY1wXjNY0ZpBjivqmF7jtSbF3IUadFDph6Deuo" alt="Work Day Planner" className="h-48 w-48 object-cover" />
          </a>
        </div>
        <div className="box3 rounded border border-gray-300 p-4">
          <a href="https://guarded-wildwood-06188.herokuapp.com/" className="block">
            <h3 className="font-bold mb-2">Note Taker</h3>
            <img src="https://user-images.githubusercontent.com/91171134/155905797-f77aee12-44c7-49bb-9289-57356161f71b.png" alt="Note Taker" className="h-48 w-48 object-cover" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
