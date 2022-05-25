        //Get the button
        var mybutton = document.getElementById("myBtn");
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        }
        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
// Product
var dataChildren = [
  {"id":"f1","name":"Thiep1","img":"img/c1.jpg"},
        
  {"id":"f2","name":"Thiep2","img":"img/c2.png"},
        
  {"id":"f3","name":"Thiep3","img":"img/c3.png"}
];




displayImages(dataChildren);

function displayImages(items) {
    var s = ``;
    $.each(items,function (k,v) {

      s += `
        <div class="col-md-4 col-sm-6">
          <img src="${v.img}" alt="..." width="300px" height="300px" class="col border btn" data-bs-toggle="collapse" data-bs-target="#demo${v.id}">
          <h2>${v.name}</h2>
          <div id="demo${v.id}" class="collapse">
            <div class="tab-content">
              <div class="tab-pane container active" id="${v.id}a">
                <img src="img/thuphaphl.png" alt="">
              </div>
              <div class="tab-pane container fade" id="${v.id}b">
                <img src="img/thuphap1.png" alt="">
              </div>
              <div class="tab-pane container fade" id="${v.id}c">
                <img src="img/thuphap3.png" alt="">
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#${v.id}a">Font 01</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#${v.id}b">Font 02</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#${v.id}c">Font 03</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <img src="${v.img}" alt="..." width="300px" height="300px" class="col border btn" data-bs-toggle="collapse" data-bs-target="#demo${v.id}1">
          <h2>${v.name}</h2>
          <div id="demo${v.id}1" class="collapse">
            <div class="tab-content">
              <div class="tab-pane container active" id="${v.id}1">
                <img src="img/thuphaphl.png" alt="">
              </div>
              <div class="tab-pane container fade" id="${v.id}2">
                <img src="img/thuphap1.png" alt="">
              </div>
              <div class="tab-pane container fade" id="${v.id}3">
                <img src="img/thuphap3.png" alt="">
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#${v.id}1">Font 01</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#${v.id}2">Font 02</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#${v.id}3">Font 03</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;
      
    });
    
    $("#productC").html(s);    
}

// function searchInfo(){
//   var mysearch = $("#search").val();
//   var s = "";
//   var index = 0;
//   for (var i in data){
//       if(data[i].name.toLowerCase().search(mysearch.toLowerCase()) != -1){
//           index++;
//       s+="<br>"+index+"."+"Name: "+data[i].name;
//       }
  
//   }
//   if(index==0){
//       s+="khong tim thay ten";
//   }

//   displayImages()
// }
$("#formSearch").submit(function (e) {
  e.preventDefault();

  var search = $("#search").val();
  var re = new RegExp(search, "ig");
  var subdataC = dataChildren.filter(item => item.name.search(re) >= 0);

  
  displayImages(subdataC);
});