function binarySearch(arr,elem){
    let start = 0;
    let end = arr.legnth;
    let middle = Math.floor((start + end)/ 2);

    while(arr[middle]!== elem && start < end){
        if(elem < arr[middle]) end = arr[middle] - 1;
            else start = arr[middle] + 1;
            middle = Math.floor((start + end)/2);
    }
    return arr[middle] === elem ? middle :-1;
}