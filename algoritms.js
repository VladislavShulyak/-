//Числа фибоначи
function recursive (n) {
	if (n<=2){
		return 1;
	} else {
		return recursive(n-1) + recursive (n-2);
	}
};

//система счисления
function docToBinary(decNumber) {
   let stack =[];
   let.binString = "";

   while(decNumber > 0) {
      let rem = decNumber % 2;
      stack.push(rem);
      decNumber = Math.floor(decNumber / 2);
   }

   while (stack.length) {
      binString = binString + stack.pop(); //
   }
   return binString;
}
//поиск максимального в массиве
   let array =[1,2,3,4,5,6,7,8,9,10,12,0,100];
   let max = array[0];
   let length = array.length;

   for(let i=1; i< length; i++) {
      if (array[i] > max) {
         max = array[i];
      }
   }

//Пузырьковая сортировочка
function BubbleSort(array){
   const length = array.length;
   for (let i = 0; i < length - 1; i++) {
      for (let j = 1; j < length - 1; j++){
         if(array[j-1] >  array [j]) {
             var temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;
         }
      } 
   }
   return array;
}

//Шейкерная сортировка
function ShakerSort (arr) {
   let swapped;
   do{
      for(let i = 0; i < arr.length - 2; i++) {
         if(arr[i] > arr [i+1]) {
            let tmp = arr[i];
            arr[i] = arr [i+1];
            arr[i+1] = tmp;
            swapped = true;
         }
      }
      if(!swapped) {
         break;
      }
      swapped = false;
      for(let i = arr.length - 2; i > 0; i--){
         if(arr[i] > arr[i+1]){
            let tmp = arr[i];
            arr[i] = arr [i+1];
            arr[i+1] = tmp;
            swapped = true;   
         }
      }
   } while(swapped);
   return arr;
}

//merge sort
function merge(left, right) {    //Вспомогательная 
   let result = [];

   while (left.length > 0 && right.length > 0) {
       if (left[0] < right[0]) {
           result.push(left.shift());
       } else {
           result.push(right.shift());
       }
   }

   return result.concat(left).concat(right);
  
}


function mergeSort(array) {     //Функция сортировки 
   if (array.length < 2) {
       return array;
   }

   let middle = Math.floor(array.length / 2);
   let left = array.slice(0, middle);
   let right = array.slice(middle);
   
   return merge(mergeSort(left), mergeSort(right));
}

//quicksort
function quickSort(array) {
   if (array.length < 2) {
       return array;
   }

   let a = [], b = [], p = array[0];

   for (let i = 1; i < array.length; i++) {
      if (array[i] < p) {
          a[a.length] = array[i];
      } else {
          b[b.length] = array[i];
      }    
   }

   return quickSort(a).concat(p, quickSort(b));
}
