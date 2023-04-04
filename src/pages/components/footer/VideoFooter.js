import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className='videofooter'>
        <div className='videofooter__text'>
            <h3>@{name}</h3>
            <p>{description}</p>
            <div className='videofooter__music'>
                <MusicNoteIcon className='videofooter__icon'/>
                <div className='videofootermusic__text'>
                <p>{music}</p>                
                </div>
            </div>

        </div>
        <img 
            className='videofooter__record'
            alt='disco de vinil icone'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
        />
    </div>
  )
}

export default VideoFooter