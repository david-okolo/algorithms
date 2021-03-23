const countdown = async (value: number): Promise<void> => {
  if (value === 0) {
    console.log("Liftoff");
    return;
  }

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Waited");
    }, 1000);
  });

  console.log(value--);

  return countdown(value);
};

countdown(30);
