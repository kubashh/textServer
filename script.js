const element = document.getElementById("element");

element.textContent = "siema";
const socket = io("http://192.168.0.167:3000/");

socket.on("connect", () => {
  element.innerHTML = "";
  element.textContent += "works";
});

socket.on("text", (text) => {
  element.textContent += text;
});
