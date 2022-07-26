import React, { useEffect } from 'react';
import AboutComponent from './components/about.jsx';
import {AboutContainer} from './style.js';
import OurTeam from './components/ourTeam.jsx';
import { connect } from "react-redux";
import PrevousShows from './components/previousShows.jsx';
import ContactUS from './components/contactUS.jsx';
import getTeamData from '../../Services/GetAPI/getTeamData.js';
import getAboutSStoryData from '../../Services/GetAPI/getAboutSStoryData.js';
import getPreviousShowData from '../../Services/GetAPI/getPreviousShowData.js';


function About(props) {

  useEffect(()=>{
      props.getAboutSStoryData(props.store);
      props.getPreviousShowData(props.store);
      props.getTeamData(props.store);
  }, [])

    return (
        <AboutContainer>
          {props.component === 'about-us' && <AboutComponent {...props}/>}
          {props.component === 'our-team' && <OurTeam {...props}/>}
          {props.component === 'previous-shows' && <PrevousShows {...props}/>}
          {props.component === 'contact-us' && <ContactUS/>}
        </AboutContainer>
    );
  }

  const mapStateToProps = (store) => {
    return {
        store,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getPreviousShowData: (item, update = false) => dispatch(getPreviousShowData(item, update)),
      getAboutSStoryData: (item, update = false) => dispatch(getAboutSStoryData(item, update)),
      getTeamData: (item, update = false) => dispatch(getTeamData(item, update)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(About);