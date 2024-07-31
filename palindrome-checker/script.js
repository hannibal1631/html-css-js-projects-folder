const checkButton = document.getElementById('check-btn');
const enterInput = document.getElementById('text-input');
const result = document.getElementById('result');

// remove non-alphanumeric
const removeNonAlphanumeric = (text) => {
  return text.replace(/[\W_]/g, '').toLowerCase();
};

// check for palindrome
const checkPalindrome = (inputText) => {
  const actualInput = removeNonAlphanumeric(inputText);
  if (actualInput === 0) {
    return false;
  }
  const reversedInput = actualInput.split('').reverse().join('');
  return actualInput === reversedInput;
};

checkButton.addEventListener('click', () => {
  const userInput = enterInput.value;
  if (userInput.trim().length === 0) {
    alert('Please input a value');
  }
  const isPalindrome = checkPalindrome(userInput);
  isPalindrome
    ? (result.innerHTML = `<span class="user-input">${userInput}</span> is a palindrome`)
    : (result.innerHTML = `<span class="user-input">${userInput}</span> is not a palindrome`);
});
