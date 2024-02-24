'use client'
import React, {useRef} from "react";

const Sound1 = () => {
    const audioRef = useRef(null)
    const play = () => {
        if (audioRef.current){
            //@ts-ignore
            audioRef.current.play()
        }
    }
    return (
        <>
            <button className={'w-24 h-8 bg-black text-white rounded-xl m-3'} onClick={play}>Play</button>

            <audio ref={audioRef} src={'/sound2.mp3'}/>
        </>
    )
        ;
};
export default Sound1;