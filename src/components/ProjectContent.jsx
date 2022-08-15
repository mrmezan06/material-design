import React from 'react'

import img1 from '../assets/project-1.png'
import img2 from '../assets/project-2.png'
import img3 from '../assets/project-3.png'
import img4 from '../assets/project-4.png'
import img5 from '../assets/project-5.png'
import img6 from '../assets/project-6.png'
import img7 from '../assets/project-7.png'
import img8 from '../assets/project-8.png'
import img9 from '../assets/project-9.png'
import img10 from '../assets/project-10.png'
import img11 from '../assets/project-11.png'
import ProjectCard from './ProjectCard'

const ProjectContent = () => {
  return (
    <div className='flex'>
      <div className="center flex-wrap">
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Apple Store"}
          url={img1}
          live= {"https://akash07105.netlify.app/apple%20ecommerce/"}
        />
      <ProjectCard
          description={"React JS"}
          title={"Dashboard"}
          url={img2}
          live= {"https://akash-dashboard.netlify.app/"}
        />
      <ProjectCard
          description={"React JS & Solidity"}
          title={"Crypto Buy & Sell"}
          url={img3}
          live= {"https://krypto-ether.netlify.app/"}
        />
      <ProjectCard
          description={"HTML CSS"}
          title={"Math Game"}
          url={img4}
          live= {"https://akash07105.netlify.app/math%20website/"}
        />
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Movie Review"}
          url={img5}
          live= {"https://akash07105.netlify.app/moviesui/"}
        />
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Back Drop Landing Page"}
          url={img6}
          live= {"https://akash07105.netlify.app/glassmorphism/"}
        />
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Project Showcase"}
          url={img7}
          live= {"https://akash07105.netlify.app/"}
        />
      <ProjectCard
          description={"HTML CSS"}
          title={"Team Card"}
          url={img8}
          live= {"https://akash07105.netlify.app/team-section/"}
        />
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Analog Clock"}
          url={img9}
          live= {"https://akash07105.netlify.app/analog-digital-clock/"}
        />
      <ProjectCard
          description={"HTML CSS JS"}
          title={"Portfolio"}
          url={img10}
          live= {"https://portfolio-mezan.ink/"}
        />
      <ProjectCard
          description={"MongoDB Express React JS & Node JS"}
          title={"Doctor App"}
          url={img11}
          live= {"https://doctor-call-healthy.herokuapp.com/"}
        />
      </div>
    </div>
  )
}

export default ProjectContent