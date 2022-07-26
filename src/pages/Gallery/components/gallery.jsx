import Tooltip from '../../../components/Tooltip/index.jsx';
import React from 'react';
// import Gallery1 from '../../../assets/img/gallery/exhibitor1.jpg';
// import Gallery2 from '../../../assets/img/gallery/exhibitor2.jpg';
// import Gallery3 from '../../../assets/img/gallery/exhibitor3.jpg';
// import Gallery4 from '../../../assets/img/gallery/exhibitor4.jpg';
// import Gallery5 from '../../../assets/img/gallery/exhibitor5.jpg';
// import Gallery6 from '../../../assets/img/gallery/featured-image-1.jpg';
// import Gallery7 from '../../../assets/img/gallery/featured-image-2.jpg';
// import Gallery8 from '../../../assets/img/gallery/featured-image-3.jpg';
// import Gallery9 from '../../../assets/img/gallery/featured-image-4.jpg';


// const galleryList = [
//   {
//     text: 'Nayerah',
//     img: Gallery1
//   },
//   {
//     text: 'Blossom',
//     image: Gallery2
//   },
//   {
//     text: 'Doll UP',
//     image: Gallery3
//   },
//   {
//     text: 'Gems',
//     image: Gallery4
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery5
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery6
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery7
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery8
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery9
//   },
//   {
//     text: 'Hemanthshree',
//     image: Gallery1
//   },
// ]



export default function Gallery(props) {
    return (
      <div className='hor-row gallery-us-container-main'>
        <div className='hor-row gallery-us-back-image'>
          <div className='gallery-content-back'>
            <div>
              Snippets Of Our Past Exhibitions
            </div>
          </div>

        </div>
        <div className='hor-row gallery-us-content-main'>
          <div className='hor-row container-main'>
            <h3>
              GALLERY
            </h3>
            <div className='hor-row under-line-content'>
              <span/>
            </div>
            <div className='hor-row gallery-content'>
              { props.store.cacheData.data.galleryData.data.map((item, index)=>(
                  <div className='content-card' key = {'gallery' + index}>
                    <Tooltip title = { item.text }>
                      <img src = {(process.env.REACT_APP_BASE_API_PATH + item.image)} alt = 'gallery' />
                    </Tooltip>
                  </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }