import React, {useState} from "react";
import styled from "@emotion/styled";
import bed from "../public/bed.jpeg";
import bath from "../public/bath.jpeg";
import fnb from "../public/fnb.jpeg";
import uniform from "../public/uniform.jpeg";
import Image from "next/image";

export const RotateDiv = styled.div`
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
`;

function ProductsSection() {
    const myLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
            <div className={'grid grid-cols-6 w-full pt-20'} id="BrandSection">
                <div className={'p-6 flex flex-1 justify-center w-full h-full col-span-5'}>
                    <Image
                        loader={myLoader}
                        height={'388px'}
                        width={'600px'}
                        src={'card.jpg'}
                        alt="card"
                    />
                </div>
                <div className={'relative h-full w-full p-2 flex col-span-1'}>
                <div className={'flex flex-1 bg-gold text-center items-center h-full w-full'}>

                </div>
                <div className={'flex items-center top-0 left-0 h-full w-full z-20 backdrop-filter backdrop-blur-md bg-white bg-opacity-10 absolute'}>
                    <div style={{ writingMode: 'vertical-rl' }} className={'flex flex-1 items-center w-full p-6 rotate-180 text-2xl text-brown'}>
                        Our Brand
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
            <div className={'grid grid-cols-6 w-full pt-20'} id="CategoriesSection">
            <div className={'relative h-full w-full p-2 flex col-span-1'}>
                <div className={'flex flex-1 bg-gold text-center items-center h-full w-full'}>

                </div>
                <div className={'flex items-center top-0 left-0 h-full w-full z-20 backdrop-filter backdrop-blur-md bg-white bg-opacity-10 absolute'}>
                    <div style={{ writingMode: 'vertical-rl' }} className={'flex flex-1 items-center w-full p-6 rotate-180 text-2xl text-brown'}>
                        Product Categories
                    </div>
                </div>
            </div>

            <div className={'p-6 gap-6 grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 w-full h-full col-span-5'}>
                <div className={'card-container col-span-3 min-h-[300px]'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "/>
                            <div style={{
                                backgroundImage: `url(${bed.src})`,
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
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Bed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3 min-h-[300px]'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${bath.src})`,
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
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Bath</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3 min-h-[300px]'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${fnb.src})`,
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
                                    <div className={'py-4 text-2xl font-bold text-brown'}>F&B Items</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'card-container col-span-3 min-h-[300px]'}>
                    <div className="card relative w-full h-full">
                        <a href="#">
                            <div className="card--hover absolute -right-2 -bottom-2 bg-gold h-full w-full "></div>
                            <div style={{
                                backgroundImage: `url(${uniform.src})`,
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
                                    <div className={'py-4 text-2xl font-bold text-brown'}>Uniforms</div>
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
        </>

    )
}

export default ProductsSection;
