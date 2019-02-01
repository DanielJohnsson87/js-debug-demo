/**
 * Get the .list div and all the .list__item's it contains.
 */
var listNode = document.getElementsByClassName('list'),
    listItems = listNode[0].getElementsByClassName('list__item');

/**
 * Loop all .list__item's and toggle it's class.
 * If the item has the class, remove it and the other way around.
 */
function toggleAllItemColors() {
    [...listItems].forEach(function (item) {
        // item.classList.toggle('list__item--selected');
        var elementIsSelected = item.className.indexOf('list__item--selected') >= 0;
        if(elementIsSelected) {
            item.classList.remove('list__item--selected');
        } else {
            item.classList.add('list__item--selected');
        }
    });
}


/**
 * Find the last .list__item and remove it.
 */
function removeLastItem() {
    var lastItem = listItems[listItems.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}


/**
 * Get all elements with the data attribute "data-click-listener" attached to them.
 * Loop that list and attach a event listener to those elements.
 * Fire a function every time a event happens
 */
var clickListeners = document.querySelectorAll('[data-click-listener]');
[...clickListeners].forEach(function(element) {
    element.addEventListener('click', function(event) {
        toggleClass(event.target);
        // debugger;
    });
});


/**
 * Give me any element and i'll toggle it's .list__item--selected class
 */
function toggleClass(element) {
    element.classList.toggle('list__item--selected')
}
