import "./styles.css";

const heatWithTime = (timeMs) => {
  return new Promise((resolve, reject) => {
    if (isNaN(timeMs)) {
      reject("数値をして下さい");
    }
    setTimeout(() => {
      resolve("温め完了");
    }, timeMs);
  });
};

heatWithTime(50)
  .then((success) => {
    console.log(success);
  }) //温め完了
  .catch((fail) => {
    console.log(fail);
  }); //数値をしてしてください
