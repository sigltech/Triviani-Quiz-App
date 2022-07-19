const defaultType = "";

export default function ClientType(state = defaultType, action) {
  switch (action.type) {
    case "SET_HOST":
      return "HOST";
    case "SET_PLAYER":
      return "PLAYER";
    case "RESET_TYPE":
      return defaultType;
    default:
      return state;
  }
};
