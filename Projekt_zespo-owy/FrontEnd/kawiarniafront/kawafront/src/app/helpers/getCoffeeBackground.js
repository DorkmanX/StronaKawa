function getBackground(name) {
  switch (name) {
    case "Mocca":
      const moccaBg = {
        background:
          "url(https://img.wallpapersafari.com/desktop/1920/1080/45/90/dCS7mf.jpg) center center",
      };
      return moccaBg;
    case "FlatWhite":
      const flatwhiteBg = {
        background:
          "url(https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80) center center",
      };
      return flatwhiteBg;
    case "Latte":
      const latteBg = {
        background:
          "url(https://images.unsplash.com/photo-1563090308-5a7889e40542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80) center center",
      };
      return latteBg;
    case "Americana":
      const americanoBg = {
        background:
          "url(https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80) center center",
      };
      return americanoBg;
    case "Espresso":
      const espressoBg = {
        background:
          "url(https://cdn.hipwallpaper.com/i/93/85/9U1NnJ.jpg) center center",
      };
      return espressoBg;

    case "YourOwn":
      const yourOwnBg = {
        background:
          "url(https://kernigkrafts.com/wp-content/uploads/2019/05/cafe-coffee-design-tasty.jpg) center center",
      };
      return yourOwnBg;
    default:
      break;
  }
}
export default getBackground;
