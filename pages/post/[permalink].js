import Navbar from '@/components/Navbar';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight'
import Hero from '@/components/Hero';

import 'showdown-youtube';
import footnotes from 'showdown-footnotes';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <>
      <Navbar pageData={{ title: postData.title, active: 'post', type: 'post', postData }} />

      <Hero pageType="post" pageData={{ title: postData.title, author: postData.author }} />

      <article className={`prose my-4 dark:prose-invert max-w-5xl lg:mx-auto max-lg:px-4 lg:px-0`} dangerouslySetInnerHTML={{ __html: postData.content }} />

      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {

  const postFetch = await fetch(`https://theclashfruit.me/api/v1/post/${context.params.permalink}`)

  if(postFetch.status !== 200) {
    return {
      notFound: true
    }
  }

  const postData = await postFetch.json()

  const converter = new showdown.Converter({
    extensions: [
      showdownHighlight({
        pre: true,
        auto_detection: true
      }),
      'youtube',
      footnotes
    ]
  });

  converter.setFlavor('github');

  console.log(converter.getOptions().extensions)

  postData.content = converter.makeHtml(postData.content);

  return {
    props: {
      postData,
    }
  }
}