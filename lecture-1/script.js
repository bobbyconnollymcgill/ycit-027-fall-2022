console.log("hello world");
const theDiv = document.createElement("div");

theDiv.style.height = "100px";
theDiv.style.width = "100px";
theDiv.style.backgroundColor = "red";

document.body.appendChild(theDiv);

setTimeout(() => {
  document.body.removeChild(theDiv);
}, 3000);

const canvas = document.createElement("canvas");
canvas.id = "taco-canvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "purple";

ctx.fillPath();
ctx.ellipse(100, 100, 50, 50, 0, 0, 2 * Math.PI);
ctx.stroke();

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 150, 100);

navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
