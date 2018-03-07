import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment from 'moment';
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
    // if it's aready requesting, then ignore
    if (this.state.loading) return;

    // Loading state start
    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      console.log(response);
      const { date: retrievedDate, url, media_type: mediaType } = response.data;
  
      // if there is no maxDate, then set maxDate as retrieved date
      if(!this.state.maxDate) {
        this.setState({
          maxDate: retrievedDate
        })
      }

      // set State as received data
      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });
    } catch (e) {
      // error?
      console.log(e);
    }

      // Loading state finished
      this.setState({
        loading: false
      });
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date } = this.state;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log(nextDate);
    this.getAPOD(nextDate);
  }

  componentDidMount() {
    console.log("cdm");
    this.getAPOD();
  }
  

  render() {
    const{ url, mediaType, loading } = this.state;
    const { handlePrev, handleNext } = this;

    return (
      <ViewerTemplate
        spaceNavigator={
          <SpaceNavigator
            onPrev={handlePrev}
            onNext={handleNext}
          />}
        viewer={(
          <Viewer 
            url={url}
            mediaType={mediaType}
            loading={loading}
          />
        )}
      />
    );
  }
}

export default App;