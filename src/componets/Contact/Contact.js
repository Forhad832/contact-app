import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_gqvb8wj','template_usftwjc', form.current,'zFj-FoOUq98sREFY-')
        .then((result)=>{
            return result = '',
                console.log(result.text)
            
        },(error) =>{
            console.log(error.text)
        })

    }
  return (
    <section>
      <div className='container'>
           <div className='flex'>
             <div className='col-6'>
                <h2>contact Us</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
             </div>
             <div className='col-6'>
             <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name :</label>
                    <input type="text"  name='user_name' />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email"  name='user_email' />
                </div>
                <div>
                    <label>Message :</label>
                    <textarea type="text"  name='message' ></textarea>
                </div>
                <div>
               
                    <input type="submit" value='send'/>
                </div>
            </form>
             </div>
           </div>
      </div>
    </section>
  )
}

export default Contact
