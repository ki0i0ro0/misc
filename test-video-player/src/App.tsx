import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Sam from './assets/sample.mp4'

export const listItems = {
  SubPlay1: Sam,
  SubName1: '1',
  SubPlay2: Sam,
  SubName2: '2',
  SubPlay3: Sam,
  SubName3: '3',
  SubPlay4: Sam,
  SubName4: '4',
}

export default function Snow() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(Sam)
  }, [])

  const changeImageFile = () => {}

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div className="MainMovie">
              <ReactPlayer
                url={url}
                id="MainPlay"
                playing
                loop
                controls={true}
                width="1280px"
                height="720px"
              />
              <p>{url}</p>
            </div>
          </td>
          <td>
            <p>{listItems.SubName1}</p>
            <ReactPlayer
              className="SubMovie"
              url={listItems.SubPlay1}
              id="SubPlay1"
              onClick={changeImageFile}
              width="256px"
              height="144px"
            />
            <p>{listItems.SubName2}</p>
            <ReactPlayer
              className="SubMovie"
              url={listItems.SubPlay2}
              id="SubPlay2"
              onClick={changeImageFile}
              width="256px"
              height="144px"
            />
            <p>{listItems.SubName3}</p>
            <ReactPlayer
              className="SubMovie"
              url={listItems.SubPlay3}
              id="SubPlay3"
              onClick={changeImageFile}
              width="256px"
              height="144px"
            />
            <p>{listItems.SubName4}</p>
            <ReactPlayer
              className="SubMovie"
              url={listItems.SubPlay4}
              id="SubPlay4"
              onClick={changeImageFile}
              width="256px"
              height="144px"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
