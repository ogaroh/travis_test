function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const CURRENT_ENV = process.env.CURRENT_ENV;

async function main() {
  while (true) {
    console.log(`Microservice currently running on ${CURRENT_ENV}!`);
    await sleep(5000);
  }
}

main();
