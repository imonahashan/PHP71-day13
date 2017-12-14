$('#img2').click(function(){
    var img2SrcValue = $(this).attr('src');
    $('#mainImage').attr('src', img2SrcValue);
});

$('#img3').click(function(){
    var img2SrcValue = $(this).attr('src');
    $('#mainImage').attr('src', img2SrcValue);
});

$('#img4').click(function(){
    var img2SrcValue = $(this).attr('src');
    $('#mainImage').attr('src', img2SrcValue);
});

$('#img5').click(function(){
    var img2SrcValue = $(this).attr('src');
    $('#mainImage').attr('src', img2SrcValue);
});









function createHeadingParagraphElement(){
    var newHeadingElement = document.createElement('h1');
    var newParagraphElement = document.createElement('p');
    newHeadingElement.innerHTML = "This is a heading.";
    newParagraphElement.innerHTML = "This is a paragraph.";

    document.getElementById('div1').appendChild(newHeadingElement);
    document.getElementById('div1').appendChild(newParagraphElement);
}

document.getElementById('btn').onclick = function (){
    createHeadingParagraphElement();
}







$('#firstName').keyup(function () {
    var z = $('#firstName').val();
    $('#firstName1').val(z);
})

$('#secondName').keyup(function () {
    var y = $('#secondName').val();
    $('#secondName1').val(y);
})


$('#fullName').blur(function () {
    var a = $('#firstName1').val();
    var b = $('#secondName1').val();

    var c = a+" "+b;
    $('#fullName').val(c);
})
