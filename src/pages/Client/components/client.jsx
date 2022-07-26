import React from 'react';
import Tooltip from '../../../components/Tooltip/index.jsx';
// import Client1 from '../../../assets/img/client/nayira.jpg';
// import Client2 from '../../../assets/img/client/blossom.jpg';
// import Client3 from '../../../assets/img/client/doll.jpg';
// import Client4 from '../../../assets/img/client/gems.jpg';
// import Client5 from '../../../assets/img/client/hemant.jpg';

// const clientList = [
//   {
//     link: '#',
//     text: 'Nayerah',
//     image: Client1
//   },
//   {
//     link: '#',
//     text: 'Blossom',
//     image: Client2
//   },
//   {
//     link: '#',
//     text: 'Doll UP',
//     image: Client3
//   },
//   {
//     link: '#',
//     text: 'Gems',
//     image: Client4
//   },
//   {
//     link: '#',
//     text: 'Hemanthshree',
//     image: Client5
//   },
// ]



export default function Client(props) {
    return (
      <div className='hor-row client-us-container-main'>
        <div className='hor-row client-us-back-image'>
          <div className='client-content-back'>
            <div>
              Our Clients
            </div>
          </div>

        </div>
        <div className='hor-row client-us-content-main'>
          <div className='hor-row container-main'>
            <h3>
              CLIENTS
            </h3>
            <div className='hor-row under-line-content'>
              <span/>
            </div>
            <div className='hor-row client-content'>
              { props.store.cacheData.data.clientData.data.map((item, index)=>(
                  <a href = {item.link}>
                    <div className='content-card' key = {'client' + index}>
                      <Tooltip title = { item.text }>
                        <img src = {(process.env.REACT_APP_BASE_API_PATH + item.image)} alt = 'client' />
                      </Tooltip>
                    </div>
                  </a>
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }