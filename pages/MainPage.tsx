import React, {useState} from "react";
import bg from "../public/img.png";
import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import DownArrow from "./Icons/DownArrow";
import styled from "@emotion/styled";
import LinkedinIcon from "./Icons/LinkedinIcon";

export const RotateDiv = styled.div`
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
`;

function MainPage() {

    return (
        <div className="flex flex-col min-h-screen w-full h-full bg-no-repeat bg-cover bg-center"
             style={{
                 backgroundImage: `url(${bg.src})`,
                 width: '100%',
                 height: '100%',
             }}>
            <div className={'grid grid-cols-6 p-2 mt-24'}>
                <div className={'col-span-2'}>
                    <RotateDiv className={'h-max w-max'}>
                        <div className={'inline-flex justify-center items-center'}>
                            <div className={'whitespace-nowrap text-brown'}>
                                Follow us on
                            </div>
                            <div className={'inline-flex px-2 gap-2'}>
                                <a href="https://www.instagram.com/cheemaandsonstextilesgmbh/" target="_blank" rel="noreferrer">
                                    <InstagramIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>

                                </a>
                                <a href="https://www.facebook.com/cheemaandsonstextilesgmbh" rel="noreferrer" target="_blank">
                                    <FacebookIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>
                                </a>
                                <>
                                    <TwitterIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>
                                </>
                                <a href="https://www.linkedin.com/company/cheema-sons-textiles-gmbh/" rel="noreferrer" target="_blank">
                                    <LinkedinIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>
                                </a>
                            </div>
                        </div>
                    </RotateDiv>
                </div>
                <div className={'grid col-span-4 pr-24 place-items-center md:pl-24 md:pt-24'}>
                    <div className={'mt-[200px] w-full inline-flex justify-end items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mr-2"}></div>
                        <div className={'text-gold font-pacifico font-regular text-2xl'}>The New Generation Luxury Textiles</div>
                    </div>
                    <div className={'mt-[10px] w-full flex flex-col justify-center items-end'}>
                        <div className={'font-merienda text-brown w-max font-bold text-4xl'}>CS Textiles</div>
                        <div className={'text-TaupeGray w-max font-regular text-md'}>Striving to uplift your services by providing premium luxury textiles</div>
                    </div>
                </div>
            </div>
            <div className={'flex p-8 w-full justify-center content-center mt-auto p-24'}>
                <a href={"#CategoriesSection"} className={'inline-flex justify-center mx-auto'}>
                        <div className={'text-gold font-pacifico'}>Scroll Down</div>
                        <DownArrow className={'fill-gold'} height={'24px'} width={'24px'}/>
                </a>
            </div>
        </div>
    );
}

export default MainPage;
