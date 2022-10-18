import React, {useState} from "react";
import hotel from "../public/hotel.jpeg";
import hospital from "../public/hospital.jpeg";
import customer from "../public/customers.png";

function TestimonialsSection() {
    return (
        <>
            <div className={'p-4 pt-8'} id="AboutSection">
                <div className={'grid grid-cols-2 gap-4 p-2'}>
                    <div className={'flex col-span-1 px-12 h-full justify-center items-center'}>
                        <div>
                            <div className={'inline-flex justify-center items-center'}>
                                <div className={"bg-gold h-0.5 w-8 mx-2"}></div>
                                <div className={'text-2xl font-bold text-gold'}>Proudly Serving</div>
                            </div>
                            <div className={'ml-12 text-sm text-brown'}>We provide services and products to</div>
                        </div>
                    </div>
                    <div className={'p-6 gap-6 grid grid-cols-3 grid-rows-3 md:grid-cols-6 md:grid-rows-2 lg:grid-cols-9 lg:grid-rows-1 w-full h-full col-span-1'}>
                        <div className={'card-container col-span-3 w-full md:h-[150px] lg:h-[200px]'}>
                            <div className="card relative w-full h-full">
                                <a href="#">
                                    <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                                    <div style={{
                                        backgroundImage: `url(${hotel.src})`,
                                        width: '100%',
                                        height: '100%',
                                        backgroundPosition: 'center',
                                        backgroundSize:'cover',
                                        position: 'relative',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                         className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                        <div className={'p-8'}>
                                            <div className="h-2 w-20 bg-gold"/>
                                            <div className={'py-4 text-2xl font-bold text-brown'}>Hotels</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={'card-container col-span-3 w-full md:h-[150px] lg:h-[200px]'}>
                            <div className="card relative w-full h-full">
                                <a href="#">
                                    <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                                    <div style={{
                                        backgroundImage: `url(${hospital.src})`,
                                        width: '100%',
                                        height: '100%',
                                        backgroundPosition: 'center',
                                        backgroundSize:'cover',
                                        position: 'relative',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                         className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                        <div className={'p-8'}>
                                            <div className="h-2 w-20 bg-gold"/>
                                            <div className={'py-4 text-2xl font-bold text-brown'}>Hospitals</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={'card-container col-span-3 w-full md:h-[150px] lg:h-[200px]'}>
                            <div className="card relative w-full h-full">
                                <a href="#">
                                    <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                                    <div style={{
                                        backgroundImage: `url(${customer.src})`,
                                        width: '100%',
                                        height: '100%',
                                        backgroundPosition: 'center',
                                        backgroundSize:'cover',
                                        position: 'relative',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                         className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                        <div className={'p-8'}>
                                            <div className="h-2 w-20 bg-gold"/>
                                            <div className={'py-4 text-2xl overflow-clip font-bold text-brown'}>Private customers</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`

              .card-container .card {
                font-weight: bold;
                position: relative;
                width: 100%;
              }
              .card-container .card a {
                background: white;
                text-decoration: none;
                
              }

              .card-container .card a:hover {
                border-color: #5bc0eb;
              }
              
              .card--display{
                transition: all 0.2s ease-out;
              }
              
              .card--hover{
                transition: all 0.1s ease-in;
              }
              
              .card-container .card a:hover .card--display {
                z-index:10;
                //right: -8px;
                //bottom:-8px
                transform: translate(8px,8px);
              }

              .card-container .card a:hover .card--hover {
                z-index: 20;
                //right:0px;
                //bottom:0px;
                transform: translate(-8px,-8px);
              }
              
              .card-container .card a .card--display i {
                font-size: 60px;
                margin-top: 180px;
              }

              .card-container .card a .card--display h2 {
                margin: 20px 0 0;
              }

              .card-container .card a .card--hover h2 {
                margin: 20px 0;
              }

              .card-container .card a .card--hover p {
                font-weight: normal;
                line-height: 1.5;
              }

              .card-container .card a .card--hover p.link {
                margin: 20px 0 0;
                font-weight: bold;
                color: #5bc0eb;
              }

              .card-container .card .card--border {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border: 2px dashed black;
                z-index: -1;
              }

              .card-container .card.card--dark a {
                color: white;
                background-color: black;
                border-color: black;
              }

              .card-container .card.card--dark a .card--hover .link {
                color: #fde74c;
              }
            `}
                </style>
            </div>
        </>
    )
}
export default TestimonialsSection;
