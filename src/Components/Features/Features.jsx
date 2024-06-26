    import React from 'react'
    import './Features.css'
    import feature1 from '../../Images/feature1.svg'
    import feature2 from '../../Images/Vector.svg'
    import feature3 from '../../Images/Vector-1.svg'
    import feature4 from '../../Images/Vector-2.svg'
    import { Link } from "react-router-dom";


    const Features = () => {
    return (
        <div className="feature">
            <div className="feature-title">
                <h2>For empowering students</h2>
            </div>
            <div className="feature-container">
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature1} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Explore classes</h2>
                        <p>Explore classes that suits you perfects.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature2} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Get enrolled</h2>
                        <p>Get your class admission in few taps and join into your desire classes.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature3} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Pay seamlessly</h2>
                        <p>Pay your class fee through spaceed and
keep your class live.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature4} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Learn beyond</h2>
                        <p>Learn from real time classes with user friendly experience with us.</p>
                    </div>
                </div>
            </div>
            <div className="feature-button">
                <Link to='/explore-classes'>
                    <button className='Button feature-but'>Explore Classes</button>
                </Link>
            </div>
            <div className="feature-title">
                <h2>For empowering instructors</h2>
            </div>
            <div className="feature-container">
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature1} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Explore classes</h2>
                        <p>Explore classes that suits you perfects.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature2} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Get enrolled</h2>
                        <p>Get your class admission in few taps and join into your desire classes.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature3} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Pay seamlessly</h2>
                        <p>Pay your class fee through spaceed and
keep your class live.</p>
                    </div>
                </div>
                <div className="feature-content">
                    <div className="content-img">
                        <img src={feature4} alt=""/>
                    </div>
                    <div className="content-title">
                        <h2>Learn beyond</h2>
                        <p>Learn from real time classes with user friendly experience with us.</p>
                    </div>
                </div>
            </div>
            <div className="feature-button">
                <Link to='/explore-classes'>
                    <button className='Button feature-but'>Explore Classes</button>
                </Link>
            </div>
        </div>
    )
    }

    export default Features