import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ClientContainer } from './style.js';
import Client from './components/client.jsx';
import getClientData from '../../Services/GetAPI/getClientData.js';

function ClientContent(props) {
  useEffect(()=>{
      props.getClientData(props.store);
  }, []);

    return (
        <ClientContainer>
          { <Client { ...props }/>}
        </ClientContainer>
    );
}
const mapStateToProps = (store) => {
  return {
      store,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClientData: (item, update = false) => dispatch(getClientData(item, update)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ClientContent);
