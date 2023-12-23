import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  // Hi! I'm TheClashFruit, I like to make websites, discord bots and more related to programming.

  return (
    <>
      <Navbar pageData={{ title: 'Home', active: 'home', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Home' }} />

      <Main>
        <p>Hi! I'm TheClashFruit, I like to make websites, discord bots and more related to programming.</p>

        <h2 className={`text-2xl font-serif font-medium my-4`}>Skills</h2>
      </Main>

      <Footer />
    </>
  )
}
