[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity is $\Theta(n!)$ because there are $n!$ number of permutations, and though all possible permutations won't always be given when using this method, it can't be bounded by anything other than that factor. 
Best case input for this algorithm is $\Theta(n)$ if the input array is already sorted. The worst case is $\Theta(n!)$ as this would require every permutation to be tried before the sorted permutation is generated.
When generating random permutations, the in practice time complexity could change, because the chances for randomly choosing the sorted permutation is $\frac{1}{n!}$. But asymptotically this can't be guarenteed, and the time complexity when choosing randomly would still be $\Theta(n!)$. 
