// Function to chunk an array based on a specified maximum size
const chunk = (array, maxSize) => {
  // Array to store the chunks
  const chunked = [];

  // Loop through the elements in the array
  for (const element of array) {
    // Get the last chunk
    const last = chunked[chunked.length - 1];

    // If there is no last chunk or the last chunk is full, create a new chunk
    if (!last || last.length === maxSize) {
      chunked.push([element]);
    } else {
      // Add the element to the last chunk
      last.push(element);
    }
  }

  return chunked;
};

module.exports = chunk;
