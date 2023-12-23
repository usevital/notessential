import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function NotFound() {
  const textPool = [
    "My bad you should have not ended up here.",
    "What are you looking for mate?",
    "You're very suspicious to me, why are you here?",
    "edef08f710f72a96c3a720f97082a12e7e690892cead11db3ffb0d2a415cdba33bbbbc33402f1f8ca14a8adff43e14cc0fc374a8b7aa2dabcda20638f5721847"
  ]

  const textPoolUwU = [
    "My bad u shouwd have not ended up hewe. UwU",
    "Wat awe u wooking fow mate? 'w'",
    "U'we vewy suspicious to me, why awe u hewe? OwO",
    "3d7336510a6cb83a52f0ef3c587819ee38e7890b5a841e5b8b8486e486030cc9876a611498fc1a198ed9b35a143199514429193a16c365a7e4542603315906e4"
  ]

  const randomText =
    [1, 0, 0, 0, 0].sort(() => Math.random() - 0.5)[0] ?
    textPoolUwU[Math.floor(Math.random() * textPoolUwU.length)] :
    textPool[Math.floor(Math.random() * textPool.length)];

  return (
    <>
      <Navbar pageData={{ title: '404 Not Found', active: '404', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: '404' }} />

      <Main className={`prose dark:prose-invert`}>
        <p>This page is non existent. 🗿</p>
        <h4>You might be interested in:</h4>
        <ul>
          <li>The <Link href="/">home</Link>page.</li>
          <li>My <Link href="/blog">blog</Link>.</li>
          <li>My <Link href="/projects">project</Link>s.</li>
        </ul>
        <h4>Just a message for you:</h4>
        <pre suppressHydrationWarning={true}>{randomText}</pre>
      </Main>

      <Footer />
    </>
  )
}