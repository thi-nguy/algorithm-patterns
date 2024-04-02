/*
904. Fruit Into Baskets
https://leetcode.com/problems/fruit-into-baskets/description/

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length

*/
function totalFruit(fruits: number[]): number {
  let maxFruit = 0;
  let countFruit = 0;

  let type: { [key: number]: number } = {};
  for (let start = 0; start < fruits.length; start++) {
    if (!type[fruits[start]] && Object.keys(type).length < 2) {
      type[fruits[start]] = 1;
      countFruit++;
    } else if (type[fruits[start]]) {
      type[fruits[start]]++;
      countFruit++;
    } else {
      start -= type[fruits[start - 1]];
      type = {};
      type[fruits[start]] = 1;
      countFruit = 1;
    }
    if (countFruit > maxFruit) maxFruit = countFruit;
  }
  return maxFruit;
}

function totalFruitInterestingButNotReadable(fruits: number[]): number {
  let maxFruit = 0;
  let countFruit = 0;
  let lastFruitCount = 0;
  let lastFruit = -1;
  let secondLastFruit = -1;

  for (const fruit of fruits) {
    if (fruit === lastFruit || fruit === secondLastFruit) {
      countFruit++;
    } else {
      // find new fruit
      countFruit = lastFruitCount + 1;
    }

    // ! find new fruit and ?
    if (fruit !== lastFruit) {
      secondLastFruit = lastFruit;
      lastFruit = fruit;
      lastFruitCount = 1;
    } else {
      lastFruitCount += 1;
    }

    if (countFruit > maxFruit) maxFruit = countFruit;
  }
  return maxFruit;
}

const fruits = [0, 1, 6, 6, 4, 4, 6];
console.log(totalFruit(fruits));
