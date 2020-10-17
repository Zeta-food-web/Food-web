// $(document).ready(function(){
//     $('.count').prop('disabled', true);
//        $(document).on('click','.plus',function(){
//         $('.count').val(parseInt($('.count').val()) + 1 );
//     });
//     $(document).on('click','.minus',function(){
//         $('.count').val(parseInt($('.count').val()) - 1 );
//             if ($('.count').val() == 0) {
//                 $('.count').val(1);
//             }
//         });
//  });

//  $(document).ready(function(){
//     $('.count1').prop('disabled', true);
//        $(document).on('click','.plus',function(){
//         $('.count1').val(parseInt($('.count1').val()) + 1 );
//     });
//     $(document).on('click','.minus',function(){
//         $('.count1').val(parseInt($('.count1').val()) - 1 );
//             if ($('.count1').val() == 0) {
//                 $('.count1').val(1);
//             }
//         });
//  });

function checkbox(){
  
    var checkboxes = document.getElementsByName('Starters');
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
       }
    }
    document.getElementById("show").value = checkboxesChecked;
  
  }