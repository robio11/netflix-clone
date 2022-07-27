import React from 'react'
import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({type}) {
  return (
    <div className='featured' >
        {type && (
        <div className="category">
            <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
        </div>
        )}
        <img  src="https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />

        <div className="info">
            <img src="https://www.pngarts.com/files/9/Matrix-Logo-Transparent-Image.png" alt="" />
            <span className='desc' >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sequi voluptate, aliquam perspiciatis modi tempora repellendus esse labore! Similique beatae quam obcaecati quidem nobis? Porro?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured