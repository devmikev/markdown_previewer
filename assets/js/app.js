console.log("connected");

var editorInput = document.querySelector("#editor");
editorInput.addEventListener("keyup", () => {
  document.getElementById('preview').innerHTML =
  marked(editorInput.value);
});