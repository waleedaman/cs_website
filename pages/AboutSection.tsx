import React, {useState} from "react";
import styled from "@emotion/styled";
import factory from "../public/about.jpeg";
import Image from 'next/image';

function AboutSection(){
    return(
        <div className={'flex p-4 pt-8'} id="CategoriesSection">
            <div className={'grid-cols-1 grid-rows-2 grid md:grid-cols-2 gap-4 p-2 min-h-[250px]'}>
                <div className={'flex justify-center items-center md:col-span-1 md:row-span-2 row-span-1'} style={{
                    backgroundImage: `url(${factory.src})`,
                    width: '100%',
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize:'cover',
                    position: 'relative',
                    backgroundRepeat: 'no-repeat'
                }}/>

                <div className={'flex md:col-span-1 md:row-span-2 row-span-1 px-12 h-full justify-center items-center'}>
                    <div>
                    <div className={'inline-flex justify-center items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mx-2"}/>
                        <div className={'text-2xl font-bold text-gold'}>About Us</div>
                    </div>
                    <div className={'ml-12 text-sm text-brown'}>We &lsquo;CS Textiles introduce&rsquo; introduce ourselves as a leading Supplier for Hotels, Resorts, Hospitals & Corporate Sector and have best sources of manufacturing hospitality textile.
                        Our products includes massive range of Bath Linen, Bed Linen, Table Linen as well as Hotel amenities. We are ready to assist you for any linen order, under the supervision of well experienced Hospitality experts.
                        Our mission is to provide the highest value services by providing premier quality goods at most reasonable price. If you have any inquiry please don’t hesitate to call at the number listed, our team will be happy to offer assistance.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;
