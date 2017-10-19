var loadResponse = function (data) {
    $('#response1').append('<center><div style="color:#73AD21"><h2>Results:</h2></div></center>');
    $('#pageno').append('<center>Page '+data.page+'</center>');
    
    for (var i=0; i<data.results.length; i++) {
        
        $('#response1').append('<br>'+(i+1)+'.'+'<br><br><img src=http://image.tmdb.org/t/p/w75/'+data.results[i].poster_path+'><br>');
        $('#response1').append('<br>Popularity: '+data.results[i].popularity+'<br>');
        $('#response1').append('Title: '+data.results[i].title+'<br>');
        $('#response1').append('Vote Count: '+data.results[i].vote_count+'<hr>');};
    };
    
document.getElementById('myclick').onclick = function() {
    var year = $('#txt1').val();
    var votec = $('#txt2').val();
    var language = $('#txt3').val();
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=869477feed128ffc52a2405dfb5948e5&language='+language+'&vote_count.lte='+votec+'&year='+year;
    
    $.ajax({url:url, method:'GET', async:true}).done(loadResponse);
};



