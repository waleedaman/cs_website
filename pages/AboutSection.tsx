import React, {useState} from "react";
import styled from "@emotion/styled";
import bg from "../public/background.jpg";
import factory from "../public/factory.png";

function AboutSection(){
    return(
        <div className={'p-4 pt-8'} id="CategoriesSection">
            <div className={'grid grid-cols-2 gap-4 p-2 h-[250px]'}>
                <div className={'flex justify-center items-center'} style={{
                    backgroundImage: `url(${factory.src})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize:'cover'
                }}/>
                <div className={'flex col-span-1 px-12 h-full justify-center items-center'}>
                    <div>
                    <div className={'inline-flex justify-center items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mx-2"}></div>
                        <div className={'text-2xl font-bold text-gold'}>About Us</div>
                    </div>
                    <div className={'ml-12 text-sm text-brown'}>We "CS Textiles" introduce ourselves as a leading Suppliers for Hotels, Resorts, Hospitals & Corporate Sectors and have best sources of manufacturing hospitality textile.
                        Our products includes massive range of Bath Linen, Bed Linen, Table Linen as well as Hotel amenities. We are ready to assis you for any linen order, under the supervision of well experienced Hospitality experts.
                        Our mission is to provide the highest value services by providing premier quality goods at most reasonable price. If you have any inquiry please don’t hesitate to call at the number listed, our team will be happy to offer assistance.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;
