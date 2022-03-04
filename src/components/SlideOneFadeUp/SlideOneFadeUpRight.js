import React from 'react'
import SlideOneFadeUp from './SlideOneFadeUp'

export default function SlideOneFadeUpRight(props) {
    return (
        <SlideOneFadeUp in={props.in}>
            <h3>A path to full life by the art of holistic healthcare.</h3>
            <p className='p-small'>Professional Ayurvedic consultations for human and their
                animal friends by Dr. Juliane Merckens, MD.</p>
        </SlideOneFadeUp>

    )
}
