import React, {useState} from "react";
import bg from "../public/background.jpg";
import InstagramIcon from "./Icons/InstagramIcon.tsx";
import FacebookIcon from "./Icons/FacebookIcon.tsx";
import TwitterIcon from "./Icons/TwitterIcon.tsx";
import DownArrow from "./Icons/DownArrow.tsx";
import styled from "@emotion/styled";

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
                                <>
                                    <InstagramIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>

                                </>
                                <>
                                    <FacebookIcon
                                        className={'icon fill-gold'}
                                        height={'24px'} width={'24px'}/>
                                </>
                                <>
                                    <TwitterIcon
                                        className={'icon fill-gold'}
                                        height={'24px'}
                                        width={'24px'}/>
                                </>
                            </div>
                        </div>
                    </RotateDiv>
                </div>
                <div className={'grid col-span-4 place-items-center md:pl-24 md:pt-24'}>
                    <div className={'mt-[200px] inline-flex justify-center items-center'}>
                        <div className={"bg-gold h-0.5 w-8 mx-2"}></div>
                        <div className={'text-gold font-medium text-lg'}>Tagline</div>
                    </div>
                    <div className={'mt-[10px] ml-[98px] justify-center items-center'}>
                        <div className={'text-brown font-bold text-2xl'}>Heading</div>
                        <div className={'text-brown font-semibold text-xl'}>Subheading</div>
                    </div>
                </div>
            </div>
            <div className={'flex p-8 w-full justify-center content-center mt-auto p-24'}>
                <div className={'inline-flex justify-center mx-auto '}>
                    <div className={'text-gold'}>Scroll Down</div>
                    <DownArrow className={'fill-gold'} height={'24px'} width={'24px'}/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;