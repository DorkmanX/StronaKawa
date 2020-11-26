function elementScrollIntoView(name) {
  document
    .querySelector(name)
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
export default elementScrollIntoView;
