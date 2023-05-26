import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faAws, faCss3, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'



const About = () =>
{
    return (
        <>
        <div className='container about-page'>
            <div className='text-zoneAbout'>
                <h1>
                    About Me
                </h1>
                
                <p>I'm Kyle, a software engineer with a solid background in computer science.
                    I graduated from the University of Wisconsin - Eau Claire, majoring in computer science and minoring
                    in psychology. My passion lies in building robust and intuitive software solutions as well as exploring
                    the realm of AI. I am currently pursuing a junior level software engineering position.
                    I am eager to learn and grow in the challenging atmosphere of a company that works with the latest technologies.
                </p>

                <p>Outside of my professional life I have a variety of hobbies. I really enjoy music and listen to a variety of songs throught the day.
                    I also love collecting vinyl records and listen to them frequently. My passion for technology started when I build my first computer
                    when I was 15 and spend a lot of my free time playing video games. I also really enjoy spending time outside. Rain or shine, I always
                    find something to do outside! Lastly I am obessed with dogs, I never grew up with one and cannot wait to have a canine companion of my
                    own!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#fbff00"/>
                        
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="#d1351a"/>
                        
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color="#F0652"/>
                    </div>
                        <div className='face6'>
                        <FontAwesomeIcon icon={faAws} color="#ffa200"/>
                        
                    </div>
                </div>
            </div>
            </div>
            <span class="loader"></span>
        </>
    )
}

export default About
