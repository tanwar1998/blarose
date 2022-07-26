import React from 'react';
import CarosuleComponent from '../../../components/CarosuleComponent/index.jsx';



export default function LandingComponent(props) {
    return (
      <div className='hor-row landing-slider-container'>
        <CarosuleComponent
            style = {{height: 'calc(100vh - 95px)'}}>
            {
                props.store.cacheData.data.slidesData.data?.map((data)=>(
                    <div className='hor-row slider-img-container'>
                        <img src = { data.local ? data.image : (process.env.REACT_APP_BASE_API_PATH + data.image) } alt = 'slider'/>
                        <div className='hor-row img-outer'>
                            <div className='hor-row landing-text'>
                                { data.text?.toUpperCase() }
                            </div>
                        </div>
                    </div>
                ))
            }
        </CarosuleComponent>
      </div>
    );
  }