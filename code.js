function isSorted(a){

    for (i = 0; i < a.length; i++){
        if (a[i] < a[i-1]){
          return false;  
        }
    }
    return true;
}

function swap(arr, x, y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        swap(a, i, j);
    }
    return a;
}

function permutationSort(a) {

    if (a.length < 2){
        return 1;
    }
    var perms = 0;
    while(!isSorted(a)){
        a = shuffle(a, a.length);
        perms++;
    }
    return perms;
    
}

//work cited: https://www.geeksforgeeks.org/bogosort-permutation-sort/
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
