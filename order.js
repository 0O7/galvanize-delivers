document.addEventListener('DOMContentLoaded', function() {

  let $button = $('.btn');
  let $body = $("tbody");

  let $total = $("#total");
  let $subtotal = $('#subtotal');
  let $tax = $('#tax');

  let subtotal = 0;
  let tax = 0.0825;
  let total = 0;


  //vanilla JS button.addEventListener("click",function(){
  $button.click(function(event) {
    event.preventDefault();


    if ($(this).hasClass('pie')) {
      
      let $itemHeading = $("<th>").text("Arugula Pie");
      let $itemPrice = $("<td>").text('$11.99');
      $itemPrice.addClass('text-right');
      let $row = $("<tr>");
      $body.append($row);
      $row.append($itemHeading);
      $row.append($itemPrice);
      subtotal += 11.99;
      total += 11.99;
      $subtotal.text(`$${(subtotal)}`);
      $tax.text(`$${(tax*subtotal).toFixed(2)}`);
      $total.text(`$${(parseFloat(total) + parseFloat((tax*subtotal).toFixed(2)))}`);


    } else if ($(this).hasClass('cheese')) {

      let $itemHeading = $("<th>").text("Royale with Cheese");
      let $itemPrice = $("<td>").text('$8.99');
      $itemPrice.addClass('text-right');
      let $row = $("<tr>");
      $body.append($row);
      $row.append($itemHeading);
      $row.append($itemPrice);
      subtotal += 8.99;
      total += 8.99;
      $subtotal.text(`$${(subtotal)}`);
      $tax.text(`$${(tax*subtotal).toFixed(2)}`);
      $total.text(`$${(parseFloat(total) + parseFloat((tax*subtotal).toFixed(2)))}`);

    } else if ($(this).hasClass('ribs')) {

      let $itemHeading = $("<th>").text("Smoked Swine");
      let $itemPrice = $("<td>").text('$14.99');
      $itemPrice.addClass('text-right');
      let $row = $("<tr>");
      $body.append($row);
      $row.append($itemHeading);
      $row.append($itemPrice);
      subtotal += 14.99;
      total += 14.99;
      $subtotal.text(`$${(subtotal)}`);
      $tax.text(`$${(tax*subtotal).toFixed(2)}`);
      $total.text(`$${(parseFloat(total) + parseFloat((tax*subtotal).toFixed(2)))}`);

    } else if ($(this).hasClass('icecream')) {
      console.log("we have icecream!");
      let $itemHeading = $("<th>").text("Ice Cream Biscut");
      let $itemPrice = $("<td>").text('$7.99');
      $itemPrice.addClass('text-right');
      let $row = $("<tr>");
      $body.append($row);
      $row.append($itemHeading);
      $row.append($itemPrice);
      subtotal += 7.99;
      total += 7.99;
      $subtotal.text(`$${(subtotal)}`);
      $tax.text(`$${(tax*subtotal).toFixed(2)}`);
      $total.text(`$${(parseFloat(total) + parseFloat((tax*subtotal).toFixed(2)))}`);
    }
  })
  // submit button
  $('button').click(function(event) {
    event.preventDefault('');

    $body.empty();
    $('form')[0].reset();

    alert("Order submitted!");


  })


});
