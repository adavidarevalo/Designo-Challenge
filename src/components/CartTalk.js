import React from 'react'
import { Container, BackgroundElement, Element } from '../styles/components/CartTalk'

const CartTalk = () =>{
    return(
        <Element>
        <Container>
            <div>
                <h3>Let's talk about your project</h3>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <button>Get in touch</button>
        </Container>
        <BackgroundElement></BackgroundElement>
        </Element>
    )
}

export default CartTalk