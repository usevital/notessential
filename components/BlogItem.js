import Image from 'next/image';
import Link from 'next/link';

export default function BlogItem({ blogData }) {
  return (
    <div className={`bg-slate-300 dark:bg-gray-900 rounded-md shadow-lg overflow-clip`}>
      <img src={blogData.image} loading="lazy" alt={blogData.title} className={`w-full h-[186px] object-cover`} />

      <div className={`pb-2 pt-3 px-3 flex flex-col space-y-0.5`}>
        <label className={`text-sm text-opacity-50 dark:text-opacity-50`} suppressHydrationWarning={true}>{new Date(blogData.created * 1000).toLocaleString()}</label>
        <Link href={`/post/${blogData.permalink}`} className={`text-2xl truncate  font-serif`}>{blogData.title}</Link>
        <label className={`text-sm text-opacity-50 dark:text-opacity-50`}>By {blogData.author}</label>
      </div>

      <div className={`pb-3 px-3`}>
        <p>{blogData.content.replace(/(<([^>]+)>)/gi, "").substring(0, 100).trim() + '...'}</p>
      </div>
    </div>
  )
}