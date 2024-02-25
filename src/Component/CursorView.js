import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  z-index: 9999999;
  transition: opacity 0.3s;
  pointer-events: none;
  position: fixed;
  width: 20px;
  height: 20px;
  opacity: 0;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;

  &:hover {
    opacity: 1;
  }
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const Cursor = () => {
  const cursorRef = useRef(null);

  const moveCursor = (pageX, pageY) => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '1';
      cursorRef.current.style.top = `${pageY - cursorRef.current.clientHeight / 2}px`;
      cursorRef.current.style.left = `${pageX - cursorRef.current.clientWidth / 2}px`;
    }
  };

  useEffect(() => {
    const handleMouseMove = (evt) => {
      moveCursor(evt.pageX, evt.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorContainer ref={cursorRef}>
      <Dot />
    </CursorContainer>
  );
};

export default Cursor;
