import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Software Engineering"
            subTitle="Mehran University of Engineering and Technology (2018 - 2022)"
            result="3.61/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Intermidate "
            subTitle="Muslim  College (2016 - 2018)"
            result="70%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mehran Grammer School (2014 - 2016)"
            result="80%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Development"
            subTitle="Contour Software  - (02/02/2023 - 25/05/2023)"
            result="karachi"
            des="Pakistan's leading IT companies are ready to train you in the most in-demand skills to make your dream job a reality, completely free."
          />
          <ResumeCard
            title="Front-end Intern"
            subTitle="Interns Pakistan - (01/06/2022 - 01/07/2022)"
            result="Remote"
            des="An Immersive Internship Program that prepares students for the world's most in-demand career."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education