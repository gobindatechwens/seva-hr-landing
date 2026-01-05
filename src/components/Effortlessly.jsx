"use client"
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import EffortlesslyImg from "../assets/EffortlesslyImg.png";
import SparkleBg from "../assets/sparkle.svg"
import Image from 'next/image';

// Reusable checkmark icon component
const CheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
    <path d="M14 24.5L21 31L34 17" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Section = styled.section({
  paddingBlock: "5rem",
  position: "relative",
  background: "linear-gradient(135deg, #FAFBFF 0%, #F0F4FF 50%, #FFF5F0 100%)",
  overflow: "hidden",
  "@media (max-width: 991px)": {
    paddingBlock: "3rem",
  },
});

// Flowing wave shape at top
const WaveTop = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "8rem",
  background: "#fff",
  clipPath: "ellipse(60% 100% at 50% 0%)",
  "@media (max-width: 767px)": {
    height: "4rem",
  },
});

// Floating decorative elements
const FloatingShape = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: "absolute",
  top: $top || "auto",
  left: $left || "auto",
  right: $right || "auto",
  width: $size || "6rem",
  height: $size || "6rem",
  borderRadius: "50%",
  background: $color || "rgba(71, 111, 255, 0.1)",
  filter: "blur(2rem)",
  animation: `floatShape 6s ease-in-out ${$delay || "0s"} infinite`,
  "@keyframes floatShape": {
    "0%, 100%": { transform: "translate(0, 0)" },
    "50%": { transform: "translate(1rem, -1rem)" },
  },
  "@media (max-width: 767px)": {
    display: "none",
  },
}));

const ContentWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1.1fr",
  gap: "4rem",
  alignItems: "center",
  position: "relative",
  zIndex: 2,
  "@media (max-width: 991px)": {
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
});

