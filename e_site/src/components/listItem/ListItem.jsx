import React from 'react'
import './ListItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from 'react';

function ListItem({index}) {
    const [isHover , setIsHover] = useState(false);
    const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className='listItem'
    style={{left : isHover && index * 225 -50 + index*2.5}}
     onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)} >
        <img src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />

        {isHover && (
        <>
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
                <ThumbDownOffAltOutlinedIcon className='icon' />
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit' >+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempora obcaecati rerum!
            </div>
            <div className="genre">Action</div>
        </div>
        </>
        )}
    </div>
  )
}

export default ListItem