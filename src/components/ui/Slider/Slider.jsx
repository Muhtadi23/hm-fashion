'use client'
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";

const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <Image
                    src="/kids.webp"
                    alt="Category Banner"
                    width={1920}
                    height={40}
                    className="w-full object-cover"
                />
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image
                    src="/Men_s-Denim.webp"
                    alt="Category Banner"
                    width={1920}
                    height={40}
                    className="w-full object-cover"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image
                    src="/Regular-Polo.webp"
                    alt="Category Banner"
                    width={1920}
                    height={40}
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Slider;