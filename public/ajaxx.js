$("#btn").click(function(event){
    event.preventDefault();
    
var phonenumber = $("#phonenumber").val();;
var name = $("#name").val();
console.log(phonenumber + " " + name);

$.ajax({
    url:   "/user", 
    type:     "POST", 
    dataType: "json", 
    data: {name:name,phonenumber:phonenumber},
    success: function(data) { //Данные отправлены успешно
        // console.log(data.name)
        $('#result_form').text(data);
    },
    error: function(data) { // Данные не отправлены
        $('#result_form').text('Ошибка. Данные не отправлены.');
    }
 });
});
$("#hero").click(function(event){
    event.preventDefault();
    $.ajax({
        type:"get",
        url:"/user",
        data:"html",
        success:function(response){
            alert("удача")
        },
        error: function(response){
            alert("помилка")
        }
    })
})