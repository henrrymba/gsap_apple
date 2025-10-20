import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])
    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="Macbook Title"/>
            </div>

            <video 
                ref={videoRef} 
                src="/videos/hero.mp4" 
                autoPlay 
                muted 
                playsInline
                aria-label="MacBook Pro promotional video"
                onError={(e) => console.error('Video failed to load:', e)}
            >
                <track kind="captions" src="/videos/hero.vtt" srcLang="en" label="English" />
                Your browser does not support the video tag.
            </video>

            <button type="button" onClick={() => {/* Add buy functionality */}} aria-label="Buy MacBook Pro">
                Buy
            </button>

            <p>From 1599€ or 133€/mo for 12 months</p>
         </section>
    )
}
export default Hero
