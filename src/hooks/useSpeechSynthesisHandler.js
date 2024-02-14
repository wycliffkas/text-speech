import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const useSpeechSynthesisHandler = () => {
  const { speak, cancel, speaking } = useSpeechSynthesis();
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    const ssmlText = `<speak>${text}</speak>`;
    speak({ text: ssmlText });
  };

  const handleCancel = () => {
    cancel();
  };

  return { text, handleInputChange, handleSpeak, handleCancel, speaking };
};

export default useSpeechSynthesisHandler;
