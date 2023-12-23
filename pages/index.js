import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  // Hi! I'm Blurryface. I mainly do random projects if I'm not developing for Pridecraft.

  return (
    <>
      <Navbar pageData={{ title: 'Home', active: 'home', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Home' }} />

      <Main>
        <p>Hi! I'm Blurryface. I mainly do random projects if I'm not developing for Pridecraft.</p>

        <h2 className={`text-2xl font-serif font-medium my-4`}>Skills</h2>

        <p>Not a ton.</p>
      </Main>

      <Footer />
    </>
  )
}
