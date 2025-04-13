import React from 'react';
import './style/Projects.css'
import banner from '../assets/image.png'

const Projects = () =>{
    return (
        <>
        <div className='project_card'>
            
            <div className='project_banner'>
                <div>
                    <h1>Empowering Global Startup Growth </h1>
                    <h1>FUTURE - DRIVEN SOFTWARE DEVELOPMENT </h1>
                </div>
                <div>
                    <img src={banner} alt="image is not found" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;