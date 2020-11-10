import React, { useState, useMemo, useEffect } from "react";
import { PitchPlayer } from "../../styles/pitch";

const POSITION = { x: 0, y: 0 };

const Draggable = ({ children, id, defaultPlayerPos }) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: defaultPlayerPos || POSITION,
    translation: defaultPlayerPos || POSITION,
  });

  const handleMouseDown = ({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    const translation = {
      x: Math.min(
        Math.max(state.translation.x + (clientX - state.origin.x), 0),
        384
      ),
      y: Math.min(
        Math.max(state.translation.y + (clientY - state.origin.y), 0),
        552
      ),
    };
    setState((state) => ({
      ...state,
      translation,
    }));
  };

  const handleMouseUp = () => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
  };

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [state.isDragging]);

  const styles = useMemo(
    () => ({
      cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
      transition: state.isDragging ? "none" : "transform 500ms",
    }),
    [state.isDragging, state.translation]
  );

  return (
    <PitchPlayer
      style={styles}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {children}
    </PitchPlayer>
  );
};

export default Draggable;
