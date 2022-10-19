let shop = document.getElementById("shop");

let shopItemsData=[
{
    id:"jhdhfdfgdh",
    name:"SALLAR",
    price:"100",
    des:"2023 - Action Thriller",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvDL1xiUGSzNx2RTxTpDnuheCEMtB2_SwU2t6NHQS9zgPSwEqXf5kiADGjZqJlLhEPvPgp27r-7F__HGUvxUEU6vikk9M2FTIGxfl8Nu7wEgnfaoK10vgZNySZSO73JYRJYNjXBhKX9KPqSYsHNEu8ZXZNg0yGpdny9GvL_rwSICucTE-5_b3WrZsuYA/s0/HDgallery%20Salaar%20HD%20Stilll.jpeg",
},{
    id:"jhdhfdfgdh",
    name:"KGF CHAPTER 2",
    price:"100",
    des:"2022 - Action Thriller",
    img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg",
},{
    id:"jhdhfdfgdh",
    name:"SSE",
    des:"2023 - DRAMA",
    price:"100",
    img:"https://m.media-amazon.com/images/M/MV5BMzJmNWJjNjYtMWNjMi00NjQ5LTgxMTMtOTJmZjc4MjkyN2YwXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
},{
    id:"jhdhfdfgdh",
    name:"KANTHARA",
    price:"100",
    des:"2022 - Action Thriller suspense",
    img:"https://pbs.twimg.com/media/FUVdafqaMAAT-MR?format=jpg&name=small",
},{
     id:"jhdhfdfgdh",
     name:"RICHARD ANTHONY",
     price:"100",
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
                    <h2>100</h2>
                    <div class="buttons">
                        <i onclick="decrement()" class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i onclick="increment()" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    }).join(""));
};
generateShop();

let increment=(id)=>{
    let selectedItem = id
    console.log("increment")
}

let decrement=()=>{
    console.log("decrement")
}

let update=()=>{}