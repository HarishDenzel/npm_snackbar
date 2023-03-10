import { EventRegister } from "react-native-event-listeners";


export const Snack = (messsage,type) => {
    EventRegister.emit("openSnackbar", {
        type: type,
        message: messsage,
      });
  };
  