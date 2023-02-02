const markRead = document.querySelector('.right-header')
const unreadNotifications = document.querySelectorAll('.unread')
const redPinned = document.querySelectorAll('.red-pin')

markRead.addEventListener("click",()=>{
    unreadNotifications.forEach(unreadNotification => {
        unreadNotification.classList.remove("unread")
    });

    redPinned.forEach(pinned => {
        pinned.classList.remove("red-pin")
    });
})