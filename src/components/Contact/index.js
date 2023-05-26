import './index.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Contact = () =>
{
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_dndc5gd', 'template_lv3wi0z', form.current, 'g9VzNMIV347QElcXT')
            .then((result) =>
            {
                alert(result.text);
                window.location.reload(false)
            }, (error) =>
            {
                alert(error.text);
            })
            .then(
            )
        
    }   
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zoneContact'>
                    <h1>Contact Me</h1>
                    <p>
                        I am actively searching for a new job and would love to get in touch with you to talk about
                        the position I applied for or a position you think would suit me better! If you have any questions 
                        or requests please do not hesitate to contact me using the form below!
                    </p>
                    <form className='contact-form' ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type ="text" name="user_name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type ="email" name="user_email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className='info-map'>
                    Saint Paul Minnesota,
                    <br />
                    United States<br />

                </div>
                <div className='map-wrap'>
                     
                  
                    <MapContainer center={[44.954445, -93.091301]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.954445, -93.091301]}>
                           
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <span class="loader"></span>
        </>
    )
}
export default Contact