import React, {useState} from "react";
import styled from "@emotion/styled";
import bg from "../public/background.jpg";

function AboutSection(){
    return(
        <div className={'p-4 pt-8'}>
            <div className={'grid grid-cols-2 gap-4 p-2 h-[250px]'}>
                <div className={'flex col-span-1 px-12 h-full justify-center items-center'}>
                    <div>
                    <div className={'inline-flex justify-center items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mx-2"}></div>
                        <div className={'text-2xl font-bold text-gold'}>About Us</div>
                    </div>
                    <div className={'ml-12 text-sm text-brown'}>About text here</div>
                    </div>
                </div>
                <div className={'flex justify-center items-center'} style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>Image here</div>
            </div>
        </div>
    )
}
export default AboutSection;