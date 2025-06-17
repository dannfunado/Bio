// Simple log y lugar para futuras animaciones JS
console.log('UGC gamer site ready');

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("SW registrado:", reg.scope))
      .catch(err => console.error("SW error:", err));
  });
}
