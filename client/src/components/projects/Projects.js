import React from 'react'
import Title from '../layouts/Title'
import { Movix, facebook_UI, ecommerce,newsApp,Youtube,Watch,Expense_tracker,Calculator, CrudApp } from "../../assets/index";

import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Movie App"
          des="Movix a dynamic movie website built with React, Redux, and the TMBD API. Experience seamless browsing of movie data, featuring a user-friendly interface and advanced search functionalities. Explore the world of cinema with Movix and discover your next favorite film."
          src={Movix}
          gitLink={'https://github.com/MuhammadAmeen05/Movix_APP'}
          Live={'https://dancing-pika-86ecfc.netlify.app'}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Discover our exquisite e-commerce website for clothing, crafted with a harmonious fusion of HTML, CSS, and JavaScript. Delve into our meticulously designed pages, including an alluring shop, enlightening About Us section, and effortlessly accessible Contact Us page."
          src={ecommerce}
          gitLink={'https://github.com/MuhammadAmeen05/Ecommerce_Website'}
          Live={'https://melodious-macaron-0cadbe.netlify.app/'}
        />
        <ProjectsCard
          title="FaceBook UI"
          des="Facebook UI clone, meticulously built using React, complete with a flawless login and registration process. Immerse yourself in the convenience of Dark Mode, enhancing the visual allure of your browsing experience. Leveraging the power of Context API, this project showcases exceptional state management."
          src={facebook_UI}
          gitLink={'https://github.com/MuhammadAmeen05/facebook_UI'}
          Live={'https://645604ec0554c8699a43eb72--gilded-heliotrope-26f072.netlify.app/'}
        />
        <ProjectsCard
          title="Crud App"
          des="MERN CRUD app, where all your data management needs are seamlessly addressed. Built with MongoDB, Express.js, React, and Node.js, this app enables you to effortlessly perform Create, Read, Update, and Delete operations. Explore the convenience of managing your data with ease and efficiency, making it an essential tool for your application development journey"
          src={CrudApp}
          gitLink={'https://github.com/MuhammadAmeen05/CRUD_APP'}
          Live={'https://emerald-lizard-kit.cyclic.app/'}
        />
        <ProjectsCard
          title="Youtube UI"
          des="YouTube UI clone, meticulously designed with HTML, CSS, and media queries. Immerse yourself in a seamless browsing experience as you explore the captivating layout and responsive design. With this YouTube UI clone, you can effortlessly navigate through videos, playlists, and channels. Experience the essence of YouTube's user interface in this remarkable project, now available in my portfolio."
          src={Youtube}
          gitLink={'https://github.com/MuhammadAmeen05/Youtube_UI'}
          Live={'https://meek-custard-51b0ea.netlify.app/'}
        />
        <ProjectsCard
          title="Watch Website"
          des="Watch Website, meticulously crafted with HTML, CSS, and Bootstrap. Immerse yourself in a visually stunning and user-friendly interface as you explore the latest timepieces and horological wonders. With its responsive design and seamless navigation, the Watch Website provides an exceptional browsing experience for enthusiasts and collectors alike. Uncover the artistry of watchmaking through this captivating website"
          src={Watch}
          gitLink={'https://github.com/MuhammadAmeen05/Bootstrap_website'}
          Live={'https://superb-narwhal-ae9f67.netlify.app/'}
        />
        <ProjectsCard
          title="NewsApp"
          des="NewsApp, a dynamic web application built with Bootstrap and integrated with the News API. Stay informed with the latest news from various sections such as sports, business, technology, and more. With its sleek design and seamless functionality, the NewsApp provides a user-friendly experience for accessing up-to-date information. Explore the realm of news and stay ahead of the curve with this impressive project."
          src={newsApp}
          gitLink={'https://github.com/MuhammadAmeen05/NewsApp'}
          Live={''}
        />
        {/* <ProjectsCard
          title="Calculator"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Calculator}
        />
         */}
        {/* <ProjectsCard
          title="Expense_tracker"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Expense_tracker}
        /> */}
      </div>
    </section>
  );
}

export default Projects