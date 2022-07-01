import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Sam from './assets/sample.mp4'

export default class Snow extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      PlayGrond: Sam,
    }
  }

  render() {
    const { PlayGrond } = this.state as any
    return (
      <div>
        <h1>動画再生アプリ</h1>
        <ReactPlayer
          url={PlayGrond}
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
}
