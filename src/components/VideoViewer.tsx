import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

const VideoViewer = () => {
  //パラメータ（ビデオメタデータ）を受け取る
  const location = useLocation()
  const { videoid, title, duration, videofile } = location.state as any
  const imgUrl = import.meta.env.REACT_APP_IMG_URL //環境変数から動画保存先URLの途中までを取得

  //ビデオ再生ログ取得関数
  const putVideoPlayLog = () => {
    //内容は省略
  }

  //動画ビューア画面を表示
  return (
    <React.Fragment>
      <h3>
        {videoid} {title} ({duration})
      </h3>
      <div className="player-wrapper">
        <ReactPlayer
          url={imgUrl + '/' + videofile + '.m3u8'}
          className="react-player"
          controls={true}
          width="100%"
          height="100%"
          playing={false}
          onStart={() => putVideoPlayLog()}
        />
      </div>
    </React.Fragment>
  )
}

export default VideoViewer
