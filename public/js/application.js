if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);

        oimage = document.getElementById("oivoodoo-image");
        oinfo  = document.getElementById("oivoodoo-info");
        bimage = document.getElementById("baltazore-image");
        binfo  = document.getElementById("baltazore-info");

        oimage.addEventListener("click",function(e){
            oimage.style.display = 'none';
            oinfo.style.display = 'block';
        },false);
        bimage.addEventListener("click",function(e){
            bimage.style.display = 'none';
            binfo.style.display = 'block';
        },false);

        oinfo.addEventListener("click",function(e){
            oimage.style.display = 'block';
            oinfo.style.display = 'none';
        },false);
        binfo.addEventListener("click",function(e){
            bimage.style.display = 'block';
            binfo.style.display = 'none';
        },false);

    }, false);
}

