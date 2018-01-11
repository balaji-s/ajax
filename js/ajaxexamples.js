function loadthis(){

    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("demo").innerHTML = this.responseText;
        }

    };

    ajaxRequest.open("GET","files/info.txt",true);
    ajaxRequest.send();

}