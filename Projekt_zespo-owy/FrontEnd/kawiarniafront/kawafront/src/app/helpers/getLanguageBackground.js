function getBackground(name) {
  switch (name) {
    case "pl":
      const pl = {
        background:
          "url(https://image.flaticon.com/icons/svg/197/197529.svg) center center no-repeat",
      };
      return pl;
    case "en-US":
      const enUsBg = {
        background:
          "url(https://image.flaticon.com/icons/svg/197/197484.svg) center center no-repeat",
      };
      return enUsBg;
    case "de":
      const deBg = {
        background:
          "url(https://image.flaticon.com/icons/svg/197/197571.svg) center center no-repeat",
      };
      return deBg;
    default:
      break;
  }
}
export default getBackground;
