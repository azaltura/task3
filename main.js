var btnAll = document.getElementById("btnAll");
var btnName = document.getElementById("btnName");

btnAll.addEventListener("click", function () {
    document.getElementById("cunInfo").innerHTML = ''
    $.ajax({
        url: "cun.json",
        method: 'GET'
    }).done(function (d) {
        if (typeof d === 'string')
            d = JSON.parse(d);
        console.log(d);
    
        function namesTemplate(coName) {
            currencie = '';
            for (i = 0; i < coName.currencies.length; i++) {
                currencie = JSON.stringify(coName.currencies[i]);

            }
            return `
            <div class="container">
              <div class="row">
             <div class="col">
             <img src="${coName.flag}" class="img-fluid">
             </div>
            <div class="col">
              <p> countrie Name: ${coName.name}</p>
              <p> topLevelDomain: ${coName.topLevelDomain}</p>
              <p> capital: ${coName.capital}</p>
              <p> currenciese: ${currencie}</p>
              </div>
              </div>
              </div>
              <br>
            `;
        }

        document.getElementById("cunInfo").innerHTML = `
            <h1>All countries</h1>
            ${d.map(namesTemplate).join("")}
    
          `;
    });



})

btnName.addEventListener("click", function () {

    document.getElementById("cunInfo").innerHTML = '';

    const cname = document.getElementById("cunName").value;

    $.ajax({
        url: "http://restcountries.eu/rest/v2/name/" + cname,
        method: 'GET'
    }).done(function (d) {
        if (typeof d === 'string')
            d = JSON.parse(d);
        console.log(d);
    
        function namesTemplate(coName) {
            currencie = '';
            for (i = 0; i < coName.currencies.length; i++) {
                currencie = JSON.stringify(coName.currencies[i]);

            }
            return `
            <div class="container">
            <div class="row">
           <div class="col">
           <img src="${coName.flag}" class="img-fluid">
           </div>
          <div class="col">
            <p> countrie Name: ${coName.name}</p>
            <p> topLevelDomain: ${coName.topLevelDomain}</p>
            <p> capital: ${coName.capital}</p>
            <p> currenciese: ${currencie}</p>
            </div>
            </div>
            </div>
            <br>
            `;
        }

        document.getElementById("cunInfo").innerHTML = `
            <h1>All countries</h1>
            ${d.map(namesTemplate).join("")}
    
          `;
    });



})


