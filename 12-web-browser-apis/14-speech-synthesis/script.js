const voiceSelect = document.getElementById("voice-select");
const synth = window.speechSynthesis;

let voices;

const addVoicesToSelect = () => {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} - ${voices[i].lang}`;

    if (voices[i].default) {
      option.textContent += `- DEFAULT`;
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
};

const onSubmit = (event) => {
  event.preventDefault();

  const textInput = document.getElementById("text-input");
  const utterThis = new SpeechSynthesisUtterance(textInput.value);

  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");

  for (let index = 0; index < voices.length; index++) {
    if (voices[index].name === selectedOption) {
      utterThis.voice = voices[index];
    }
  }

  synth.speak(utterThis);
};

addVoicesToSelect();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

document.getElementById("form").addEventListener("submit", onSubmit);
