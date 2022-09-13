import React, {useState} from "react";
import styled from "@emotion/styled";
import bg from "../public/background.jpg";

export const RotateDiv = styled.div`
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
`;

function ProductsSection() {

    return (
        <div className={'grid grid-cols-6 w-full'}>
            <div className={'h-full w-full p-4 bg-black col-span-1'}>
                <RotateDiv className={'h-[400px] w-[300px]'}>
                    <div className={'text-2xl text-brown'}>
                        Product Categories
                    </div>
                </RotateDiv>
            </div>
            <div className={'p-6 gap-6 grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 w-full h-full col-span-5'}>
                <div className={'card-container col-span-3 md:h-[300px] lg:h-[400px]'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${bg.src})`,
                                width: '100%',
                                height: '100%',
                            }}
                                 className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                <div className={'p-8'}>
                                    <div className="h-2 w-20 bg-gold"/>
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Category 1</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${bg.src})`,
                                width: '100%',
                                height: '100%',
                            }}
                                 className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                <div className={'p-8'}>
                                    <div className="h-2 w-20 bg-gold"/>
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Category 2</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${bg.src})`,
                                width: '100%',
                                height: '100%',
                            }}
                                 className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                <div className={'p-8'}>
                                    <div className="h-2 w-20 bg-gold"/>
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Category 3</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${bg.src})`,
                                width: '100%',
                                height: '100%',
                            }}
                                 className="card--display flex flex-col relative bg-gray-600 text-gray-50 space-y-6 border-4 border-white-700">
                                <div className={'p-8'}>
                                    <div className="h-2 w-20 bg-gold"/>
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Category 4</div>
                                </div>
                            </div>
                        </a>
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
    )
}

export default ProductsSection;