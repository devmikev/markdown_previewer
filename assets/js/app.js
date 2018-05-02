var input = document.querySelector("#editor");

input.addEventListener("keyup", () => {
  document.getElementById('preview').innerHTML =
  marked(input.value);
});

$(document).ready(() => {
  input.value = '# H1 Element\n## H2 Element\nHere\'s a link to [GitHub](https://github.com)\n\nSome in-line code: `<p></p>` \n\n ```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == "```" && lastLine == "```") {\n    return multiLineCode;\n  }\n}```\n > Block Quotes!\n - List item: \n - some more \n - and more \n\n **bold text** \n ![Logo w/ Text](https://bit.ly/2rfDhUl)'
  document.getElementById('preview').innerHTML =
  marked(input.value);
});