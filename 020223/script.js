async function getData(file) {

    // fetch products

    let response = await fetch(file);
    let data = await response.json();


    console.log(data);

    // filter data based on price less than 50

    let filtered = data.filter((price) => price.price < 50);
    console.log(filtered);


    // filter data based on rating greater than 4

    const ratingFour = data.filter((rating) => rating.rating.rate > 4)

    console.log(ratingFour);

    // filter based on a category

    const cat = data.filter((cat) => cat.category == "men's clothing");
    console.log(cat);

    // list all category names

    // const categories = [...new Set(data.map(item => item.category))];

    const categories = 
    data.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category);
        }
        return acc; 
        
    })

    console.log(categories);

    // search item by input

    const search = prompt("Enter your search term: ");

    const result = data.filter((item => {
        return Object.values(item).some(val => {
            return typeof val === 'string' && val.toLowerCase().includes(search.toLowerCase());
        });
    }));
    console.log(result);

    // find index of product with price 15.99

    const specificPrice = data.map((item) => {
        if(item.price === 15.99) {
            return data.indexOf(item);
        }



    const card = '';
    data
    });

    console.log(specificPrice);
}

const testData = "https://fakestoreapi.com/products/";

getData(testData);

async function display() {
    const main = document.getElementById("main");

    const card = document.createElement("div");

    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("card-header");
    card.appendChild(header);
    card.textContent = "Test";
    
    const body = document.createElement("div");
    body.classList.add("card-body");
    card.appendChild(body);

    const title = document.createElement("h4");
    title.classList.add("card-title");
    body.appendChild(title);
    body.textContent = "Filler Key";

    const content = document.createElement("p");
    content.classList.add("card-text");
    content.textContent = "Filler Value";
    body.appendChild(content);

    main.appendChild(card);

}

display();