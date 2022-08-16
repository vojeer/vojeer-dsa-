// optimize solution for finding the min and max values of the array 

var arr = [3, 46, 75, 53, 100, 2, 46, 90];

function test(arr: number[]): void {
  let i = 0;
  if (arr.length % 2 == 0) {
    if (arr[0] > arr[1]) {
      var max = arr[0];
      var min = arr[1];
    } else {
      var min = arr[0];
      var max = arr[1];
    }
    i = 2;
  } else {
    var max = arr[0];
    var min = arr[0];

    i = 1;
  }

  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i + 1] < min) {
        min = arr[i + 1];
      }
    } else if (arr[i + 1] > max) {
      max = arr[i + 1];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    i = i + 2;

  
  }
  console.log(`this is max value : ${max} \n and this is min value : ${min}`);
}

test(arr);
