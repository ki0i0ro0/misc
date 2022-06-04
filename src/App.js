import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const Test = (props) => {
  const [data, setData] = useState('No result')

  return (
    <>
      <QrReader
        constraints={{ facingMode: { exact: 'environment' } }}
        onResult={(result, error) => {
          if (!!result && result.getText()) {
            setData(result?.getText())
          }

          if (!!error) {
            setData(error.toString())
          }
        }}
        // style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  )
}

export default Test
