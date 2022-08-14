/* second question to find the minimum and the maximum element in the array*/

var testarr: number[] = [1, 43, 5, 98, 3, 66, 76,]

function getMinMax(arr: number[]): void {

  for (let i = 0; i < arr.length-1; i++) {


    for (let j = 0; j < arr.length-1; j++) {

      if (arr[j] > arr[j + 1]) {

        const test = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = test;
      }

    }
    
  }
  console.log(arr)
}
getMinMax(testarr);