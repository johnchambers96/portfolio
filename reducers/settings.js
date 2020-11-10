const initialState = {
  playerCount: 11,
  formation: "4-3-3",
  "kit-colors": {
    primary: "red",
    secondary: "white",
    "text-color": "white",
  },
  "optional-title": {
    text: null,
    position: "top",
  },
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default settings;
