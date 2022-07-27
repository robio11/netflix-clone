import React from 'react'
import './Watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
  return (
    <div className='watch' >
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
         <video className='video' autoPlay progress controls src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/3LFTQJc/videoblocks-happy-new-year-young-people-are-firing-bengal-lights-at-a-nightclub-they-are-celebrating-new-year-and-christmas_bddgfmyox__bf1d7502213788cd1517070f79385874__P360.mp4"/>
    </div>
  )
}

export default Watch