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

function shuffle(a, n){
    var i, j=n;
    for (i=0; i < n; i++){
        var ind = Math.floor(Math.random() * n);
        swap(a, j-i-1, ind);
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
