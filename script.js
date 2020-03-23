// // $("h1").hide()
// $("h1#heading1").hide()
// // $("h1.heading2").hide()
// $(".heading2").hide()

// // $("p span").css('color', 'red')

// $('ul#list li:first').css('color', 'blue')
// $('ul#list li:last').css('color', 'green')
// $('ul#list li:odd').css('background-color', 'yellow')
// $('ul#list li:even').css('background-color', 'lightgrey')
// $('ul#list li:nth-child(3n)').css('list-style', 'none')
// // $(':button').hide()
// // $(':submit').hide()
// // $(':text').hide()
// $('[href]').css('color', 'red')
// $('a[href="http://espn.com"]').css('color', 'green')
$(document).ready(function(){
    // $('#btn1').on('click', function(){
    //     $('.p1').toggle()
    // })
    // $('#btn2').on('click', function(){
    //     $('.p1').show()
    // })
    // $('#btn1').dblclick(function(){
    //     $('.p1').toggle()
    // })
    // $('#btn1').hover(function(){
    //     $('.p1').toggle()
    // })
    // $('.p1').css({color: 'red', background: 'grey'})
    
    // $('#btn1').on('click',function(){
    //     $('.p2').toggleClass('myClass')
    // })
    // // $('#myDiv').text('Hello World')
    // $('#myDiv').html('<h3>Hello World<h3>')
    // $('ul').append('<li>Append List Item</li>')
    // $('ul').prepend('<li>Prepend List Item</li>')
    // $('#newItem').keyup(function(e){
    //     var code = e.which;
    //     if(code === 13){
    //         e.preventDefault()
    //         $('ul').append('<li>'+e.target.value+'</li>')
    //     }
    // })
    // var myArr = ['Haj','Lidi', 'Juice', 'Dija']
    // $.each(myArr, function(i,val) {
    //     $('#users').append('<li>'+val+'</li>')
    // })
    // $('#results').load('test.html', function(responseTxt, statusTxt, xhr){
    //     if(statusTxt === 'success'){
    //         console.log('Went fine')
    //     }else if( statusTxt === 'error'){
    //         console.log('error: ' +xhr.statusText)
    //     }
    
    // })
    // $.get('test.html', function(data){
    //     $('#results').html(data)
    // })
    $.getJSON('users.json', function(data){
        $.each(data, function(i, user) {
            $('ul#users').append('<li>'+user.firstName+'</li>')
        })   
    })

    // $.ajax({
    //     method:'GET',
    //     header: "Access-Control-Allow-Origin *",
    //     url:'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json',
    // }).done(function(data){
    //     console.log(data)
    //     $.map(data, function(post, i) {
    //         $('#results').append('<h3>'+post.title+'</h3> <p>'+post.body+'</p>')
    //     })
    // })
    // $('#postForm').submit(function(e){
    //     e.preventDefault();
    //     // console.log('yoooo')
    //     var title = $('#title').val()
    //     var body = $('#body').val()
    //     var url = $(this).attr('action')
    //     $.post(url, {title: title, body:body}).done(function(data){
    //         console.log('Post saved')
    //         $.map(data,function(post, i) {
    //             $('#results').append('<p>'+data.title +'</p> <p>'+ data.body+'</p>')
    //         })
    //     })


    // })
})