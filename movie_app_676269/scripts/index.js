// Store the wallet amount to your local storage with key "amount"

document.querySelector("#wallet").textContent = "₹ " + localStorage.getItem("amount")
function addToWallet(){
    let amount = document.querySelector("#amount").value
    amount = Number(localStorage.getItem("amount"))+Number(amount)
    document.querySelector("#wallet").textContent = "₹ " + amount
    localStorage.setItem("amount",amount)

    document.querySelector("#amount").value = null;
}
