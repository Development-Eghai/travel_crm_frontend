import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='footer-main section-padding-top'>
        <div className='container'>

          <div className='footer-top-main position-relative'>
            <div className='d-flex my-auto'>
              <p>Speak to our expert at</p>
              <a className='expert-contact' href='tel:+9345841519'>984-584-1519</a>
            </div>
            <div className='footer-social-icon mt-lg-0 mt-3'>
              <p>Follow Us :</p>
              <ul className='social-hover'>
                <li>
                  <a href="#"><i className="fa-brands fa-facebook-f icon"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-instagram icon"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-x-twitter icon"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-linkedin-in icon"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-bottom-main'>
            <div className='row'>
              <div className="col-lg-4 col-md-4 col-6">
                <div className='footer-column-one'>
                  <h5 className='footer-column-heading'>Contact</h5>
                  <p className='mb-2'>328 Queensberry Street, North Melbourne VIC3051,
                    Australia.</p>
                  <a href='emailto:sundar@gmail.com'>sundar@gmail.com</a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className='footer-column-two footer-anchor-main d-flex flex-column'>
                  <h5 className='footer-column-heading'>Company</h5>
                  <a href='emailto:sundar@gmail.com'>About Us</a>
                  <a href='emailto:sundar@gmail.com'>Tourz Reviews</a>
                  <a href='emailto:sundar@gmail.com'>Contact Us</a>
                  <a href='emailto:sundar@gmail.com'>Cookie Policy</a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className='footer-column-two footer-anchor-main d-flex flex-column'>
                  <h5 className='footer-column-heading'>Support</h5>
                  <a href='emailto:sundar@gmail.com'>Get in Touch</a>
                  <a href='emailto:sundar@gmail.com'>Help center</a>
                  <a href='emailto:sundar@gmail.com'>Live chat</a>
                  <a href='emailto:sundar@gmail.com'>How it works</a>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <div className='footer-column-two footer-anchor-main d-flex flex-column'>
                  <h5 className='footer-column-heading'>Newsletter</h5>
                  <p className='mb-2'>Subscribe to the free newsletter and stay
                    up to date</p>
                  <div className='subscribe-main mt-2'>
                    <input type="text" placeholder='Email Address' />
                    <button className='subscribe-btn'>Subscribe</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='pb-5'>
            <p className='text-center'>© Copyright Viatours 2024</p>
          </div>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer
