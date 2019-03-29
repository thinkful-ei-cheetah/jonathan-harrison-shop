let shoppingitems = [];

let STORE = [ {name: "apples", checked: false}, {name: "oranges", checked: false}, {name: "milk", checked: true}, {name: "bread", checked: false} ];


function renderShoppingList()
{
    // have access to STORE
    let renderItems=[];
    for (i=0; i<STORE.length; i++)
    {
        renderItems.push(templateBuilder(STORE[i]));
    }
    $('.shopping-list').html(renderItems);

}

function templateBuilder(item)
{
    const checkedClass = item.checked ? 'shopping-item__checked' : '';

    return `
      <li class="js-item-index-element">
        <span class="shopping-item js-shopping-item ${checkedClass}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
     </li>
    `;

}


function handleNewItemSubmit()
{

    const item_name = $('input#shopping-list-entry').val();
    $('input#shopping-list-entry').val('');
    STORE.push({name: item_name, checked: false});
    renderShoppingList();

}

function handleItemCheckClicked(clickType, name)
{
    const found =  STORE.find((item) => item.name === name);
    found.checked = !found.checked;
    renderShoppingList();
}

function handleDeleteItemClicked(name)
{
    STORE = STORE.filter((item) => item.name !== name);
    renderShoppingList();
}



$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        handleNewItemSubmit(event);
    })
});



$(function () {
    $('.shopping-list').on( "click", ".shopping-item-toggle", function(event) {   
       handleItemCheckClicked(event.currentTarget.outerText, $( this ).parent().siblings().text());
      });
});

$(function () {
    $('.shopping-list').on( "click", ".shopping-item-delete", function() {
        handleDeleteItemClicked($( this ).parent().siblings().text());
        
      });
});

$(renderShoppingList);