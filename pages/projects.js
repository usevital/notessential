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
        <p> 
        <a href="https://pridecraft.gay/">Pridecraft</a>
        </p><p>
        <a href="https://modrinth.com/resourcepack/pridepack">Pridepack</a>
        </p><p>
        <a href="https://dev.nineminecraft.com/">nineMinecraft</a>
        </p><p>
        <a href="https://crss.blurryface.xyz">CRSS</a>
        </p><p>
        <a href="https://modrinth.com/mod/icon-items">Icon Items Mod</a>
        </p><p>
        <a href="https://modrinth.com/resourcepack/accurate-advancements">Accurate Advancements</a>
        </p>
      </Main>

      <Footer />
    </>
  )
}
