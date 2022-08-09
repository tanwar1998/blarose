import React from 'react';

const work = [
    {
        count: '1000+',
        text: 'EXHIBITORS'
    },
    {
        count: '16+',
        text: 'YEARS OF EXPERIENCE'
    },
    {
        count: '1000+',
        text: 'BRANDS'
    },
]

export default function Work(props) {
    return (
    <div className='hor-row work-done-container-main'>
            <div className='hor-row bottom-block'></div>
        <div className='hor-row container-main work-content-main'>
            { props.store.cacheData.data.experienceData.data.map((item, index) => (
                <div className='hor-row work-card' key = { 'work' + index}>
                    <h2>
                        { item.count }
                    </h2>
                    <div className='hor-row work-under-line-container'>
                        <div className='work-under-line'></div>
                    </div>
                    <div className='hor-row work-text'>
                        { item.text }
                    </div>
                </div>
            )) }
        </div>
    </div>
    );
  }