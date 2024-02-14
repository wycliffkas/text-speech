import React, { useState } from "react";
// import { useSpeechRecognition } from "react-speech-kit";
import useSpeechRecognitionHandler from "../hooks/useSpeechRecognitionHandler";

const Listen = () => {
	// const [value, setValue] = useState("");

	// const { listen, listening, stop } = useSpeechRecognition({
	// 	onResult: (result) => {
	// 		setValue(result);
	// 	}
	// });

  const { value, listen, listening, stop, setValue } = useSpeechRecognitionHandler();

	return (
		<div>
			<p>Listen</p>
			<textarea
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<button onMouseDown={listen} onMouseUp={stop}>
				🎤
			</button>

			{listening && <div>Go ahead i'm listening</div>}
		</div>
	);
};

export default Listen;
