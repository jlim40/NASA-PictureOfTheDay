import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={(
          <Viewer
            url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg" 
            mediaType="image"/>
        )}
      />
    );
  }
}

export default App;
