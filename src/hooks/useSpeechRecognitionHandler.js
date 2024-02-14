import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const useSpeechRecognitionHandler = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    }
  });

  return { value, listen, listening, stop };
};

export default useSpeechRecognitionHandler;
