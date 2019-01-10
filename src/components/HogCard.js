import React from 'react'

class HogCard extends React.Component {

  state = {
    clicked: false
  }

  findImgFile = () => {
    let updatedName = this.props.hog.name.replace(/ /g, '_').toLowerCase()
    let fileName = updatedName.concat('.jpg')
    return fileName
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
    // this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
  }

  conditionalRender = () => {
    if (!this.state.clicked) {
      return (
        <div className='ui eight wide column'>
          <h1>{this.props.hog.name}</h1>
          <img onClick={this.handleClick} src={ require(`../hog-imgs/${this.findImgFile()}`) } alt={this.props.hog.name} />
        </div>
      )
    }
    else {
      return (
        <div className='ui eight wide column'>
          <h1>{this.props.hog.name}</h1>
          <div onClick={this.handleClick}>
            <p>{this.props.hog.specialty}</p>
            {this.props.hog.greased ? <p>Greased</p> : <p>Not Greased</p>}
            <p>{this.props.hog.weight}</p>
            <p>{this.props.hog.medal}</p>
          </div>
        </div>
      )
    }
  }

  render() {
    return this.conditionalRender()
  }
}

export default HogCard
