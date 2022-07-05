import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Sam from './assets/sample.mp4'

export default function Snow() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(Sam)
  }, [])

  return (
    <div>
      <h1>動画再生アプリ</h1>
      <ReactPlayer
        url={url}
        id="MainPlay"
        playing
        loop
        controls={true}
        width="1280px"
        height="720px"
      />
    </div>
  )
}
