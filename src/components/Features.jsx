"use client"
import React from "react"
import styled from "styled-components"
import SparkleBg from "../assets/sparkle.svg"
import Image from "next/image"
import calculator from "../assets/calculator.svg"
import location from "../assets/location.svg"
import privacy from "../assets/privacy.svg"
import watch from "../assets/watch.svg"

// Reusable checkmark icon component
const CheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#4F6BFF" />
    <path d="M14 24.5L21 31L34 17" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reusable arrow icon component
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M5.33325 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Section = styled.section({
  paddingBlock: "4rem",
  background: "#F8FAFC",

  "& .centerized": {
    display: "flex",
    justifyContent: "center",
  },
  "& h3": {
    fontWeight: 600,
    lineHeight: 1.3,
    color: '#1a1a1a',
    marginBlockEnd: "0.625rem",
    borderRadius: '1.875rem',
    background: "linear-gradient(90deg, #EEF6FF 0%, #FFF9EE 100%)",
    padding: '0.625rem 1.25rem 0.625rem 2.8rem',
    display: 'inline-block',
    position: 'relative',
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
      backgroundPosition:"center",
    }
  },
  "& h2": {
    textAlign: 'center',
    marginBlockEnd: '0.938rem',
    '& span': {
      background: 'linear-gradient(90deg, #FF6600 0%, #7B60FF 80.8%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    }
  },
  "& p": {
    textAlign: 'center',
  }
});


const FeatureList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100%",
  marginBlockStart: "2rem",
  '& li': {
    width: "calc((100% - 6rem) / 4)",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (max-width: 991px)": {
      width: "calc((100% - 2rem) / 2)",
    },
    "@media (max-width: 575px)": {
      width: "100%",
    },
    "&:hover .IconWrap": {
      opacity: 0,
      transform: "translateY(-1rem)",
      transition: "all 0.75s ease",
    },
    "&:hover .FeatureItem": {
      background: "linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
      transition: "all 1s ease",
      "& h4, p": {
        transform: "translateY(-3rem)",
        color: "#fff",
      },
      "& h5, span": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  }
});

const FeatureItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  transition: "all 0.5s ease",
  '& h4': {
    fontWeight: '700',
    marginBlockEnd: '0.5rem',
    maxWidth: '80%',
    transition: "all 0.45s ease",
  },
  '& p': {
    marginBlockEnd: '0rem',
    fontSize: '0.875rem',
    maxWidth: '80%',
    textAlign: 'start',
    lineHeight: '1.7',
    transition: "all 0.45s ease",
  },
  "& h5": {
    fontWeight: 600,
    lineHeight: 1.3,
    marginBlock: "0.625rem",
    borderRadius: '1.875rem',
    backgroundColor: '#fff',
    padding: '0.625rem 1.25rem 0.625rem 2.5rem',
    display: 'inline-block',
    position: 'relative',
    opacity: 0,
    transform: "translateY(3rem)",
    transition: "all 0.45s ease",
    '&:after': {
      content: "''",
      position: 'absolute',
      height: '1rem',
      width: '1rem',
      left: '1rem',
      top: '50%',
      transform: "translateY(-50%)",
      backgroundImage: `url(${SparkleBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "contain",
      backgroundPosition:"center",
    }
  },
  "& span": {
    height: "2rem",
    width: "2rem",
    display: "flex",
    alignItems: "center",
    opacity: 0,
    transform: "translateY(3rem)",
    transition: "all 0.45s ease",
    "& svg": {
      height: "100%",
      width: "100%",
    }
  }
});

const IconWrap = styled.div({
  width: "3.625rem",
  height: "3.625rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  marginBlockEnd: "0.938rem",
  transition: "all 0.45s ease",
  "& img": {
    height: "100% !important",
    width: "100% !important",
  }
})


const StatItem = styled.div({
  background: "#fff",
  borderRadius: "1rem",
  padding: "1.5rem",
  height: "100%",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  '& h4': {
    marginBlockEnd: '0rem',
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #476FFF 0%, #7B60FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  },
  '& p': {
    textAlign: 'start',
    marginBlockEnd: '0rem',
    color: '#64748B',
  }
});
const CtaList = styled.div({
  "& h4": {
    fontSize: "1.875rem",
    marginBlockEnd: "0.5rem",
    fontWeight: "700",
  },
  "& p": {
    textAlign: "start",
  },
  "& ol": {
    padding: "0rem",
    margin: "0rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "& li": {
      fontSize: " 1rem",
      width: "100%",
      display: 'flex',
      gap: "0.5rem",
      flexDirection: "row",
      "& div": {
        height: '0.875rem',
        width: '0.875rem',
        "& svg": {
          height: '100%',
          width: '100%',
        }
      }
    },
  }
});

const CtaButton = styled.button({
  position: "relative",
  overflow: "hidden",
  padding: "1rem 1.5rem",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  maxWidth: "14.375rem",
  color: "#fff",
  fontSize: "1.125rem",
  fontWeight: 700,
  background:"linear-gradient(151.19deg, #476FFF 1.77%, #4600B6 71.94%)",
  transition: "color 0.35s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left:"0",
    top:"0",
    height:"100%",
    width:"100%",
    borderRadius: "inherit",
    background: `linear-gradient(151.19deg, #D1FFFF 1.77%, #BFB6FF 71.94%)`,
    opacity: 0,
    transition: "opacity 0.45s ease",
    zIndex: 1,
  },
  "&:hover::after": {
    opacity: 1,
  },
  "&:hover": {
    color: "#000",
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
});

// Payroll icon SVG component (since email.svg doesn't match payroll)
const PayrollIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#476FFF" opacity="0.2"/>
    <path d="M12 6C10.9 6 10 6.9 10 8H8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 9.86 14.73 11.43 13 11.9V13H11V10H12C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z" fill="#476FFF"/>
    <path d="M11 15H13V17H11V15Z" fill="#476FFF"/>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#476FFF" strokeWidth="1.5" fill="none"/>
    <path d="M7 12H9M15 12H17" stroke="#476FFF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export default function Features() {
  return (
    <Section>
      <div className="container">
        <div className="centerized">
          <h3>Powerful Features</h3>
        </div>
        <h2>Built for <span>Operational Excellence</span></h2>
        <p>Purpose-built for shift-based, multi-location operations with transparent automation and real-time visibility</p>
        <FeatureList role="list" aria-label="Key features of SevaHR">
          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <Image src={watch} alt="" aria-hidden="true" />
              </IconWrap>
              <h4>Smart Attendance & Productivity</h4>
              <p>Automated time tracking with intelligent shift management and real-time insights</p>
              <h5>98.4% Accuracy</h5>
              <span><ArrowIcon /></span>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <Image src={calculator} alt="" aria-hidden="true" />
              </IconWrap>
              <h4>Transparent Salary Calculation</h4>
              <p>Auto-computed payroll with audit-ready accuracy, eliminating disputes completely</p>
              <h5>Zero Disputes</h5>
              <span><ArrowIcon /></span>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <PayrollIcon />
              </IconWrap>
              <h4>Multi-Level Payroll Engine</h4>
              <p>Scalable framework built specifically for factories with unlimited configurations</p>
              <h5>Unlimited Configs</h5>
              <span><ArrowIcon /></span>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <Image src={location} alt="" aria-hidden="true" />
              </IconWrap>
              <h4>Geo-Fencing & Live Tracking</h4>
              <p>Location-verified attendance with live workforce visibility for on-site accountability</p>
              <h5>Real-time GPS</h5>
              <span><ArrowIcon /></span>
            </FeatureItem>
          </li>

          <li>
            <FeatureItem className="FeatureItem">
              <IconWrap className="IconWrap">
                <Image src={privacy} alt="" aria-hidden="true" />
              </IconWrap>
              <h4>100% Compliance Automation</h4>
              <p>EPF, ESI, PT, LWF, TDS fully auto-generated with state-wise accuracy</p>
              <h5>100% Audit-Ready</h5>
              <span><ArrowIcon /></span>
            </FeatureItem>
          </li>

          <li>
            <StatItem>
              <h4>5+</h4>
              <p>Core Modules</p>
            </StatItem>
            <StatItem>
              <h4>Cloud</h4>
              <p>Based Platform</p>
            </StatItem>
          </li>
          <li>
            <StatItem>
              <h4>20+</h4>
              <p>Smart Features</p>
            </StatItem>
            <StatItem>
              <h4>99.9%</h4>
              <p>System Uptime</p>
            </StatItem>
          </li>
          <li>
            <CtaList>
              <h4>Ready to Transform?</h4>
              <p>Experience the future of manufacturing HR management</p>
              <ol>
                <li>
                  <div><CheckIcon /></div>
                  Free 14-day Trial
                </li>
                <li>
                  <div><CheckIcon /></div>
                  Setup in 24 Hours
                </li>
                <li>
                  <div><CheckIcon /></div>
                  Dedicated Support
                </li>
              </ol>
            </CtaList>
            <CtaButton type="button" aria-label="Book a free demo of SevaHR">
              <span>Book Free Demo</span>
            </CtaButton>
          </li>
        </FeatureList>
      </div>
    </Section>
  )
}
