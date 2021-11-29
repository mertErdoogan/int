import React from 'react'
import DoubleContentComponent from '../Components/DoubleContentComponent'
import FooterComponent from '../Components/FooterComponent'
import ProductSliderComponent from '../Components/ProductSliderComponent'
import SliderComponent from '../Components/SliderComponent'
import StoryComponent from '../Components/StoryComponent'

export default function HomePageContainer() {
    return (
        <div className="homepage-root">
            <StoryComponent />
            <SliderComponent />
            <ProductSliderComponent />
            <DoubleContentComponent />
            <FooterComponent />
        </div>
    )
}
