import  { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualTime: 0,
      btnPlayPause: 'Play',
    }

    this.counter = null
    this.initTimer = this.initTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer()
      this.setState({ btnPlayPause: 'Play' })
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 })
      }, 100)
      this.setState({ btnPlayPause: 'Pause' })
    }
  }

  pauseTimer() {
    clearInterval(this.counter)
    this.counter = null
  }

  clearTimer() {
    this.setState({ actualTime: 0 })
    clearInterval(this.counter)
    this.counter = null
    this.setState({ btnPlayPause: 'Play' })
  }

  getActualTime() {
    return this.state.actualTime.toFixed(1)
  }

  render() {
    return (
      <div className="timer">
        <div className="time">
          <h2>
            Tiempo:{' '}
            <span className="countdown font-mono text-base">
              {this.state.actualTime.toFixed(1)}
            </span>{' '}
            seg
          </h2>
        </div>

        {/* <span className="time countdown font-mono text-2xl">
          <span className={{ '--value': 10 }}></span>h
          <span className={{ '--value': 24 }}></span>m
          <span className={{ '--value': this.state.actualTime.toPrecision(3) }}></span>s
        </span> */}

        {/* <span className="countdown font-mono text-2xl">
          <span className="--value:10;"></span>:<span className="--value:24;"></span>:
          <span className="--value:${counter};"></span>
        </span> */}
        {/* <div> */}
        {/* <input type="button" value={this.state.btnPlayPause} onClick={this.initTimer} /> */}
        {/* <input type="button" value="Clean" onClick={this.clearTimer} /> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Timer
