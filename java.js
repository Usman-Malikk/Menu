let menuitems = [{
    id: 2,
    category: "Breakfast",
    img: "./images/1.jpg",
    name: "Breakfast",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
},
{
    id: 2,
    category: "Breakfast",
    img: "./images/1.jpg",
    name: "Breakfast",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
}, {
    id: 2,
    category: "Shakes",
    img: "./images/1.jpg",
    name: "Shakes",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
}, {
    id: 2,
    category: "Shakes",
    img: "./images/1.jpg",
    name: "Shakes",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
}, {
    id: 2,
    category: "Lunch",
    img: "./images/1.jpg",
    name: "Lunch",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
}, {
    id: 2,
    category: "Lunch",
    img: "./images/1.jpg",
    name: "Lunch",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
}, {
    id: 2,
    category: "Lunch",
    img: "./images/1.jpg",
    name: "Lunch",
    price: "1.2$",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores minima doloremque temporibus voluptates ipsa soluta culpa"
},
]


// window.addEventListener("DOMContentLoaded", function () {
//     displayitems(menuitems)
// })
// function displayitems(it) {
//     let element = it.map(function (item) {
//         return `<article class="i">
//     <img src="./images/1.jpg" alt="">
//     <div class="info">
//         <div class="upper">
//             <h4>${item.name}</h4>
//             <h4 class="hehe">${item.price}</h4>
//         </div>
//         <p>${item.description} </p>
//     </div>
// </article>`

//     })
//     element = element.join("")
//     item.innerHTML = element
// }
// Btn.forEach(function (a) {
//     a.addEventListener("click", function (b) {
//         var category = b.currentTarget.dataset.id


//         var menucateory = menuitems.filter(function (itm) {



//             if (category === itm.category) {
//                 return itm;
//             }
//         })
//         if (category ==='All')
//     {
//     displayitems(menuitems)
//     }
//     else{
//     displayitems(menucateory)
//     }
//     })


// })
let Btn = document.querySelectorAll(".btn")
let item = document.querySelector(".allitems")


function DIsplayItems(i) {
    let it = i.map(function (a) {
        return `<article class="i">
     <img src="./images/1.jpg" alt="">
           <div class="info">
               <div class="upper">
            <h4>${a.name}</h4>
            <h4 class="hehe">${a.price}</h4>
        </div>
        <p>${a.description} </p>
    </div>
</article>`
    })
    it = it.join("")
    item.innerHTML = it;
}
window.addEventListener("DOMContentLoaded", function () {
    DIsplayItems(menuitems)
})


Btn.forEach(function (itemsss) {
    itemsss.addEventListener("click",function(ab){
        let category = ab.currentTarget.dataset.id;
        let menucateory = menuitems.filter(function (ii) {
            if (category === ii.category) {
                return ii;

            }
        })
        if(category==='All')
        {
            DIsplayItems(menuitems)
        }
        else{
            DIsplayItems(menucateory)
        }
    })
})