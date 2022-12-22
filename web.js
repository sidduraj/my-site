let shop = document.getElementById("shop");

let shopItemsData=[
{
    id:"jhdhfdfgdh1",
    name:"SALLAR",
    price:"150",
    des:"2023 - Action Thriller",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvDL1xiUGSzNx2RTxTpDnuheCEMtB2_SwU2t6NHQS9zgPSwEqXf5kiADGjZqJlLhEPvPgp27r-7F__HGUvxUEU6vikk9M2FTIGxfl8Nu7wEgnfaoK10vgZNySZSO73JYRJYNjXBhKX9KPqSYsHNEu8ZXZNg0yGpdny9GvL_rwSICucTE-5_b3WrZsuYA/s0/HDgallery%20Salaar%20HD%20Stilll.jpeg",
},{
    id:"jhdhfdfgdh2",
    name:"KGF CHAPTER 2",
    price:"200",
    des:"2022 - Action Thriller",
    img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg",
},{
    id:"jhdhfdfgdh3",
    name:"SSE",
    des:"2023 - DRAMA",
    price:"150",
    img:"https://m.media-amazon.com/images/M/MV5BMzJmNWJjNjYtMWNjMi00NjQ5LTgxMTMtOTJmZjc4MjkyN2YwXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
},{
    id:"jhdhfdfgdh4",
    name:"KANTHARA",
    price:"200",
    des:"2022 - Action Thriller suspense",
    img:"https://pbs.twimg.com/media/FUVdafqaMAAT-MR?format=jpg&name=small",
},{
     id:"jhdhfdfgdh5",
     name:"RICHARD ANTHONY",
     price:"180",
     des:"2022 - Action Thriller suspense",
     img:"https://www.filmibeat.com/img/popcorn/movie_posters/richardanthony-20210711160353-20191.jpg",
 }]

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            let {id,name,price,img}=x
      return  `
    <div id=product-id-${id} class="item">
        <img width="220" height="300" src=${img}>
        <div class="details">
            <h3>${x.name}</h3>
            <div class="about">
                <h4>${x.des}</h4>
                <div class="price-quantity">
                    <h2 data-price=${x.price}></h2>
                    <div class="buttons">
                        <i onclick="decrement(event)" class="bi bi-dash-lg"></i>
                        <input id="demoinput" type="number" class="quantity" value="0" min="0" />
                        <i onclick="increment(event)" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    }).join(""));
};
generateShop();
/*
let increment=(id)=>{
    let selectedItem = id
    document.getElementById('quantity')
}

let decrement=()=>{
    console.log("decrement")
}
*/

function increment(event){
    const input = event.target.parentNode.querySelector('input')
    input.stepUp();
    const priceDom = event.target.parentNode.parentNode.querySelector('h2');
    const price = priceDom.dataset.price;
    priceDom.innerText = price * input.value
}
    function decrement(event){
        const input = event.target.parentNode.querySelector('input')
    input.stepDown();
    const priceDom = event.target.parentNode.parentNode.querySelector('h2');
    const price = priceDom.dataset.price;
    priceDom.innerText = price * input.value
    }
let update=()=>{}