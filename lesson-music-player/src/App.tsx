import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // 再描画の影響を受けない不変なオブジェクト
  const audioContext = useRef<AudioContext>(null)
  // 内部状態
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null) // 追加
  // 初期化
  useEffect(() => {
    // @ts-ignore
    audioContext.current = new AudioContext()
  }, [])

  const handleClickPlay = () => {
    if (!audioContext.current) return

    // 自動再生ブロックにより停止されたオーディオを再開させる
    if (audioContext.current.state === 'suspended') {
      audioContext.current.resume()
    } else {
      const sourceNode = audioContext.current.createBufferSource()
      if (sourceNode) {
        sourceNode.buffer = audioBuffer
        sourceNode.connect(audioContext.current.destination)
        sourceNode.start()
      }
    }
  }

  const handleClickStop = () => {
    if (!audioContext.current) return

    audioContext.current.suspend()
  }

  const handleChangeFile = async (event: any) => {
    const _file = event.target.files[0]
    const _audioBuffer = await audioContext.current?.decodeAudioData(await _file.arrayBuffer())
    if (_audioBuffer) {
      setAudioBuffer(_audioBuffer)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleClickPlay}>Play</button>
      <button onClick={handleClickStop}>Stop</button>
    </div>
  )
}

export default App
