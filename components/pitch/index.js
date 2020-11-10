import React from "react";
import Player from "./player";
import { PitchBG, PitchContainer, PitchUrl } from "../../styles/pitch";
import { FormationCoordinates } from "../../constants";

const Pitch = ({ pitchSettings }) => {
  for (let i = 0; i < pitchSettings.playerCount; i++) {}
  return (
    <PitchContainer>
      <PitchBG style={{ "background-image": `url(/pitch.svg)` }}>
        {Array(pitchSettings.playerCount)
          .fill()
          .map((_, i) => (
            <Player
              key={i}
              kitNum={i + 1}
              defaultPlayerPos={
                FormationCoordinates[pitchSettings.formation][i]
              }
            />
          ))}
        <PitchUrl>{"Sharemy11.com"}</PitchUrl>
      </PitchBG>
    </PitchContainer>
  );
};

export default Pitch;
