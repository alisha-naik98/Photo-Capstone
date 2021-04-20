import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "@reach/router";
import img1 from './images/contact/3.jpg'
import img2 from './images/contact/4.jpg'
import './css/yourstyle.css';

class Booking extends React.Component {
    
     handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }

      /*bgStyle = {
        /* Have to give background image */
      //}

    render(){
        
        return(
            
            <div className="main">
              <Navbar></Navbar> 
              <div className="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
             
            <div className="fixed-title"><span>Bookings</span></div>
            <section className="flat-form" id="sec3">
                        <div className="container">
                            <h2>Book An Event</h2>
                            <div className="separator-image"><img src="images/separator2.png" alt=""/></div>
                            <div id="contact-form">
                          <div id="message"></div>
                          <form method="post" action="" name="contactform" id="contactform" onSubmit={this.handleSubmit}>
                            <input name="name" type="text" id="name"  className="inputForm2" onClick="this.select()" placeholder="Name"/>
                            <input name="email" type="text" id="email" onClick="this.select()" placeholder="E-mail"/>
                        <input name="phone" type="text" id="phone" onClick="this.select()" placeholder="Mobile No." />
                        <select id="select_services" class="" name="select_services">
                          <option value="">Select Services :</option>
                          <option value="Wedding" class="attached enabled">Wedding</option>
                          <option value="Potrait" class="attached enabled">Potrait</option>
                          <option value="Other" class="attached enabled">Other</option>
                        </select>
                            <input name="location" type="text" id="location" onClick="this.select()" placeholder="Event Location"/>
                            <input type="date" id="eventdate" placeholder="eventdate"/>
                            <input type="submit" className="send_message transition" id="submit" value="Confirm Booking" />
                          </form>
                      </div>
                        </div>
                    </section>
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
            </div>
            </div>
            <Footer></Footer>
                
        </div>
        );
    }
}

export default Booking;

