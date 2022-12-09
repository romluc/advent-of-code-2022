function isGreaterThanOthersInLine(arr, row, col) {
  // Check if the item is greater than all the others behind it in the same column
  function greaterThanItemsBehindInCol() {
    for (let i = 0; i < row; i++) {
      if (arr[i][col] >= arr[row][col]) {
        return false;
      }
    }
    return true;
  }

  function greaterThanItemsAheadInCol() {
    // Check if the item is also greater than all the others ahead of it in the same column
    for (let i = row + 1; i < arr.length; i++) {
      if (arr[i][col] >= arr[row][col]) {
        return false;
      }
    }
    return true;
  }

  function greaterThanItemsBehindInRow() {
    // Check if the item is greater than all the others behind it in the same row
    for (let j = 0; j < col; j++) {
      if (arr[row][j] >= arr[row][col]) {
        return false;
      }
    }
    return true;
  }

  function greaterThanItemsAheadInRow() {
    // Check if the item is also greater than all the others ahead of it in the same row
    for (let j = col + 1; j < arr[row].length; j++) {
      if (arr[row][j] >= arr[row][col]) {
        return false;
      }
    }
    return true;
  }

  return (
    greaterThanItemsBehindInCol() ||
    greaterThanItemsAheadInCol() ||
    greaterThanItemsBehindInRow() ||
    greaterThanItemsAheadInRow()
  );
}

function howManyUntilEqualOrTaller(arr, row, col) {
  let itemsBehind = 0;
  let itemsAhead = 0;
  let itemsLeft = 0;
  let itemsRight = 0;
  let allItems = 0;

  for (let i = 0; i < row; i++) {
    if (arr[i][col] > arr[row][col]) itemsBehind++;
  }

  for (let i = row + 1; i < arr.length; i++) {
    if (arr[i][col] > arr[row][col]) itemsAhead++;
  }

  for (let j = 0; j < col; j++) {
    if (arr[row][j] > arr[row][col]) itemsLeft++;
  }

  for (let j = col + 1; j < arr[row].length; j++) {
    if (arr[row][j] > arr[row][col]) itemsRight++;
  }

  allItems = itemsBehind * itemsAhead * itemsLeft * itemsRight;

  return allItems;
}

module.exports = { isGreaterThanOthersInLine, howManyUntilEqualOrTaller };
