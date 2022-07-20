import React, {useState} from 'react';
import Button from '../Js/Button';
import ParticlesEffect from '../Js/ParticlesEffect';
import '../Css/Home.css';

function Home() {

  const [turnLight, setTurnLight] = useState(false); // Light On/Off boolean

  // Temporary Data for services - will transfer to database when available
  const services = [
    {
      name: "UI/UX",
      image: <img src={require("../Images/UI.png")} />,
      info: "Knowledgeable in basic UI/UX design principles."
    },
    {
      name: "GIT",
      image: <img src={require("../Images/Git.png")} />,
      info: "Basic understanding of version control software."
    },
    {
      name: "Team Player",
      image: <img src={require("../Images/Team.png")} />,
      info: "Trained to work alone or in a team reliably."
    },
    {
      name: "Responsive  Design",
      image: <img src={require("../Images/Responsive.png")} />,
      info: "Developed Web applications for different devices"
    },
  ]

  interface ServicesCardProps { // Typescript for Service card
    name: string;
    image: any;
    info: string;
  }

  const ServiceCard = (props: ServicesCardProps) => {
     return(
      <div className='services-card'>
          {props.image}
          <h4 className='subcaption'>{props.name}</h4>
          <p className='content'>{props.info}</p>
      </div>
    );
  }

  // Skillsets and Languages

  // Temporary Data for skillsets - will transfer to database when available
  const skillsets = [
    {
      name:"HTML5",
      image: <img src={require("../Images/html-1.png")} />,
      info:"A markup language utilised for building web applications"
    },
    {
      name:"CSS3",
      image: <img src={require("../Images/css-1.png")} />,
      info:"A markup language for styling and formatting web elements"
    },
    {
      name:"JavaScript",
      image: <img src={require("../Images/js-1.png")} />,
      info:"A language for dynamic and functional web content"
    },
    {
      name:"ReactJS",
      image: <img src={require("../Images/react-1.png")} />,
      info:"A JavaScript framework for building scalable User Interface"
    },
    {
      name:"MaterialUI",
      image: <img src={require("../Images/materialUI-1.png")} />,
      info:"A Library for various usable UI components"
    },
    {
      name:"TypeScript",
      image: <img src={require("../Images/ts-1.png")} />,
      info:"Designed for large scale applications and adds static typing"
    },
    {
      name:"Figma",
      image: <img src={require("../Images/figma-1.png")} />,
      info:"A Design tool I utilize for wireframing and prototyping"
    },
    {
      name:"Photoshop",
      image: <img src={require("../Images/photoshop-1.png")} />,
      info:"A Design tool I utilize for graphic design creation/modification"
    },
    {
      name:"Blender",
      image: <img src={require("../Images/blender-1.png")} />,
      info:"A 3D model rendering software for scene creation and animation"
    },
  ]

  interface SkillCardProps {
    name: string;
    image: any;
    info: string
  }

  const SkillCard = (props: SkillCardProps) => {
    return(
      <div className='skill-card'>
        {props.image}

        <div className='card-info'>
          <h4 className='subcaption'> {props.name} </h4>
          <p className='content'>{props.info} </p>
        </div>
      </div>
    );
  }

  // Recent Projects

  // Temporary Data for projects - will transfer to database when available

  const projects = [
    {
      name:"Gamer's Lounge : An Ecommerce Website Powered By Augmented Reality",
      info:"An E-commerce website that lets users build their own PC rig virtually and further enhancing this experience by providing an option to view their chosen products in Augmented Reality",
      pImage: <img src={require("../Images/project-1.png")} />,
      fImage: [
        <img src={require("../Images/html-1.png")}/>,
        <img src={require("../Images/css-1.png")}/>,
        <img src={require("../Images/js-1.png")}/>,
        <img src={require("../Images/react-1.png")}/>,
      ]
    }
  ]

  interface ProjectsCardProps {
    name: string;
    info: string;
    pImage: any;
    fImage:any;
  }

  const ProjectCard = (props: ProjectsCardProps) => {
    return(
      <div className='projects-card'>
        {props.pImage}
        <div className='projects-info'>
          <h2 className='caption'>{props.name}</h2>
          <p className='content'>{props.info}</p>

          <div>
            <h4 className='subcaption'>Frontend</h4>
            {props.fImage}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className='home-container'> 
        <section className='hero-container' id='home'>

          <ParticlesEffect />

          <div className='hero-wrapper'>
            <div className="hero-caption">
              <article className='emphasize'>
                <h3 className='subcaption'>FRONTEND WEB DEVELOPER</h3>
                <h1 className='hero'><span className='highlight'>HI</span>, I'M MARK JIMWELL LAGARTA</h1>
                <p className='content'>
                  Experienced in web and software development. 
                  Educated and practices industry standards such as clean coding. 
                </p>
            
                <div>
                  <Button 
                    name="View Resume"
                    icon="fa fa-copy"
                    link="https://www.figma.com/file/kvTCuhhy3HHQBsAnz0kOIm/Untitled?node-id=0%3A1"
                  />
                </div>
              </article>
            </div>

            <div className="hero-image">
              <img 
                src={require(turnLight ? "../Images/profile-2.png" : "../Images/profile-3.png")} 
                alt="Developer Picture"
              />
          
              <Button
                name="Click Me!"
                icon="fa fa-lightbulb"
                onClick={() => setTurnLight(!turnLight)}
              />
            </div>
          </div>
        </section>

        <section className='services-container' id='services'>
          <div className='services-caption'>
            <h3 className='subcaption'>WHY ME?</h3>
            <h1 className='title'>These are the services I offer</h1>
          </div>

          <div className='services-cards'>
              {services.map(card => (
                <ServiceCard key={card.name}
                  name={card.name}
                  image={card.image}
                  info={card.info}
                />
              ))}
          </div>
        </section>

        <section className='skills-container' id='skills'>
          <div className='skills-caption'>
            <h3 className='subcaption'>WHAT I KNOW?</h3>
            <h1 className='title'>My Skillsets and Languages</h1>
          </div>

          <div className='skills-cards'>
              {skillsets.map(card => (
                <SkillCard
                  name={card.name}
                  image={card.image}
                  info={card.info}
                />
              ))}
          </div>
        </section>

        <section className='projects-container' id='projects'>
            <div className='projects-caption'>
              <h3 className='subcaption'>WHAT I CAN DO?</h3>
              <h1 className='title'>My Recent Works and Projects</h1>
            </div>
              
            <div className='projects-cards'>
                {projects.map(card => (
                  <ProjectCard key={card.name}
                    name={card.name}
                    info={card.info}
                    pImage={card.pImage}
                    fImage={card.fImage}
                  />
                ))}
            </div>
        </section>

        <br/><br/><br/>
      </div>
    </>
  )
}

export default Home