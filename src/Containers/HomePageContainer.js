import React from 'react'
import ProductSliderComponent from '../Components/ProductSliderComponent'
import SliderComponent from '../Components/SliderComponent'
import StoryComponent from '../Components/StoryComponent'

export default function HomePageContainer() {
    return (
        <div className="homepage-root">
            <StoryComponent />
            <SliderComponent />
            <ProductSliderComponent />
        </div>
    )
}
