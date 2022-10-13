import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Button from "./components/Button";
import bg from "../public/final_logo.png";
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`
}

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <nav className="bg-black/60 bg-opacity-80 backdrop-blur-md z-50 fixed top-0 left-0 right-0">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex w-full items-center">
                            <div className={'flex-1'}/>
                            <div className="flex p-1 flex-1 items-center justify-center flex-shrink-0">
                                <Image
                                    loader={myLoader}
                                    height={'82px'}
                                    width={'132px'}
                                    src={'final_logo.png'}
                                    alt="logo"
                                />
                            </div>
                            <div className="flex justify-center flex-1 hidden md:block">
                                <div className="flex justify-end items-baseline space-x-4">
                                    <Button>
                                        <a
                                            href={"#CategoriesSection"}
                                            className="text-sm font-medium text-gold"
                                        >
                                            Products
                                        </a>
                                    </Button>
                                    <Button>
                                        <a
                                            href={"#AboutSection"}
                                            className="text-sm font-medium text-gold"
                                        >
                                            About us
                                        </a>
                                    </Button>
                                    <Button>
                                        <a
                                            href={"#ContactSection"}
                                            className="text-sm font-medium text-gold"
                                        >
                                            Get in touch
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Button>
                                    <a
                                        href="#"
                                        className="text-sm font-medium"
                                    >
                                        Link 1
                                    </a>
                                </Button>
                                <Button>
                                    <a
                                        href="#"
                                        className="text-sm font-medium"
                                    >
                                        Link 2
                                    </a>
                                </Button>
                                <Button>
                                    <a
                                        href="#"
                                        className="text-sm font-medium"
                                    >
                                        Link 3
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
    );
}

export default Nav;
