import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className='my-5'>

        <div data-aos="fade-down"
          data-aos-duration="3000" className="">
          <h1 style={{ color: "#BED62F" }} className='text-5xl md:text-7xl text-center'>Contact Us</h1>
        </div>

        <div>
          <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <p className='my-2'>House-07, Road-06, Sector-12, <br /> Uttara, Dhaka-1230, Bangladesh.</p>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z"></path>
                    </svg>
                    <span>123456789</span>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>contact@business.com</span>
                  </p>
                </div>
              </div>
              <div className=''>
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.0474865621845!2d90.37422302628654!3d23.8721103093924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40ed3c3c18b%3A0x9521b4915bd8ee05!2sUttara%20Sector-12%20Society!5e0!3m2!1sen!2sbd!4v1700551842504!5m2!1sen!2sbd"
                  width="400"
                  height="300"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Our Location on Google Maps'
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
