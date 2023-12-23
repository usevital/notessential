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
        <p>tba</p>
      </Main>

      <Footer />
    </>
  )
}
