import React from 'react'
import { Container } from '../styles/components/FormContainer'

const FormContainer = () => {
    return(
        <Container>
            <div>
                <h2>Contact us</h2>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <form>
                <input type='name' placeholder='Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='phone' placeholder='Phone'/>
                <textarea placeholder='Your Message'/>
                <input type='submit' className='FormButton'/>
            </form>
        </Container>
    )
}

export default FormContainer