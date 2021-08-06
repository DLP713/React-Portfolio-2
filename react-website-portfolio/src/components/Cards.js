import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__conatiner">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="./public/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"/>
                        <CardItem 
                            src="./public/images/img-2.jpg"
                            text="ETravel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="/projects"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="./public/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"/>
                        <CardItem 
                            src="./public/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"/>
                        <CardItem 
                            src="./public/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
