import React from 'react'
import './OurClient.css'
import client_1 from '../../assets/client_1.jpg'
import client_2 from '../../assets/client_2.jpg'
import client_3 from '../../assets/client_3.jpg'


const OurClient = () => {
  return (
    <>  
    <div className='OurClient'> 
        <div className='OurClient_card'>
            <h1>What Our Customers Says</h1>
            <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.</p>
            {/* <a href="/contact">Contact Us</a> */}
        </div>
        <div>
            <div className='OurClient_cards'>
                <hr />
                <div className='OurClient_cards_1'>
                    <img src={client_1} alt="Image is not found " />
                    <div>
                        <h1>Mehwish</h1>
                        <p>They exceeded my expectations in every way!</p>
                    </div>
                </div>
                
            </div>
            <div className='OurClient_cards OurClient_cards_odd' >
                <hr />
                <div className='OurClient_cards_1'>
                    <img src={client_2} alt="Image is not found " />
                    <div>
                        <h1>Mehwish</h1>
                        <p>Amazing service! Highly recommended.</p>
                    </div>
                </div>
                
            </div>
            <div className='OurClient_cards'>
                <hr />
                <div className='OurClient_cards_1'>
                    <img src={client_3} alt="Image is not found " />
                    <div>
                        <h1>Mehwish</h1>
                        <p>CTop-notch web design and fast delivery!</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>

    </>

  )
}

export default OurClient