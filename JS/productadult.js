var dataAdult  = [
    { "id": "f1", "name": "Thiep1", "img": "img/thiephl1.jpeg" },
  
    { "id": "f2", "name": "Thiep2", "img": "img/thiep2.jpg" },
  
    { "id": "f3", "name": "Thiep3", "img": "img/thiep3.jpg" }
  ];
  displayImages(dataAdult);

  function displayImages(items) {
      var a = ``;
      $.each(items,function (k,v) {
  
        a += `
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
      
      $("#productA").html(a);    
  }

  $("#formSearchA").submit(function (e) {
    e.preventDefaultA();
  
    var search = $("#searchA").val();
    var re = new RegExp(search, "ig");
    var subdataA = dataAdult.filter(item => item.name.search(re) >= 0);
  
    
    displayImages(subdataA);
  });