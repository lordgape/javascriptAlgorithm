function phone(number, callback) {
  callback();
}

const singAloud = () => {
  console.log("sing alound");
};

const vibrate = () => {
  console.log("Vibrate");
};

phone("2348184686719", singAloud);
phone("2348184686719", vibrate);
