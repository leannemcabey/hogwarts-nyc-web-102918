import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hogs: this.props.hogs
    }
  }

  sortHogsByName = (hogs) => {
    let sortedHogs = hogs.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({hogs: sortedHogs})
  }

  sortHogsByWeight = (hogs) => {
    let sortedHogs = hogs.sort((a,b) => {
      // return a.weight > b.weight ? 1 : a.weight < b.weight ? -1 : 0
      return a.weight - b.weight
    })
    this.setState({hogs: sortedHogs})
  }



  render() {
    return (
      <div>
        <button onClick={() => this.sortHogsByName(this.state.hogs)} className='sort-button'>Sort By Name</button>
        <button onClick={() => this.sortHogsByWeight(this.state.hogs)} className='sort-button'>Sort By Weight</button>
        <div className='ui grid container'>
          {this.state.hogs.map(hog => {
            return (
              <HogCard hog={hog} key={hog.name}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default HogContainer
