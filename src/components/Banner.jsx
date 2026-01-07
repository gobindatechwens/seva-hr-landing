"use client"

import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

/* ---------------- GLOBAL KEYFRAMES ---------------- */

const GlobalStyle = createGlobalStyle`
  @keyframes ringWave {
    0% {
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.6);
      opacity: 0;
    }
  }
`

/* ---------------- SECTION ---------------- */

const Section = styled.section({
  position: "relative",
  paddingBlock: "7rem 2rem",
  overflow: "hidden",
})

/* ---------------- RING BACKGROUND ---------------- */

const RingWrapper = styled.div({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
})

const AnimatedRing = styled.div(({ $delay, $opacity }) => ({
  position: "absolute",
  left: "50%",
  top: "90%",

  /* 👇 BIG base size so scaling reaches full width */
  width: "120vw",
  height: "120vw",
  maxWidth: "120vh",
  maxHeight: "120vh",

  borderRadius: "50%",
  transform: "translate(-50%, -50%) scale(0.2)",

  /* visible wave line */
  border: "1.5px solid rgba(120, 170, 255, 0.55)",
  opacity: $opacity,

  animation: "ringWave 9s ease-out infinite",
  animationDelay: $delay,
}))

/* ---------------- CONTENT ---------------- */

const Wrapper = styled.div({
  textAlign: "center",
  margin: "0 auto",
  maxWidth: "760px",
  position: "relative",
  zIndex: 1,
})

const Heading = styled.div({
  fontSize: "3.25rem",
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: "1.5rem",

  "@media (max-width: 768px)": {
    fontSize: "2.25rem",
  },
})

const GradientTextWrap = styled.span({
  display: "inline-block",
  height: "4rem",
  overflow: "hidden",
  verticalAlign: "bottom",

  "& .swiper": {
    height: "100%",
  },

  "@media (max-width: 768px)": {
    height: "3rem",
  },
})

const GradientText = styled.div({
  background: "linear-gradient(90deg, #FF4D00, #6B4EFF, #476FFF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% auto",
  animation: "gradientShift 3s ease infinite",

  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% center" },
    "50%": { backgroundPosition: "100% center" },
    "100%": { backgroundPosition: "0% center" },
  },
})

const ButtonGroup = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1.25rem",
  flexWrap: "wrap",
  marginTop: "2.5rem",
})

const PrimaryButton = styled.button({
  padding: "0.875rem 1.75rem",
  borderRadius: "0.875rem",
  border: "none",
  background: "linear-gradient(151deg, #476FFF, #4600B6)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
})

const SecondaryButton = styled.button({
  padding: "0.875rem 1.75rem",
  borderRadius: "0.875rem",
  background: "#fff",
  border: "2px solid #6B5CFF",
  fontWeight: 700,
  cursor: "pointer",
})

/* ---------------- COMPONENT ---------------- */

export default function Banner() {
  return (
    <>
      <GlobalStyle />

      <Section>
        {/* 🌊 FULL-WIDTH WATER RINGS */}
        <RingWrapper>
          <AnimatedRing $delay="0s" $opacity="0.18" />
          <AnimatedRing $delay="1.2s" $opacity="0.14" />
          <AnimatedRing $delay="2.4s" $opacity="0.10" />
        </RingWrapper>

        {/* CONTENT */}
        <div className="container">
          <Wrapper>
            <Heading>
              <h1>Powerful HRMS for</h1>
              <GradientTextWrap>
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  loop
                  modules={[Autoplay]}
                  autoplay={{ delay: 1800 }}
                  speed={800}
                  allowTouchMove={false}
                >
                  {[
                    "Shift-Based Industries",
                    "Workforce Fairness",
                    "High Productivity",
                  ].map((text, i) => (
                    <SwiperSlide key={i}>
                      <GradientText>{text}</GradientText>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </GradientTextWrap>
            </Heading>

            <p>
              Complete workforce management solution for complex, shift-based
              operations.
            </p>

            <ButtonGroup>
              <PrimaryButton>Get Started Free</PrimaryButton>
              <SecondaryButton>Watch Demo</SecondaryButton>
            </ButtonGroup>
          </Wrapper>
        </div>
      </Section>
    </>
  )
}
