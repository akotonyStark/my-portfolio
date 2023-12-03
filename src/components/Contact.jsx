import React, { useState } from 'react'

function Contact() {

    const [formData, setFormData] = useState({name:'', email:'', phone:'', message:''})

    const sendEmail = (e) => {
        e.preventDefault()
        let recipient = 'alarbiampofo@gmail.com'
        let cc = 'akwaabaevolution@gmail.com'
        let sendername = formData.name
        let senderEmail = formData.email
        let phone = formData.phone
        let subject = 'Job Offer - Via Portfolio'
        let body = formData.message

        window.location.href = `mailto: ${recipient}?cc=${cc}&subject=${subject}&body=Hi Augustine, I am ${sendername} (${senderEmail}) and my phone number is ${phone} - And My Enquiry is: ${body}`;
       }

  return (
    <section className="site-section" id="section-contact">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                    <h2>Get <strong>In Touch</strong></h2>
                </div>
            </div>

            <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form" onSubmit={sendEmail}>
                    <h3 className="mb-5">Get In Touch</h3>
                    <div className="form-group">
                        <input style={{color:'white'}} type="text" className="form-control px-3 py-4" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <input style={{color:'white'}}  type="email" className="form-control px-3 py-4" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <input style={{color:'white'}}  type="phone" className="form-control px-3 py-4" placeholder="Your Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
                    </div>
                    <div className="form-group mb-5">
                        <textarea style={{color:'white'}}  className="form-control px-3 py-4"cols="30" rows="10" placeholder="Write a Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message" />
                    </div>
                </form>
            </div>
            <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                    <li>
                        <span className="text-uppercase">Email</span>
                        alarbiampofo@gmail.com
                    </li>
                    <li>
                        <span className="text-uppercase">Phone</span>
                        +1 343 549 4027
                    </li>
                    
                    <li>
                        <span className="text-uppercase">Address</span>
                        151 Walleye Pvt <br/>
                        K2J 6R2 <br/>
                        Barrhaven, Ontario
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact