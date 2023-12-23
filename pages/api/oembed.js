export default async function handler(req, res) {
  const { permalink } = req.query

  const postFetch = await fetch(`https://theclashfruit.me/api/v1/post/${permalink}`)

  if(postFetch.status === 200) {
    const postData = await postFetch.json()

    res.status(200).json({
      type: 'link',
      version: '1.0',
      title: postData.title,
      author_name: postData.author,
      author_url: 'https://theclashfruit.me',
      thumbnail_url: postData.image,
    })
  } else {
    res.status(postFetch.status).json({});
  }
}
