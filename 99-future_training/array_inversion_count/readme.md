Future training/ArrayInversionCount
------------------------
Compute number of inversion in an array.

Link: https://app.codility.com/programmers/lessons/99-future_training/array_inversion_count/
Difficulty: diff-2

An array A consisting of N integers is given. An inversion is a pair of indexes (P, Q) such that P < Q and A[Q] < A[P].
Write a function:
function solution(A);
that computes the number of inversions in A, or returns −1 if it exceeds 1,000,000,000.
For example, in the following array:
 A[0] = -1 A[1] = 6 A[2] = 3
 A[3] =  4 A[4] = 7 A[5] = 4
there are four inversions:
   (1,2)  (1,3)  (1,5)  (4,5)
so the function should return 4.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].



Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.