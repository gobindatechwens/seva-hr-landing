"use client"
import React from "react"
import styled from "styled-components"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"

const Section = styled.section({
  paddingBlock: "3.5rem",
})

const SectionRow = styled.div({
  display: "flex",
  alignItems: "flex-start",
  gap: "2.5rem",
})

const Left = styled.div({
  width: "30%",

  "& h2": {
    fontSize: "1.688rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },
})

const Right = styled.div({
  width: "70%",
  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
  "& .logo-swiper .swiper-wrapper": {
    transitionTimingFunction: "linear !important",
  },
})

const logos = [
  "/logos/spotify.svg",
  "/logos/airbnb.svg",
  "/logos/google.svg",
  "/logos/slack.svg",
  "/logos/microsoft.svg",
]

export default function Organizations() {
  return (
    <Section>
      <div className="container">
        <SectionRow>
          <Left>
            <span>⭐⭐⭐⭐⭐</span>
            <h2>Trusted by 15+ organizations</h2>
          </Left>
          <Right>
            <Swiper
              dir="rtl" 
              modules={[Autoplay, FreeMode]}
              slidesPerView="auto"
              spaceBetween={56}
              loop={true}
              freeMode={{
                enabled: true,
                momentum: false,
              }}
              speed={7000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              className="logo-swiper"
            >
              {[...logos, ...logos].map((logo, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <Image
                    src={logo}
                    alt="organization logo"
                    width={120}
                    height={40}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Right>
        </SectionRow>
      </div>
    </Section>
  )
}
