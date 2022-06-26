import React, { Component } from 'react'
import Scanner from './Scanner'
import { Fab, TextareaAutosize, Paper } from '@mui/material'

class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    // @ts-ignore
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = (result: any) => {
    this.setState({ results: [] })
    // @ts-ignore
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div>
        <Fab style={{ marginRight: 10 }} color="secondary">
          ＜
        </Fab>
        <span>Barcode Scanner</span>

        <Paper variant="outlined" style={{ marginTop: 30, width: 100, height: 200 }}>
          {/* @ts-ignore */}
          <Scanner onDetected={this._onDetected} />
        </Paper>

        <TextareaAutosize
          style={{ fontSize: 32, width: 320, height: 100, marginTop: 30 }}
          defaultValue={'No data scanned'}
          // @ts-ignore
          value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />
      </div>
    )
  }
}

export default BarcodeScanner
