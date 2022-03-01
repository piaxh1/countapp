document.getElementById('count-btn').addEventListener('click', function(){
    var data = document.getElementById('txt-area').value;
    var ln = data.length;
    // console.log(ln);
    document.getElementById('output-data').innerText = 'Counted: '+ln;
});