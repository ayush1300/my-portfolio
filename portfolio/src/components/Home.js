import React from 'react'
import PropTypes from 'prop-types'
import image from "../space.jpg"
const Home = props => {
    return (
        <div>
            <img src={image} alt="Space" className="absolute object-cover w-full h-full"></img>
            <section className="relative flex justify-center min-h-screen pt-12 lg-pt:64 px-8" >
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello, I am Ayush</h1>
            </section> 
        </div>
    )
}

Home.propTypes = {

}

export default Home
