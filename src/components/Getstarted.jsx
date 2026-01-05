"use client"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Section = styled.section({
  position: "relative",
  overflow: "hidden",
});

// Curved wave separator at top
const WaveSeparator = styled.div({
  position: "relative",
  height: "6rem",
  background: "linear-gradient(180deg, #F8FAFC 0%, #0F172A 100%)",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "#0F172A",
    clipPath: "ellipse(70% 100% at 50% 100%)",
  },
  "@media (max-width: 767px)": {
    height: "4rem",
  },
});

const MainContent = styled.div({
  background: "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
  paddingBlock: "4rem 5rem",
  position: "relative",
  "@media (max-width: 767px)": {
    paddingBlock: "3rem",
  },
});

// Animated floating orbs
const FloatingOrb = styled.div(({ $top, $left, $right, $size, $color, $delay }) => ({
  position: "absolute",
  top: $top || "auto",
  left: $left || "auto",
  right: $right || "auto",
  width: $size || "20rem",
  height: $size || "20rem",
  borderRadius: "50%",
  background: $color || "radial-gradient(circle, rgba(71, 111, 255, 0.2) 0%, transparent 70%)",
  filter: "blur(3rem)",
  animation: `orbFloat 8s ease-in-out ${$delay || "0s"} infinite`,
  pointerEvents: "none",
  "@keyframes orbFloat": {
    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
    "33%": { transform: "translate(2rem, -1rem) scale(1.1)" },
    "66%": { transform: "translate(-1rem, 1rem) scale(0.95)" },
  },
}));

