import React from 'react'
import CertificateGallery from '../../components/CertificateGallery/CertificateGallery'

const Certificate = () => {
  return (
    <div className='my-10 max-w-7xl mx-auto'>
      <div className="">
        <h1 data-aos="fade-down"
          data-aos-duration="3000" style={{ color: "#BED62F" }} className='text-3xl md:text-7xl mx-auto mb-5 text-center'>Our Achievements</h1>
      </div>
      <div className="">
        <CertificateGallery />
      </div>

    </div>
  )
}

export default Certificate