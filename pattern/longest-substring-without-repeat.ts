/*
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
  let maxStr = 0;
  let countStr = 0;
  let strType: { [key: string]: boolean } = {};

  for (let i = 0; i < s.length; i++) {
    if (!strType[s[i]]) {
      strType[s[i]] = true;
      countStr++;
    } else {
      let char = s[i];
      while (s[i - 1] != char) i--;
      countStr = 1;
      strType = {};
      strType[s[i]] = true;
    }

    if (countStr > maxStr) maxStr = countStr;
  }
  return maxStr;
}

function lengthOfLongestSubstringBetter(s: string): number {
  let max = 0;
  let left = 0;

  let charSet: { [key: string]: boolean } = {};

  for (let right = 0; right < s.length; right++) {
    while (charSet[s[right]]) {
      charSet[s[left]] = false; // ! remove char at left from charSet
      left++; //! move left until we meet char same as at right (s[left] === s[right])
    }
    charSet[s[right]] = true;
    if (right - left + 1 > max) max = right - left + 1;
  }
  return max;
}

const str = "anviaj";
console.log(lengthOfLongestSubstringBetter(str));
