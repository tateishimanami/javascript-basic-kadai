// HTML要素を取得
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// ボタンがクリックされたときの処理
btn.addEventListener("click", function () {
    setTimeout(function () {
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});