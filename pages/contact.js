import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar pageData={{ title: 'Contact', active: 'contact', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Contact' }} />

      <Main>
        <a href="mailto:blryface@protonmail.com">blryface@protonmail.com</a>
      </Main>

      <Footer />
    </>
  )
}