// Immediately Invoked Function Expressions (IIFE)

// Explicitly SemiColon required
(function chai() {
  // Named IIFE
  console.log(`DB CONNECTED`);
})();

(function aurcode() {
  console.log(`DB CONNECTED TWO`);
})();
((name) => {
  // Unnamed IIFE
  console.log(`DB CONNECTED THREE ${name}`);
})("howard");
