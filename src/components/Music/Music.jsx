import React from 'react';
import Playlist from "react-mp3-player/dist/icons/Playlist";
import {Niccolo_Paganini} from '../../assets/Music/Niccolo_Paganini.mp3'



const Music = (props) =>{
    return(
        <div>
            <Playlist tracks={tracks} opts={playlistOverideStylingOpts}/>

        </div >
    )
}
export default Music;



const tracks = [{ img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg',
    name:'MP3', desc: 'Description 1', src:{Niccolo_Paganini}}]

const playlistOverideStylingOpts = {
    offset : {
        left : 150
    },
    breakpoint : {
        maxWidth : 360
    }
};