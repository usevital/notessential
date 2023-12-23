import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Link from 'next/link';

export default function Navbar({ pageData }) {
  const router = useRouter()

  const navRef = useRef();
  const navCollapseRef = useRef();
  const navButtonIconRef = useRef();
  const navItemsRef = useRef();

  const toggleNavBar = () => {
    navRef.current.classList.toggle(`h-screen`);

    if(navCollapseRef.current.classList.contains(`max-lg:hidden`)) {
      navCollapseRef.current.classList.remove(`max-lg:hidden`);
    } else {
      navCollapseRef.current.classList.add(`max-lg:hidden`);
    }
  }

  /*

  const [ langData, setLangData ] = useState()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    if(loading) {
      fetch(`/locale/${router.locale}.json`).then(r => r.json()).then((locale) => {
        setLangData(locale)
        setLoading(false)
      });
    }
  }, [ langData, setLangData, setLoading ])

  if(loading) return (<></>)

  console.log(langData)

   <link type="application/json+oembed" href={`https://beta.theclashfruit.me/api/oembed?permalink=${pageData.postData.permalink}`} />

  */

  return (
    <>
      <Head>
        <title>TheClashFruit &bull; {pageData.title}</title>

        <link href="/favicon_black.ico" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/favicon_white.ico" rel="icon" media="(prefers-color-scheme: dark)" />

        {pageData.type === 'page' && (
          <>
            <meta name="name" content={`TheClashFruit &bull; ${pageData.title}`} />
            <meta name="description" content="I'm TheClashFruit and I like to program, explore and craft stuff. I also like to play games. I have 3 Linux servers.. So, as you can see, I like to play around with Linux too. I'm currently learning how to write proper blog posts on my blog." />
            <meta name="keywords" content={`TheClashFruit, tcf, blokkok, the, clash, fruit, ${pageData.title.trim().split(' ').join(', ')}`} />
            <meta name="theme-color" content="#00796B" />

            <meta property="og:site_name" content="TheClashFruit" />
            <meta property="og:title" content={pageData.title} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={router.locale} />
            <meta property="og:url" content="https://theclashfruit.me" />
            <meta property="og:image" content="https://www.theclashfruit.me/img/logo.png" />
            <meta property="og:description" content="I'm TheClashFruit and I like to program, explore and craft stuff. I also like to play games. I have 3 Linux servers.. So, as you can see, I like to play around with Linux too. I'm currently learning how to write proper blog posts on my blog." />
          </>
        )}

        {pageData.type === 'post' && (
          <>
            <meta name="name" content={`TheClashFruit &bull; ${pageData.title}`} />
            <meta name="description" content={pageData.postData.content.replace(/(<([^>]+)>)/gi, "").trim()} />
            <meta name="keywords" content={`TheClashFruit, tcf, blokkok, the, clash, fruit, ${pageData.postData.title}`} />
            <meta name="theme-color" content="#00796B" />

            <meta property="og:site_name" content="TheClashFruit" />
            <meta property="og:title" content={pageData.title} />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content={router.locale} />
            <meta property="og:url" content="https://theclashfruit.me" />
            <meta property="og:image" content={pageData.postData.image} />
            <meta property="og:description" content={pageData.postData.content.replace(/(<([^>]+)>)/gi, "").trim()} />

            <meta property="article:published_time" content={new Date(pageData.postData.created * 1000).toISOString()} />
            <meta property="article:modified_time" content={new Date(pageData.postData.updated * 1000).toISOString()} />
            <meta property="article:author" content={pageData.postData.author} />
            <meta property="article:section" content={`Technology`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="theclashfruit.me" />
            <meta property="twitter:url" content={`https://theclashfruit.me/post/${pageData.postData.permalink}`} />
            <meta name="twitter:title" content={pageData.postData.title} />
            <meta name="twitter:description" content={pageData.postData.content.replace(/(<([^>]+)>)/gi, "").trim()} />
            <meta name="twitter:image" content={pageData.postData.image} />
          </>
        )}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1510964912637528" crossorigin="anonymous"></script>
      </Head>

      <nav className={`transition z-10 bg-slate-300/70 dark:bg-gray-900/70 backdrop-blur-sm fixed top-0 left-0 right-0`} ref={navRef}>
        <div className={`flex items-center lg:justify-between max-lg:flex-col flex-row max-w-5xl lg:mx-auto max-lg:px-3 max-lg:py-3 lg:px-0 h-full`}>
          <div className={`flex max-lg:w-full justify-between items-center`}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" className={`fill-teal-700`}>
                <path d="M202.565-165.326q-46.229-46.48-71.973-108.878-25.744-62.397-25.744-126.274 0-75.236 27.178-139.044 27.179-63.809 79.061-114.913 39.435-40.435 98.728-65.674 59.294-25.239 134.75-38.119 75.457-12.881 165.837-15.022 90.381-2.141 191.484 4.701 8.744 100.527 7.864 190.288-.88 89.761-13.402 166.087-12.522 76.326-38.381 137.433-25.858 61.106-67.293 102.415-51.985 52.23-114.027 79.354-62.042 27.124-130.955 27.124-72.929 0-132.289-23.5-59.36-23.5-110.838-75.978Zm114.631-12.587q25.592 17 58.964 25.761t69.284 8.761q51.624 0 101.612-21.881 49.987-21.88 89.748-62.402 29.479-30.956 49.218-80.272 19.739-49.315 29.761-110.674 10.021-61.358 12.663-132.304 2.641-70.946-.359-145.163-92.522-2.239-166.544 2.261-74.021 4.5-131.043 16.5-57.022 12-97.163 31.12-40.141 19.119-65.101 44.641-41.845 42.043-63.964 89.466-22.12 47.422-22.12 97.058 0 46.154 19.504 97.676 19.505 51.523 49.609 83.213 50.213-95.805 123.496-172.087 73.282-76.283 161-124-85.283 76-139.424 163.141-54.141 87.141-79.141 189.185Zm0 0Zm0 0Z"/>
              </svg>
              <span className="sr-only">TheClashFruit's logo, a leaf.</span>
            </div>
            <button className={`lg:hidden`} onClick={toggleNavBar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={`fill-black dark:fill-white`} ref={navButtonIconRef}>
                <path d="M141.957-224.782q-16.946 0-28.049-11.458-11.104-11.457-11.104-27.793 0-16.337 11.104-27.315 11.103-10.978 28.049-10.978h677.086q15.971 0 27.181 11.154 11.211 11.153 11.211 27.489t-11.211 27.618q-11.21 11.283-27.181 11.283H141.957Zm0-216.827q-16.946 0-28.049-11.457-11.104-11.458-11.104-27.555 0-16.336 11.104-27.314 11.103-10.978 28.049-10.978h677.086q15.971 0 27.181 11.154 11.211 11.153 11.211 27.489 0 16.097-11.211 27.379-11.21 11.282-27.181 11.282H141.957Zm0-216.826q-16.946 0-28.049-11.338-11.104-11.338-11.104-27.913 0-16.097 11.104-27.195 11.103-11.097 28.049-11.097h677.086q15.971 0 27.181 11.273 11.211 11.273 11.211 27.37 0 16.575-11.211 27.738-11.21 11.162-27.181 11.162H141.957Z"/>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
          </div>
          <div className={`max-lg:hidden max-lg:h-full`} ref={navCollapseRef}>
            <ul className={`flex max-lg:flex-1 max-lg:p-4 max-lg:w-screen max-lg:h-full max-lg:items-start max-lg:justify-center max-lg:flex-col`}>
              <li className={`p-3`}>
                <Link href={pageData.active === 'home' ? "#" : "/"} className={`max-lg:text-lg text-black dark:text-white ${pageData.active !== 'home' ? 'text-opacity-60 dark:text-opacity-60' : ''} hover:text-opacity-100 rounded-sm focus:outline outline-teal-700/70 outline-offset-4 outline-2`}>Home</Link>
              </li>
              <li className={`p-3`}>
                <Link href={pageData.active === 'blog' ? "#" : "/blog"} className={`max-lg:text-lg transition text-black ${pageData.active !== 'blog' ? 'text-opacity-60 dark:text-opacity-60' : ''} dark:text-white hover:text-opacity-100 rounded-sm focus:outline outline-teal-700/70 outline-offset-4 outline-2`}>Blog</Link>
              </li>
              <li className={`p-3`}>
                <Link href={pageData.active === 'projects' ? "#" : "/projects"} className={`max-lg:text-lg transition text-black ${pageData.active !== 'projects' ? 'text-opacity-60 dark:text-opacity-60' : ''} dark:text-white hover:text-opacity-100 rounded-sm focus:outline outline-teal-700/70 outline-offset-4 outline-2`}>Projects</Link>
              </li>
              <li className={`p-3`}>
                <Link href={pageData.active === 'gallery' ? "#" : "/gallery"} className={`max-lg:text-lg transition text-black ${pageData.active !== 'gallery' ? 'text-opacity-60 dark:text-opacity-60' : ''} dark:text-white hover:text-opacity-100 rounded-sm focus:outline outline-teal-700/70 outline-offset-4 outline-2`}>Gallery</Link>
              </li>
              <li className={`p-3`}>
                <Link href={pageData.active === 'contact' ? "#" : "/contact"} className={`max-lg:text-lg transition text-black ${pageData.active !== 'contact' ? 'text-opacity-60 dark:text-opacity-60' : ''} dark:text-white hover:text-opacity-100 rounded-sm focus:outline outline-teal-700/70 outline-offset-4 outline-2`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}