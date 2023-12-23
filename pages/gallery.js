import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Gallery() {
  return (
    <>
      <Navbar pageData={{ title: 'Gallery', active: 'gallery', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Gallery' }} />

      <Main>
        <p>*waiting for Clash to make a working one so I can know what I'm supposed to do*</p>
      </Main>

      <Footer />
    </>
  )
}
