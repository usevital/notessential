import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Projects() {
  return (
    <>
      <Navbar pageData={{ title: 'Projects', active: 'projects', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Projects' }} />

      <Main>
        bye
      </Main>

      <Footer />
    </>
  )
}
