let shoppingitems = [];

const STORE = [ {name: "apples", checked: false}, {name: "oranges", checked: false}, {name: "milk", checked: true}, {name: "bread", checked: false} ];


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

function handleItemCheckClicked()
{
    



}

function handleDeleteItemClicked()
{

}




$(handleShoppingList);

$(function () {
    $('#js-shopping-list-form').submit(event => {
        handleNewItemSubmit(event);
    })
});



$(function () {
    $('.shopping-list').on( "click", ".shopping-item-toggle", function(event) {

        
     //   handleItemCheckClicked(event.currentTarget.outerText, $( this ).parent().siblings().val());
        console.log($( this ).closest('.shopping-item').val());
        if (event.currentTarget.outerText==='check')
        {
            $( this ).parent().siblings().addClass('shopping-item__checked');
        } else{
            $( this ).parent().siblings().removeClass('shopping-item__checked');     
        }
          if (event.currentTarget.outerText==='check')
          {
            $( this ).text('uncheck');
          } else
          {
            $( this ).text('check');
          }

      });
});

$(function () {
    $('.shopping-list').on( "click", ".shopping-item-delete", function() {
        $( this )
        .closest( "li" ).remove();
        
      });
});
