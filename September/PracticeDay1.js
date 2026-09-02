```js
// ============================================================
// Q1: Remove Duplicates from Sorted Array
// Pattern: Two Pointer (Scan + Write)
// ============================================================

function removeDuplicate(nums) {

  // x = last unique element ki position track karega
  let x = 0;

  // i = array ke har element ko one by one check karega
  for (let i = 0; i < nums.length; i++) {

    // Agar current element last unique element se bada hai,
    // to current element ek naya unique number hai
    if (nums[i] > nums[x]) {

      // x ko next position par move karo
      x++;

      // Current unique number ko x wali position par rakho
      nums[x] = nums[i];
    }
  }

  // x index hai, isliye unique elements ki count = x + 1
  return x + 1;
}

// console.log(removeDuplicate([1, 1, 2, 3, 3, 5]));
// Output: 4
// First 4 elements: [1, 2, 3, 5]


// ============================================================
// Q2: Remove Element
// Pattern: Two Pointer (Scan + Write)
// ============================================================

function removeElemet(nums, val) {

  // x = next position jahan valid element rakhna hai
  let x = 0;

  // i = array ko scan karega
  for (let i = 0; i < nums.length; i++) {

    // Agar current element val ke equal nahi hai,
    // to ye valid element hai aur ise rakhna hai
    if (nums[i] !== val) {

      // Valid element ko x wali position par rakho
      nums[x] = nums[i];

      // Next valid element ke liye x ko aage badhao
      x++;
    }

    // Agar nums[i] === val hai,
    // to kuch nahi karna → element skip
  }

  // x = total valid elements ki count
  return x;
}


// ============================================================
// Q3: Reverse String
// Pattern: Two Pointer (Opposite Ends + Swap)
// ============================================================

function reverseString(s) {

  // left = array ke starting index par
  let left = 0;

  // right = array ke last index par
  let right = s.length - 1;

  // Jab tak left aur right cross/mil nahi jaate,
  // tab tak characters swap karte rahenge
  while (left < right) {

    // left wale character ko temporarily save karo
    let temp = s[left];

    // right wale character ko left position par rakho
    s[left] = s[right];

    // saved left character ko right position par rakho
    s[right] = temp;

    // left ko ek step andar move karo
    left++;

    // right ko ek step andar move karo
    right--;
  }

  // In-place question hai, isliye return zaroori nahi
}

let s = ["h", "e", "l", "l", "o"];

reverseString(s);

console.log(s);
// Output: ["o", "l", "l", "e", "h"]
```

### 🧠 One-line revision

```text
Q1 → i scan karta hai, x unique position track karta hai
Q2 → i scan karta hai, x valid element ko place karta hai
Q3 → left/right opposite ends se swap karte hain
```

**Common pattern:** Two Pointer
**But pointer ka ROLE question ke according change hota hai.**
