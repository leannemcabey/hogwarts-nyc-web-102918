import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

const cleanHogData = () => {
  return hogs.map(hog => {
    const {name, specialty, greased, "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water":weight, "highest medal achieved":medal} = hog
    return {name, specialty, greased, weight, medal}
  })
}
let cleanData = cleanHogData()

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
      < HogContainer hogs={cleanData}/>
      </div>
    )
  }
}

export default App;
