// const cards = document.querySelectorAll('#card1', '#card2', '#card3');
const cards = document.getElementsByClassName('card');
// const extraInfo = document.querySelectorAll('#extra_info1', '#extra_info2', '#extra_info3');
const extraInfo = document.getElementsByClassName('extra_info');

for (let i = 0; i < cards.length; i++) {

    console.log(cards);
    cards[i].addEventListener('click', function () {
        // Toggle visibility of the corresponding extra info element
        if (extraInfo[i].style.display === 'block') {
            extraInfo[i].style.display = 'none';
        } else {
            extraInfo[i].style.display = 'block';
        }
    });
    cards[i].addEventListener('mouseover', () => {
        cards[i].style.cursor = 'pointer';
        cards[i].style.background = '#ccc';
    });
    cards[i].addEventListener('mouseout', () => {
        cards[i].style.cursor = 'default';
        cards[i].style.background = '#fff';
    });

}

Sortable.create(stopList, {
    animation: 100,
    group: 'list-1',
    draggable: '.list-group-item',
    handle: '.list-group-item',
    sort: true,
    filter: '.sortable-disabled',
    chosenClass: 'active'
});

