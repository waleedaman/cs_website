import Head from 'next/head'
import Image from 'next/image'
import Nav from './navbar'
import MainPage from "./MainPage";
import ProductsSection from "./ProductsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
export default function Home() {
  return (
      <div className={'min-h-screen'}>
        <Nav />
        <MainPage/>
          <ProductsSection/>
          <AboutSection/>
          <ContactSection/>
          <FooterSection/>
      </div>

  )
}
