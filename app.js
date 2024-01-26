let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let unreadMsg = document.querySelectorAll(".unread");
let clearNot = document.getElementById("clearNot");
let notifications = document.getElementById("notifications");
let notifyNumber = 3;

notifications.innerText = notifyNumber;

unreadMsg.forEach((msg) => {
    msg.addEventListener("click", function() {
        msg.classList.remove("bg-[#f6fbfc]");
        msg.classList.remove("shadow-sm");
        msg.classList.remove("cursor-pointer");
        if(msg.classList.contains("unread")) {
        if(notifyNumber >= 1 && notifyNumber <= 3) {
            notifyNumber-=1
            notifications.innerText = notifyNumber;
        }
        msg.classList.remove("unread");
    }
    })
})

clearNot.addEventListener("click", function() {
    unreadMsg.forEach((msg) => {
        msg.classList.remove("bg-[#f6fbfc]");
        msg.classList.remove("shadow-sm");
        msg.classList.remove("cursor-pointer");
        msg.classList.remove("unread");
        dot1.classList.add("hidden");
        dot2.classList.add("hidden");
        dot3.classList.add("hidden");
        notifications.innerText = 0;
    })
})

msg1.onclick = function() {
    dot1.classList.add("hidden");
}

msg2.onclick = function() {
    dot2.classList.add("hidden");
}

msg3.onclick = function() {
    dot3.classList.add("hidden");
}