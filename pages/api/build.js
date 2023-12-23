import fs from 'fs';

export default async function handler(req, res) {
  const fileBuffer = fs.readFileSync(".next/BUILD_ID")

  const BUILD_ID = fileBuffer.toString();

  const commitFetch = await fetch(`https://git.theclashfruit.me/api/v1/repos/TheClashFruit/Website/commits?sha=${BUILD_ID}&limit=1`)
  const commitData = await commitFetch.json()

  console.log(`https://git.theclashfruit.me/api/v1/repos/TheClashFruit/Website/commits?sha=${BUILD_ID}&limit=1`, '>', commitData[0])

  res.status(200).json({
    buildId: BUILD_ID,
    git: {
      repo: 'https://git.theclashfruit.me/TheClashFruit/Website',
      commit: `https://git.theclashfruit.me/TheClashFruit/Website/commit/${BUILD_ID}`,
      message: commitData[0].commit.message,
      files: commitData[0].files,
      stats: commitData[0].stats,
    }
  })
}