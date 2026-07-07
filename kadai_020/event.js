// HTML要素を取得
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// ボタンがクリックされたときの処理
btn.addEventListener("click", function () {
    text.textContent = "ボタンをクリックしました";
});