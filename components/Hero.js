export default function Hero({ pageType, pageData }) {
  if (pageType === 'page') {
    return (
      <div className={`h-[33vh] bg-slate-300 dark:bg-gray-900`}>
        <div className={`max-w-5xl pb-4 lg:mx-auto max-lg:px-4 lg:px-0 h-[33vh] flex justify-start items-end`}>
          <h1 className={`text-3xl font-serif font-medium`}>{ pageData.title }</h1>
        </div>
      </div>
    )
  } else if (pageType === 'post') {
    return (
      <div className={`h-[33vh] bg-slate-300 dark:bg-gray-900`}>
        <div className={`max-w-5xl pb-4 lg:mx-auto max-lg:px-4 lg:px-0 h-[33vh] flex flex-col justify-end items-start`}>
          <h1 className={`text-3xl font-serif font-medium mb-1`}>{ pageData.title }</h1>
          <label>By { pageData.author }</label>
        </div>
      </div>
    )
  }
}