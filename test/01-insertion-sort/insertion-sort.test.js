const chai = require("chai");
const expect = chai.expect;

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;
    console.log("::::: j", j);
  }
}

// unit tests
// do not modify the below code
describe("Insertion Sort", function () {
  it("Should be sorted by insertionSort function", () => {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).to.have.ordered.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});