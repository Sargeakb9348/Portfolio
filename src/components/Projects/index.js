import './index.scss'
import covid from '../../assets/images/Covid19.png'
import psych from '../../assets/images/psych.png'
import AiCheck from '../../assets/images/aicheck.png'
import cshell from '../../assets/images/cshell.jpg'
import Package from '../../assets/images/package.png'
import koth from '../../assets/images/KOTH.jpg'
import mount from '../../assets/images/mount.jpeg'
import stock from '../../assets/images/stock.png'
import vision from '../../assets/images/vision.png'
import { Link } from 'react-router-dom'
const Projects = () =>
{
    return (
        <>
            <div className='projects-page'>
                
                <div className='research-zone'>
                        <h1 className='Header'>AI Research</h1>
                        <div class='card-container'>

                            <div class="card">
                                <img className='researchimg' src={psych} alt="psych" />
                            <p>I completed this research during my participation in the AIMS [Artificial Intelligence, Machine Learning & Security] research group at the University of Wisconsin - Eau Claire. In this club a student is able to select a research topic that they are interested in. I chose to discover how machine learning and AI can be applied to the field of psychology. I reviewed a variety of machine learning models that were applied to the realm of psychology. After reviewing I created a survey paper that included ways of improving the models and where machine learning could be applied in the future. My paper was published in the Journal of Computer and Communications.</p>
                                <div className='button-container'>
                                <Link to="https://www.scirp.org/journal/paperinforcitation.aspx?paperid=117591" className="flat-button">View</Link>
                                </div>
                            </div>

                            <div class="card">
                                <img className='researchimg' src={covid} alt="Covid19" />
                            <p>I completed this research alongside Dr. Rahul Gomes and other students in the Deep Learning lecture at the University of
                                Wisconsin - Eau Claire. We were all tasked to review how AI played a role in the development of the Covid-19
                                vaccine. We were fortunate enough to get our paper published by MDPI in their diagnostics journal. </p>
                            <div className='button-container'>
                                <Link to="https://www.mdpi.com/2075-4418/12/8/1853" className="flat-button">View</Link>
                            </div>
                                
                            </div>
                            
                        </div>
                        
                </div>


                <div className='school-zone'>
                    <h1 className='Header'>School Projects</h1>
                        <div class='card-container'>

                            <div class="card">
                                <img src={AiCheck} alt="plagiarism" />
                            <p>While taking Software Engineering II at University, I and 4 other students were tasked to create a software solution that
                                would use machine learning to check a student's submitted assignment for plagiarism. My role on the team was to create the
                                machine learning model to test for similarities between our testing documents and the student's submitted document. I did this
                                by utilizing a variety of machine learning python libraries. In the end I used a KNN algorithm to check for similarities. 
                            </p>
                             <div className='button-container'>
                                <Link to="https://github.com/lappe044/TriScan" className="flat-button">View</Link>
                                </div>
                            </div>

                            <div class="card">
                                <img src={cshell} alt="cshell" />
                            <p>In my Operating Systems class I and two other students created our own shell using C++. This shell was supposed to simulate a 
                                variety of linux commands that could be used to move and manipulate a text document. In this class we also completed a simulation of
                                how operating systems schedule cpu processes using different algorithms.
                            </p>
                             <div className='button-container'>
                                <Link to="https://www.mdpi.com/2075-4418/12/8/1853" className="flat-button">View</Link>
                                </div>
                            </div>
                            <div class="card">
                                    <img src={Package} alt="package" />
                            <p>This project was completed durring my time taking our captsone course "Networks". In this project we were tasked to simulate the transferring of
                                packages between a sender and a reciever. This simulation implemented 3 protocols: GBN, stop and wait, and selective repeat. I am very proud of
                                this project as we scored one of the highest scores in the class!
                            </p>
                             <div className='button-container'>
                            
                                <Link to="https://github.com/teeweizhong10/networksLab" className="flat-button">View</Link>
                                </div>
                            </div>
                        
                            
                        </div>
                </div>    
                <div className='personal-zone'>
                    <h1 className='Header'>Personal Projects</h1>
                      <div class='card-container'>

                            <div class="card">
                                <img src={stock} alt="stockhouse" />
                            <p> <b>StockHouse: </b>My roommates and I struggled to keep track of our groceries in our fridge and freezer so one roommate and I decided to create
                                an inventory manager to keep track of all our groceries. The project was my introduction to C# and the .NET framework. The project
                                utilized a common MVC design and an SQL database.
                                
                            </p>
                             <div className='button-container'>

                                <Link to="https://github.com/ChristopherZB/StockHouse" className="flat-button">View</Link>
                                </div>
                            </div>

                            <div class="card">
                                <img  src={mount} alt="bettermounts" />
                            <p><b>BetterMounts:</b> I wanted to explore the creation of mods for Minecraft so my friend and I decided to work on a mod that added
                            more rideable mounts in the game. We created textures and models for ridable Racoons and Wolves. These mounts also had customized animations
                            to add more variability to the mounts. This project was completed using Java.</p>
                             <div className='button-container'>
                            
                                <Link to="https://github.com/Sargeakb9348/Better-Mounts" className="flat-button">View</Link>
                                </div>
                             </div>
                        
                            <div class="card">
                                <img  src={vision} alt="pythonvision" />
                            <p><b>PythonVision:</b> The summer after graduating I wanted to explore more of the world of AI and computer vision. I implemented an AI 
                                python package that would identify your hand as well as the main joints of your fingers. Using the location of the points I was able to
                                move my computers cursor using the distance between my index finger tip and the tip of my thumb. I also implemented a right and left click
                                functionality by pinching my thumb and index finger together.
                            </p>
                             <div className='button-container'>

                                <Link to="https://github.com/Sargeakb9348/PythonVision" className="flat-button">View</Link>
                                </div>
                            </div>

                            <div class="card">
                                <img  src={koth} alt="KOTH" />
                            <p><b>King of the Hill:</b> One summer my friends and I started a Minecraft survival world and wanted to have a pvp aspect.
                                We wanted to make it so only certain areas of the world you could fight in. I started development on a mod that would only allow
                            pvp in a defined area in the world and would keep track of teams and how many points they would collect. </p>
                             <div className='button-container'>
                            
                                <Link to="https://github.com/Sargeakb9348/MinecraftKOTH" className="flat-button">View</Link>
                                </div>
                            </div>                        
                            
                        </div>
                </div>
            
            </div>
            <span class="loader"></span>
        </>
    )
}

export default Projects
