import Navbar from '@/components/Navbar';
import BlogItem from '@/components/BlogItem';

import showdown from 'showdown';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

export default function Blog({ blogData }) {

  return (
    <>
      <Navbar pageData={{ title: 'Blog', active: 'blog', type: 'page' }} />

      <Hero pageType="page" pageData={{ title: 'Blog' }} />

      <main className={`grid grid-cols-3 my-4 max-md:grid-cols-1 max-lg:grid-cols-2 auto-rows-max grid-flow-row gap-4 max-w-5xl lg:mx-auto max-lg:mx-4 lg:px-0`}>
        {blogData.map((blog, i) => (
          blog.ad ? (
            <AdBanner
              data-ad-slot="5301256152"
              data-ad-layout-key="-62+di+47-55+1l"
              data-ad-format="fluid"
            />
          ) : (
            <BlogItem
              blogData={blog}
              key={i}
            />
          )
        ))}
      </main>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const blogFetch = await fetch('https://theclashfruit.me/api/v1/posts')
  const blogData = await blogFetch.json()

  const converter = new showdown.Converter();

  converter.setFlavor('github');

  const finalBlogData = blogData.data.map((blog) => {
    blog.content = converter.makeHtml(blog.content);
    blog.ad = false;

    return blog;
  });

  const reverse = finalBlogData.reverse();

  reverse.splice(1, 0, { ad: true });
  reverse.splice(7, 0, { ad: true });

  return {
    props: {
      blogData: reverse,
    }
  }
}
