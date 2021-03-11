const practice = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3, 4]);
    reject("Things went wrong!!!");
  }, 2000);
});

practice
  .then((res) => {
    console.log("Success!!!", res);
  })
  .catch((err) => {
    console.log(err);
  });
