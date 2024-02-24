'use client'
import React, {useRef, useState} from "react";

const Sound2 = () => {
    const audioRef1 = useRef(null);
    const play = () => {
        if (audioRef1.current) {
            //@ts-ignore
            audioRef1.current.play();
        }
    };
    return (
        <>
            <button className={`w-24 h-8 bg-black text-white rounded-xl m-3`} onClick={play}>Sound 1</button>
            <audio ref={audioRef1} src={'/sound.wav'}/>
        </>
    )
        ;
};
export default Sound2;