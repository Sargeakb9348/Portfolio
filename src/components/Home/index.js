import logofn from '../../assets/images/fname-logo.png'
import me from '../../assets/images/me.jpg'
import { Link } from 'react-router-dom'
import './index.scss';


const Home = () =>
{
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br /> I am &nbsp;  
                <img src={logofn} alt="developer" />
                    <br />
                    Sargeant
                </h1>
                <h2>
                    Computer Scientist / Software Engineer / AI Enthusiast  
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <img className='portrait' src={me} alt="KyleSargeant" />
            </div>
            </>
    )
}

export default Home