import React, { useState } from "react";
import useSpeechSynthesisHandler from "../hooks/useSpeechSynthesisHandler";
// import { useSpeechSynthesis } from "react-speech-kit";

const Speech = () => {
	// const { speak, cancel, speaking } = useSpeechSynthesis();
	// const [text, setText] = useState("");

	// const handleInputChange = (event) => {
	// 	setText(event.target.value);
	// };

	// const handleSpeak = () => {
	// 	const ssmlText = `<speak>${text}</speak>`;
	// 	speak({ text: ssmlText });
	// };

	// const handleCancel = () => {
	// 	cancel();
	// };

  const {
    text,
    handleInputChange,
    handleSpeak,
    handleCancel,
    speaking,
  } = useSpeechSynthesisHandler();



	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<textarea
				value={text}
				onChange={handleInputChange}
				placeholder="Enter text to be spoken.."
			/>

			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={handleSpeak} disabled={speaking}>
					Speak
				</button>
				<button onClick={handleCancel} disabled={!speaking}>
					Stop
				</button>
			</div>
		</div>
	);
};

export default Speech;
