import React from 'react'
import Logo from '../../assets/images/footer-logo-5c101fa8.png'

    function Nav() {
        return(
            <React.Fragment>
                <div className='navbar_site_hero'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <img 
                                    src={Logo} 
                                    alt='logo image' 
                                    className='logo-image'
                                    />
                                    <span className='spn_text'>
                                        TKTI QOSHMA 
                                        TA'LIM
                                    </span>
                            </div>
                            <div className='col'>
                                <p className='spn_nav_text'>
                                    Ariza to'ldirish
                                </p>
                            </div>
                            <div className='col'>
                                <p className='spn_nav_text'>
                                    Yangiliklar
                                </p>
                            </div>
                            <div className='col'>
                                <p className='spn_nav_text'>
                                    Shaxsiy kabinet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    export default Nav;

    {/*
.navbar_site_hero{
    width: 100%;
    height: 100px;
    background-color: #26597e;
}
.logo-image{
    margin: 20px;
    width: 60px;
    height: 60px;
}.spn_text{
    color: #fff;
    font-size: 18px;
}
.spn_nav_text{
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
}
/* jjj */}