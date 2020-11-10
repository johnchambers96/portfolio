import { PitchPlayer } from "../../styles/pitch";
import Draggable from "./draggable";
import {
  PitchShirt,
  PitchPlayerContainer,
  PitchPlayerNum,
  PitchPlayerName,
} from "../../styles/pitch";

const Player = ({ kitNum, defaultPlayerPos }) => {
  return (
    <Draggable
      id={kitNum}
      style={PitchPlayer}
      defaultPlayerPos={defaultPlayerPos}
    >
      <PitchPlayerContainer>
        <PitchShirt src={"./shirt.svg"} />
        <PitchPlayerNum>{kitNum}</PitchPlayerNum>
        <PitchPlayerName input={"name"} />
      </PitchPlayerContainer>
    </Draggable>
  );
};

export default Player;
