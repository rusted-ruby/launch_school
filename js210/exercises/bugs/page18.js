//what's wrong with this program for reading pages?
//we keep re-declaring currentPage. so we'll just start from page 1 after every time we
//drink a cup of coffee and never make it to the end.

//that's a lot of cups of coffee to finish this book.

const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();