const LeftContent = styled.div({
  opacity: 0,
  transform: "translateX(-2rem)",
  transition: "all 0.8s ease",
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const Badge = styled.span({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  fontWeight: 600,
  fontSize: "0.9rem",
  lineHeight: 1.3,
  color: '#1a1a1a',
  borderRadius: '2rem',
  background: "linear-gradient(54.19deg, #D5FEFF 17.15%, #FFD5CA 109.72%)",
  padding: '0.625rem 1.25rem 0.625rem 2.8rem',
  position: 'relative',
  marginBlockEnd: "1rem",
  '&:after': {
    content: "''",
    position: 'absolute',
    height: '1.313rem',
    width: '1.5rem',
    left: '1rem',
    top: '50%',
    transform: "translateY(-50%)",
    backgroundImage: `url(${SparkleBg.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "contain",
    backgroundPosition: "center",
  }
});

const Title = styled.h2({
  fontSize: "2.5rem",
  fontWeight: 800,
  lineHeight: 1.2,
  marginBlockEnd: "1rem",
  background: 'linear-gradient(73.29deg, #9300AD 18.02%, #00BBFF 83.69%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  "@media (max-width: 767px)": {
    fontSize: "1.75rem",
  },
});

const Subtitle = styled.h3({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBlockEnd: "0.75rem",
  color: "#1a1a1a",
  "& span": {
    background: 'linear-gradient(73.29deg, #9300AD 18.02%, #00BBFF 83.69%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
});

const Description = styled.p({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#64748B",
  marginBlockEnd: "1.5rem",
  textAlign: "start",
});

const BenefitsList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: "0 0 2rem 0",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

const BenefitItem = styled.li({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontSize: "1rem",
  color: "#1a1a1a",
  fontWeight: 500,
  padding: "0.75rem 1rem",
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "0.75rem",
  backdropFilter: "blur(0.5rem)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "#fff",
    boxShadow: "0 4px 20px rgba(71, 111, 255, 0.1)",
    transform: "translateX(0.5rem)",
  },
  "& > div": {
    height: '1rem',
    width: '1rem',
    flexShrink: 0,
    "& svg": {
      height: '100%',
      width: '100%',
    }
  }
});

const CtaButton = styled.button({
  position: "relative",
  overflow: "hidden",
  padding: "1rem 2rem",
  borderRadius: "3rem",
  border: "none",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 700,
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "all 0.4s ease",
  boxShadow: "0 4px 20px rgba(71, 111, 255, 0.3)",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background: "linear-gradient(331.19deg, #476FFF 1.77%, #4600B6 71.94%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: 0,
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 30px rgba(71, 111, 255, 0.4)",
  },
  "&:hover::after": {
    opacity: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

// Right side with offset image
const RightContent = styled.div({
  position: "relative",
  opacity: 0,
  transform: "translateX(2rem)",
  transition: "all 0.8s ease 0.2s",
  "&.in-view": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const ImageContainer = styled.div({
  position: "relative",
  paddingTop: "2rem",
  paddingRight: "2rem",
  "@media (max-width: 991px)": {
    paddingTop: "1rem",
    paddingRight: "1rem",
  },
});

// Decorative frame behind image
const ImageFrame = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  width: "90%",
  height: "90%",
  borderRadius: "1.5rem",
  background: "linear-gradient(135deg, rgba(147, 0, 173, 0.1) 0%, rgba(0, 187, 255, 0.1) 100%)",
  border: "2px solid rgba(147, 0, 173, 0.15)",
});

const ImageWrapper = styled.div({
  position: "relative",
  borderRadius: "1.5rem",
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "contain",
  },
});

// Floating feature cards around image
const FloatingCard = styled.div(({ $top, $left, $right, $bottom, $delay }) => ({
  position: "absolute",
  top: $top || "auto",
  left: $left || "auto",
  right: $right || "auto",
  bottom: $bottom || "auto",
  background: "#fff",
  borderRadius: "1rem",
  padding: "0.75rem 1rem",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  animation: `floatCard 4s ease-in-out ${$delay || "0s"} infinite`,
  zIndex: 10,
  "@keyframes floatCard": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-0.5rem)" },
  },
  "@media (max-width: 991px)": {
    display: "none",
  },
}));

const CardIcon = styled.div(({ $bg }) => ({
  width: "2rem",
  height: "2rem",
  borderRadius: "0.5rem",
  background: $bg || "linear-gradient(135deg, #9300AD 0%, #00BBFF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "& svg": {
    width: "1rem",
    height: "1rem",
  },
}));

const CardText = styled.div({
  "& strong": {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#1a1a1a",
  },
  "& span": {
    fontSize: "0.65rem",
    color: "#64748B",
  },
});


const Effortlessly = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".animate")
            .forEach(el => el.classList.add("in-view"));
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef} id="effortlessly">
      <WaveTop />

      {/* Floating decorative shapes */}
      <FloatingShape $top="20%" $left="5%" $size="10rem" $color="rgba(147, 0, 173, 0.08)" $delay="0s" />
      <FloatingShape $top="60%" $right="10%" $size="8rem" $color="rgba(0, 187, 255, 0.1)" $delay="2s" />
      <FloatingShape $top="80%" $left="30%" $size="6rem" $color="rgba(71, 111, 255, 0.08)" $delay="4s" />

      <div className="container">
        <ContentWrapper>
          <LeftContent className="animate">
            <Badge>Effortlessly Simple for Everyone</Badge>
            <Title>A User-Friendly HRMS Anyone Can Operate</Title>
            <Subtitle><span>No training required</span> — SEVA HR is built with simplicity at its core.</Subtitle>
            <Description>
              SEVA HR is designed to make HR tasks effortless for every user, regardless of technical expertise.
              The clean, intuitive interface ensures that employees, managers, and HR teams can easily navigate
              the platform from day one.
            </Description>

            <Subtitle><span>Benefit Highlights</span></Subtitle>
            <BenefitsList role="list" aria-label="Benefits of SEVA HR">
              <BenefitItem>
                <div><CheckIcon /></div>
                Smart Automation
              </BenefitItem>
              <BenefitItem>
                <div><CheckIcon /></div>
                Zero Manual Work
              </BenefitItem>
              <BenefitItem>
                <div><CheckIcon /></div>
                Instant Insights
              </BenefitItem>
            </BenefitsList>

            <CtaButton type="button" aria-label="Book a free demo of SevaHR">
              <span>Book Free Demo</span>
            </CtaButton>
          </LeftContent>

          <RightContent className="animate">
            <ImageContainer>
              <ImageFrame />
              <ImageWrapper>
                <Image src={EffortlesslyImg} alt="SEVA HR intuitive dashboard interface" priority />
              </ImageWrapper>

              {/* Floating feature cards */}
              <FloatingCard $top="-1rem" $right="3rem" $delay="0s">
                <CardIcon $bg="linear-gradient(135deg, #4F6BFF 0%, #7B60FF 100%)">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CardIcon>
                <CardText>
                  <strong>Easy Setup</strong>
                  <span>Ready in 24hrs</span>
                </CardText>
              </FloatingCard>

              <FloatingCard $bottom="20%" $left="-2rem" $delay="1.5s">
                <CardIcon $bg="linear-gradient(135deg, #9300AD 0%, #00BBFF 100%)">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CardIcon>
                <CardText>
                  <strong>Instant Access</strong>
                  <span>No training needed</span>
                </CardText>
              </FloatingCard>

              <FloatingCard $bottom="-0.5rem" $right="20%" $delay="3s">
                <CardIcon $bg="linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CardIcon>
                <CardText>
                  <strong>Save Time</strong>
                  <span>80% less manual work</span>
                </CardText>
              </FloatingCard>
            </ImageContainer>
          </RightContent>
        </ContentWrapper>
      </div>
    </Section>
  )
}

export default Effortlessly
