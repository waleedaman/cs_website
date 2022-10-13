import Head from 'next/head'
import Nav from './navbar'
import MainPage from "./MainPage";
import ProductsSection from "./ProductsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
      <div className={'min-h-screen'}>
          <Head>
              <title>CS Textiles</title>
          </Head>
        <Nav />
        <MainPage/>
          <ProductsSection/>
          <TestimonialsSection/>
          <AboutSection/>
          <ContactSection/>
          <FooterSection/>
      </div>

  )
}
