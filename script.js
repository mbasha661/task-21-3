var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);

var res=fetch("https://api.thecatapi.com/v1/images/search?limit=10")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML+=`
        <div class="card" style="width: 18rem;padding:15px;margin:20px;)">
        <h5 class="card-title">Cute Kittens</h5>
        <div class="imgdiv">
  <img src="${data1[i].url}" class="card-img-top" alt="..." style="width:257px;height:238px;>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:${data1[i].id}</li>
    <li class="list-group-item">Height:${data1[i].height}</li>
    <li class="list-group-item">Width:${data1[i].width}</li>
  </ul>
  <div class="card-body">
    <a href="${data1[i].url}" class="card-link">open to see</a>
  </div>
</div>

      `;
      document.body.append(container);
    }
}
