// this is the entry point
// we import the build output of module Main and run main
function main() {
  require("./output/Main").main();
}

// why this code? because we use parcel
// read through https://parceljs.org/
if (module.hot) {
  module.hot.dispose(function() {
    console.log("dispose");
  });

  module.hot.accept(function() {
    console.log("accept");
    document.body.innerHTML = ''
    main();
  });
}

main();
