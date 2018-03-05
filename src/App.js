import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    urL: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if (this.state.loading) return;

    // Loading state start
    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      const { date: retrievedDate, url, media_type: mediaType } = response.data;
      console.log(response.data);
      console.log(response);
      if(!this.state.maxDate) {
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });
    } catch (e) {
      console.log(e);
    }

      // Loading state finished
      this.setState({
        loading: false
      });
  }

  componentDidMount() {
    console.log("cdm");
    this.getAPOD();
  }
  

  render() {
    const{ url, mediaType, loading } = this.state;

    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={(
          <Viewer 
            url={url}
            mediaType={mediaType}
            loading={loading}/>
        )}
      />
    );
  }
}

export default App;