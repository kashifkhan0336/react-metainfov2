import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.fileInfo = React.createRef();
  }
  position = async () => {
    await navigator.geolocation.getCurrentPosition((data) => {
      this.setState({
        heading: data.coords.latitude
      })
    })
  }
  getfileInfo = () => {
    this.setState(
      {
        name: this.fileInfo.current.files[0].name,
        lastModified: this.fileInfo.current.files[0].lastModifiedDate,
        size: this.fileInfo.current.files[0].size / 1e6.toFixed(2),
        type: this.fileInfo.current.files[0].type
      }
    )


  }

  render() {
    return (
      <div className="app">
        <input type="file" ref={this.fileInfo} />
        <button onClick={
          () => this.getfileInfo()
        }>Click</button>
        <div className="FileInformation">
          <h2>{this.state.name}</h2>
          <h3>{this.state.lastModified 
            ? "Last Modified : "+new Date(this.state.lastModified).toLocaleDateString() : ""}</h3>
          <h3>{this.state.size 
            ? "Size : "+this.state.size.toFixed(2) + ' mb' : ""}</h3>
          <h3>{this.state.type}</h3>

        </div>
      </div>
    )
  }
}


export default App;