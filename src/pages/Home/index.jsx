import React, { useEffect } from 'react';
import LandingComponent from './components/landing.jsx';
import {HomeContainer} from './style.js';
import Contempolary from  './components/creativeCotempolary';
import SuccessStory from './components/successStory.jsx';
import PremierProperty from './components/premierProperty.jsx';
import Service from './components/service.jsx';
import Register from './components/register.jsx';
import Work from './components/work.jsx';
import { connect } from "react-redux";
import getSlidesData from '../../Services/GetAPI/getSlidesData.js';
import getExperienceData from '../../Services/GetAPI/getExperienceData.js';
import getServiceData from '../../Services/GetAPI/getServiceData.js';
import getSuccessStoryData from '../../Services/GetAPI/getSuccessStoryData.js';
import getPPItemData from '../../Services/GetAPI/getPPItemData.js';
import { updateStore } from '../../Store/cacheAction';
import PERMANENT_ACTION from '../../Store/permanentAction';



function Home(props) {

  useEffect(()=>{
      props.getSlidesData(props.store);
      props.getExperienceData(props.store);
      props.getServiceData(props.store);
      props.getPPItemData(props.store);
      props.getSuccessStoryData(props.store);
  }, [])

    return (
        <HomeContainer>
          <LandingComponent { ...props }/>
          <Contempolary { ...props }/>
          <SuccessStory { ...props }/>
          <PremierProperty { ...props }/>
          <Service { ...props }/>
          <Register/>
          <Work { ...props }/>
        </HomeContainer>
    );
  }

  const mapStateToProps = (store) => {
    return {
        store,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSlidesData: (item, update = false) => dispatch(getSlidesData(item, update)),
    getPPItemData: (item, update = false) => dispatch(getPPItemData(item, update)),
    getSuccessStoryData: (item, update = false) => dispatch(getSuccessStoryData(item, update)),
    getExperienceData: (item, update = false) => dispatch(getExperienceData(item, update)),
    getServiceData: (item, update = false) => dispatch(getServiceData(item, update)),
      updateStore: item => dispatch(updateStore(item)),
      updatePermanentStore: item => dispatch(PERMANENT_ACTION.updateStoreKey(item)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
