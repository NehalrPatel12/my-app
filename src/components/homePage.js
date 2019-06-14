import React, { Component,Fragment } from 'react';

class Homepage extends Component {
  render() {
    return (
        <Fragment>
        <section id="Home" className="hompage">
          <div className="row">
              <div className="col6 FltRight">
                <div className="img-border">
                  <img src={'img/mypic.jpg'} className="img-fluid" alt="My Look" width="360" height="360" />
                </div>
              </div>
              <div className="col6">
                <span className="Homspan">Hello I am'</span>
                <h1>NEHAL PATEL</h1>
                <h3>UI/UX Designer</h3>
                <p><i className="fas fa-mobile-alt"></i> <a href="tel:+16479013729">+1 647-901-3729</a></p>
                <p><i className="fas fa-at"></i> <a href="mailto:nihalpatel12@gmail.com">nihalpatel12@gmail.com</a></p>
                <p><i className="fas fa-map-marker-alt"></i> <a href="tel:+16479013729">23, Ava Court, Brampton, ON. L6T 1L5</a></p>
                <p><i className="fab fa-linkedin"></i> www.linkedin.com/in/nehal-patel-2866bb47/</p>
              </div>
          </div>
        </section>
        <section id="About" className="aboutus">
            <div className="row">
                <div className="col6 FltRight">
                    <h2>About Us</h2>
                    <p>Hello, I’m Nehal, I have good experience in web-designing. I have rich experience in web site design and customization. Also I am good at</p>
                    
                </div>
                <div className="col6">
                    <img src={'img/mypic.jpg'} alt="My Look" width="360" height="360" />
                </div>
            </div>
        </section>
        </Fragment>
    );
  }
}

export default Homepage;
