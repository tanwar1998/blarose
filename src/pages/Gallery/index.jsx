import React, { useEffect } from 'react';
import { GalleryContainer } from './style.js';
import Gallery from './components/gallery.jsx';
import { connect } from "react-redux";
import getGalleryData from '../../Services/GetAPI/getGalleryData.js';

function GalleryMain(props) {
    useEffect(()=>{
        props.getGalleryData(props.store);
    }, [])


    return (
        <GalleryContainer>
          { <Gallery {...props}/>}
        </GalleryContainer>
    );
  }

  const mapStateToProps = (store) => {
    return {
        store,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getGalleryData: (item, update = false) => dispatch(getGalleryData(item, update)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GalleryMain);
