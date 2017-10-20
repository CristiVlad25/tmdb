var loadResponse = function (data) {
    $('#response1').html('');
    $('#pageno').html('');
    $('#response1').append('<center><div style="color:#73AD21"><h2>Results:</h2></div></center>');
    $('#pageno').append('<center>Page '+data.page+'<br><br></center>');
    
    for (var i=0; i<data.results.length; i++) {

        $('#response1').append('<div class="response2"><br><div id="titl">'+(i+1)+'. '+data.results[i].title+'</div>'+
        '<br><img src=http://image.tmdb.org/t/p/w75/'+data.results[i].poster_path+'><br><br>'+
        '<div id="descr">Description: '+data.results[i].overview+'</div><br>'+
        '<div style="align:right">Popularity/Vote Count: '+data.results[i].popularity+'/'+
        data.results[i].vote_count+'<br><br></div></div><br>');};};

document.getElementById('refr').onclick = function() {
    $('#response1').html('');
    $('#pageno').html('');
}
    
document.getElementById('myclick').onclick = function() {
    
    var keyword = $('#txt1').val();
    var year = $('#txt2').val();

    var url_first = 'https://api.themoviedb.org/3/search/movie?api_key=869477feed128ffc52a2405dfb5948e5&query='+keyword;
    var url_second = 'https://api.themoviedb.org/3/discover/movie?api_key=869477feed128ffc52a2405dfb5948e5&language='+year;
    

    if (keyword != '') {
        $.ajax({url:url_first, method:'GET', async:true}).done(loadResponse);}

    else if (year != '') {
        $.ajax({url:url_second, method:'GET', async:true}).done(loadResponse);}
    
    else {alert('Please type something!');}

};



