import React, { useEffect, useRef } from 'react';
import bible from "../assets/images/bible.png";
import $ from 'jquery';
import '../tools/Typerwriter';
import { Link } from 'react-router-dom';

const Banner = () => {
    const typewriteTextRef = useRef(null);

    useEffect(() => {
        const typewriteText = typewriteTextRef.current;
        if (typewriteText) {
            $(typewriteText).typewrite({
                speed: 8,
                blinkSpeed: 2,
                showCursor: true,
                blinkingCursor: true,
                cursor: "|",
                selectedBackground: "#F1F1F1",
                selectedText: "#333333",
                actions: [
                    { type: 'Pray Everyday. Love Each Other' },
                    { delay: 1000 },
                    { remove: { num: 30, type: '' } },
                    { type: ' MUSENGE UBUDASIBA. MUKUNDANE' },
                    { delay: 1000 },
                    { remove: { num: 36, type: '' } },
                    { type: 'Pray Everyday. Love Each Other' },
                ],
            });
        }
    }, []);

    return (
        <>
            <div className="slider container-fluid">
                <div className="slider-inner big-padding">
                    <div className="container">
                        <div className="row text-center">
                            <div className="imgsc text-center mb-5">
                                <img className="sw-100" src={bible} alt="" />
                            </div>

                            <h1 className="text-white">
                                <div id="typewriteText" ref={typewriteTextRef}></div> Make the World More Peaceful
                            </h1>
                      
                            <p className="text-white">Embrace the faith, hope, love, and grace that bring peace, joy, and strength; trust in patience, forgiveness, and redemption; worship
                                with gratitude for blessings, obedience, and sacrifice, and live for the glory of eternit</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <a target="_blank" href='https://millacle.vercel.app/Login'>
                                    <button className="btn shadow-md btn-success">Connect With Us</button>
                                </a> &nbsp; &nbsp;
                                <a href='./signup'>
                                    <button className="btn shadow-md btn-success">Register to this website</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
