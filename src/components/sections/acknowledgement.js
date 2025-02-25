import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAcknowledgementSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Acknowledgement = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAcknowledgementSection id="acknowledgement" ref={revealContainer}>
      <h2 className="numbered-heading overline">Acknowledgement</h2>
      <h2 className="title">Big thanks to...</h2> {/* Updated title */}
      <p>
        Brittany Chiang who made the{' '}
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer">
          incredible original site
        </a>
        . Without her open-source magic, this site wouldn't exist!
      </p>
    </StyledAcknowledgementSection>
  );
};

export default Acknowledgement;
