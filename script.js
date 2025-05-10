const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (word) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanWord === Array.from(cleanWord).reverse().join("");
}

checkBtn.addEventListener("click", () => {
    if (textInput.value.length === 0) return alert("Please input a value");
    result.innerText = `${textInput.value} ${isPalindrome(textInput.value) ? "is a" : "is not a"} palindrome!`
})
