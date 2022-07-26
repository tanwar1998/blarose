import React from 'react';
import Story from '../../../assets/img/title-bottom.png';


// const story = [
//   {
//     text: '20 + Shows in 2 years of conceptualisation'
//   },
//   {
//     text: 'Shows delivered in 3 cities: Gurugram, Dehradun, Faridabad'
//   },
//   {
//     text: '1000 + Brands participated and exhibited'
//   },
//   {
//     text: '50,000 + Footfalls'
//   }
// ]

export default function SuccessStory(props) {
    return (
      <div className='hor-row container-main success-story-container'>
        <h2>OUR SUCCESS STORIES</h2>
        <div className='hor-row success-story-img-container'>
          <img src= {Story} alt='story'/>
        </div>
        <div className='hor-row success-story-card-container'>

          {props.store.cacheData.data.successStoryData.data?.map((item, index) => (
            <div className='hor-row success-story-card' key = {'story'+index}>
            <div className='hor-row card-main'>
              <div className='card-static-back'></div>
              <div className='hor-row card-number'>
                { '0' + (index + 1)}
              </div>
              <div className='hor-row card-text'>
                 { item.text }
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    );
  }