// Grid pattern overlay
const GridOverlay = styled.div({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
  `,
  backgroundSize: "4rem 4rem",
  pointerEvents: "none",
});

const ContentWrapper = styled.div({
  position: "relative",
  zIndex: 2,
});

const HeaderSection = styled.div({
  textAlign: "center",
  marginBlockEnd: "3rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease",
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const Badge = styled.span({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "2rem",
  background: "rgba(71, 111, 255, 0.15)",
  border: "1px solid rgba(71, 111, 255, 0.3)",
  color: "#93AAFD",
  fontSize: "0.875rem",
  fontWeight: 600,
  marginBlockEnd: "1rem",
});

const Title = styled.h2({
  fontSize: "2.75rem",
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#fff",
  marginBlockEnd: "1rem",
  "& span": {
    background: "linear-gradient(90deg, #476FFF 0%, #7B60FF 50%, #FF6B6B 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  "@media (max-width: 767px)": {
    fontSize: "2rem",
  },
});

const Subtitle = styled.p({
  fontSize: "1.125rem",
  color: "rgba(255, 255, 255, 0.7)",
  maxWidth: "40rem",
  margin: "0 auto",
  lineHeight: 1.6,
});

// Horizontal steps with connecting line
const StepsSection = styled.div({
  marginBlockEnd: "3rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease 0.2s",
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const StepsTrack = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1rem",
  position: "relative",
  "@media (max-width: 991px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
});

// Connecting line between steps
const ConnectingLine = styled.div({
  position: "absolute",
  top: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "60%",
  height: "2px",
  background: "linear-gradient(90deg, transparent 0%, rgba(71, 111, 255, 0.3) 20%, rgba(123, 96, 255, 0.5) 50%, rgba(71, 111, 255, 0.3) 80%, transparent 100%)",
  "@media (max-width: 991px)": {
    display: "none",
  },
});

const StepCard = styled.div(({ $delay }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1.5rem",
  width: "14rem",
  background: "rgba(255, 255, 255, 0.03)",
  borderRadius: "1.5rem",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "all 0.4s ease",
  position: "relative",
  animation: `stepPulse 3s ease-in-out ${$delay || "0s"} infinite`,
  "@keyframes stepPulse": {
    "0%, 100%": { boxShadow: "0 0 0 0 rgba(71, 111, 255, 0)" },
    "50%": { boxShadow: "0 0 30px 5px rgba(71, 111, 255, 0.1)" },
  },
  "&:hover": {
    background: "rgba(255, 255, 255, 0.06)",
    borderColor: "rgba(71, 111, 255, 0.3)",
    transform: "translateY(-0.5rem)",
  },
  "@media (max-width: 991px)": {
    width: "100%",
    maxWidth: "20rem",
  },
}));

const StepNumber = styled.div({
  width: "4rem",
  height: "4rem",
  borderRadius: "1rem",
  background: "linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "1.5rem",
  color: "#fff",
  marginBlockEnd: "1rem",
  position: "relative",
  boxShadow: "0 10px 30px rgba(71, 111, 255, 0.3)",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-3px",
    borderRadius: "inherit",
    background: "linear-gradient(135deg, rgba(71, 111, 255, 0.5) 0%, rgba(123, 96, 255, 0.5) 100%)",
    zIndex: -1,
    filter: "blur(8px)",
  },
});

const StepTitle = styled.h4({
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "#fff",
  marginBlockEnd: "0.5rem",
});

const StepDescription = styled.p({
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.6)",
  marginBlockEnd: 0,
  lineHeight: 1.5,
});

// CTA Buttons section
const CtaSection = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  opacity: 0,
  transform: "translateY(1rem)",
  transition: "all 0.8s ease 0.4s",
  "&.in-view": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const ButtonGroup = styled.div({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
});

const PrimaryButton = styled.button({
  padding: "1rem 2.5rem",
  borderRadius: "3rem",
  border: "none",
  background: "#fff",
  color: "#0F172A",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "center",
  transition: "all 0.4s ease",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)",
  },
});

const SecondaryButton = styled.button({
  padding: "1rem 2.5rem",
  borderRadius: "3rem",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  background: "transparent",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "center",
  transition: "all 0.4s ease",
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.6)",
    background: "rgba(255, 255, 255, 0.08)",
    transform: "translateY(-3px)",
  },
});

const TrustText = styled.p({
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.5)",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& svg": {
    color: "#22C55E",
  },
});

// Bottom wave
const WaveBottom = styled.div({
  position: "relative",
  height: "4rem",
  background: "#F8FAFC",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "#0F172A",
    clipPath: "ellipse(70% 100% at 50% 0%)",
  },
});

export default function Getstarted() {
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

  const steps = [
    { number: "1", title: "Sign Up Free", description: "Create your account in under 2 minutes" },
    { number: "2", title: "Add Your Team", description: "Import or add employees with ease" },
    { number: "3", title: "Go Live", description: "Start managing HR in 24 hours" },
  ];

  return (
    <Section id="get-started">
      <WaveSeparator />

      <MainContent ref={sectionRef}>
        {/* Floating orbs */}
        <FloatingOrb $top="-10%" $left="-5%" $size="30rem" $color="radial-gradient(circle, rgba(71, 111, 255, 0.15) 0%, transparent 70%)" $delay="0s" />
        <FloatingOrb $top="20%" $right="-10%" $size="25rem" $color="radial-gradient(circle, rgba(123, 96, 255, 0.12) 0%, transparent 70%)" $delay="3s" />
        <FloatingOrb $top="60%" $left="30%" $size="20rem" $color="radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, transparent 70%)" $delay="5s" />

        <GridOverlay />

        <div className="container">
          <ContentWrapper>
            <HeaderSection className="animate">
              <Badge>Get Started Today</Badge>
              <Title>Ready to <span>Transform</span> Your HR?</Title>
              <Subtitle>
                Join hundreds of businesses simplifying their workforce management with SEVA HR.
                Setup takes less than 24 hours.
              </Subtitle>
            </HeaderSection>

            <StepsSection className="animate">
              <StepsTrack>
                <ConnectingLine />
                {steps.map((step, index) => (
                  <StepCard key={index} $delay={`${index * 0.5}s`}>
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepCard>
                ))}
              </StepsTrack>
            </StepsSection>

            <CtaSection className="animate">
              <ButtonGroup>
                <PrimaryButton type="button" aria-label="Get started with SevaHR for free">
                  Get Started Free
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </PrimaryButton>
                <SecondaryButton type="button" aria-label="Book a demo of SevaHR">
                  Book a Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                  </svg>
                </SecondaryButton>
              </ButtonGroup>

              <TrustText>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.5l7-7-1.414-1.414L10.5 13.672l-2.586-2.586L6.5 12.5l4 4z"/>
                </svg>
                No credit card required • Free 14-day trial • Cancel anytime
              </TrustText>
            </CtaSection>
          </ContentWrapper>
        </div>
      </MainContent>

      <WaveBottom />
    </Section>
  )
}
