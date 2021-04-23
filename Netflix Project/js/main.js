var tabItems = document.querySelectorAll(".tab-item");
var tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    var tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));