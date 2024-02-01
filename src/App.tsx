import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './components/Navbar';
import healthImageBig1 from './assets/header-illustration 1.png';
import healthImageBig2 from './assets/header-illustration 2.png';
import searchImg from './assets/search-image.png';
import kitImg from './assets/firstkit-image.png';
import tabletImg from './assets/medtablet-image.png';
import pillsImg from './assets/pills-image.png';
import profileImg from './assets/profile-image.png';
import statsImg from './assets/stats-image.png';
import Infocard from './components/Infocard';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-container-one">
                <div className="main-container-one-text">
                    <div className="main-container-one-text-inner">
                        <h2>Virtual healthcare for you</h2>
                        <p>
                            Our service provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone
                        </p>
                        <button className="button-primary-active">
                            Consult today
                        </button>
                    </div>
                </div>
                <img src={healthImageBig1} />
            </div>
            <div className="main-container-two">
                <div className="main-container-two-header">
                    <h2>Our services</h2>
                    <hr />
                    <p className="text-lightgray-main">
                        We provide to you the best choiches for you. Adjust it
                        to your health needs and make sure your undergo
                        treatment with our highly qualified doctors you can
                        consult with us which type of service is suitable for
                        your health
                    </p>
                </div>
                <div className="infocards-container">
                    <Infocard
                        img={searchImg}
                        title="Search doctor"
                        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                    />
                    <Infocard
                        img={pillsImg}
                        title="Online pharmacy"
                        description="Buy  your medicines with our mobile application with a simple delivery system"
                    />
                    <Infocard
                        img={profileImg}
                        title="Consultation"
                        description="Free consultation with our trusted doctors and get the best recomendations"
                    />
                    <Infocard
                        img={statsImg}
                        title="Details info"
                        description="Free consultation with our trusted doctors and get the best recomendations"
                    />
                    <Infocard
                        img={kitImg}
                        title="Emergency care"
                        description="You can get 24/7 urgent care for yourself or your children and your lovely family"
                    />
                    <Infocard
                        img={tabletImg}
                        title="Tracking"
                        description="Track and save your medical history and health data "
                    />
                </div>
                <button className="button-primary-outline">Learn more</button>
            </div>
            <div className="main-container-three">
                <div className="main-container-one-text">
                    <div className="main-container-one-text-inner">
                        <h2>Leading healthcare providers</h2>
                        <hr />
                        <p>
                            We provides progressive, and affordable healthcare,
                            accessible on mobile and online for everyone. To us,
                            it’s not just work. We take pride in the solutions
                            we deliver
                        </p>
                        <button className="button-primary-outline">
                            Learn more
                        </button>
                    </div>
                </div>
                <img src={healthImageBig2} />
            </div>
        </>
    );
};

export default App;
