import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = props => {
    return (
            <Fragment>
            <header className="bg-red-500">
               <div className="container mx-auto flex justify-between"> 
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive">Home</NavLink>
                    <NavLink to="/post"   className="inline-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 " activeClassName="text-red-100 bg-700">Post</NavLink>
                    <NavLink to="/project"  className="inline-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 " activeClassName="text-red-100 bg-700" >Project</NavLink>
                    <NavLink to="/about" activeClassName="text-red-100 bg-700" className="inline-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800"  > About Me</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://www.linkedin.com/in/ayush-shukla-238a98153/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.facebook.com/ayush.shukla.568632/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.instagram.com/ayush_5hukl4/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                   
                </div>
                </div>
            </header>
            </Fragment>             
        
    )
}

NavBar.propTypes = {

}

export default NavBar
