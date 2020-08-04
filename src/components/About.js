import React from 'react'
import Rainbow from '../hoc/Rainbow'
const About = () => {
    return(
        <div className="container">
            <h4 className="center">This is the about page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi cumque, ex sint culpa eveniet consequatur asperiores? Similique, deleniti? Minima.</p>
        </div>
    )
}

export default Rainbow(About)
