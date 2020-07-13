// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
var intersect = function(nums1, nums2) {
  const minArr = nums1.length >= nums2.length ? nums2 : nums1;
  const maxArr = nums1.length >= nums2.length ? nums1 : nums2;
  const len = minArr.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    const index = maxArr.indexOf(minArr[i]);
    if (index >= 0) {
      res.push(minArr[i]);
      maxArr.splice(index, 1);
    }
  }
  return res;
};

// console.log(intersect([4,9,5], [9,4,9,8,4]));
// console.log(intersect([1,2,2,1], [2,2,]));
// console.log(intersect([4,9,5,4,9], [9,4]));