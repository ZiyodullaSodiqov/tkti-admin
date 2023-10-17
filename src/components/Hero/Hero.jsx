import React from 'react'
import "./Hero.css"
import Logo from '../../assets/images/footer-logo-5c101fa8.png'

 export default function Hero() {
        return(
            <>
            <div className="changeX1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
             

             <img src={Logo} alt='logo image'  className='logo-images'/>

                <p className='changeX'>TKTI QOSHMA <br />TA'LIM</p>

                <div className="changeX4">
                <a className='changeX2' href="https://www.facebook.com/tktiuzrasmiy"><i class="bi bi-facebook"></i></a>
                <a className='changeX2' href="http://youtube.com/@tktiuzrasmiy"><i class="bi bi-youtube"></i></a>
                <a className='changeX2' href="https://t.me/tktiuz"><i class="bi bi-telegram"></i></a>
                <a className='changeX2' href="https://www.instagram.com/tktiuz"><i class="bi bi-instagram"></i></a>
                <a className='changeX2' href="https://vk.com/tktiuz"><i class="bi bi-wikipedia"></i>    </a>
                            </div>

                         <div className="changeX5">
                            <h5><i class="bi bi-telephone"></i>  + 998 97 997 90 93</h5>
                            <br />
                            <h5><i class="bi bi-envelope-fill"></i>    info@tkti.uz</h5>
                            </div>
<div className='chiziq'></div>
                            <div className="changeX6">
                                <h4>
                                Navoiy ko’chasi, 32-uy, Toshkent, O'zbekiston, 100011
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
        )       
    }