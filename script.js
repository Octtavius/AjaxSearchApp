$('#search').on('keyup', function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
    $.getJSON('data.json', function(data){
        var output = '<ul class="searchresults">';
        $.each(data, function(key, val) {
            //if search myExp is not -1 then the name is found
            if((val.name.search(myExp)) != -1 ||
                (val.bio.search(myExp)) != -1) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name+'" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });//getJSON
});