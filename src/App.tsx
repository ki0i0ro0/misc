// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // 再描画の影響を受けない不変なオブジェクト
  const audioContext = useRef({
    current: null,
    state: null,
    resume: () => {},
    createBufferSource: () => {},
  })

  // 内部状態
  const [audioBuffer, setAudioBuffer] = useState(null) // 追加
  // 初期化
  useEffect(() => {
    //@ts-ignore
    audioContext.current = new AudioContext()
  }, [])

  const handleClickPlay = () => {
    // 自動再生ブロックにより停止されたオーディオを再開させる
    if (audioContext.current.state === 'suspended') {
      audioContext.current.resume()
    }

    // ソースノード生成 ＋ 音声を設定
    const sourceNode = audioContext.current.createBufferSource()

    sourceNode.buffer = audioBuffer

    // 出力先に接続
    sourceNode.connect(audioContext.current.destination)

    // 再生発火
    sourceNode.start()
  }

  const handleChangeFile = async (event: any) => {
    const _file = event.target.files[0]
    const _audioBuffer = await audioContext.current.decodeAudioData(await _file.arrayBuffer())
    setAudioBuffer(_audioBuffer)
  }

  return (
    <div>
      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleClickPlay}>再生</button>
    </div>
  )
}

export default App
