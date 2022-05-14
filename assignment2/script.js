const dummyData = [
  {
    name: "Harry Potter",
    city: "London",
  },
  {
    name: "Don Quixote",
    city: "Madrid",
  },
  {
    name: "Joan of Arc",
    city: "Paris",
  },
  {
    name: "Rosa Park",
    city: "Alabama",
  },
  {
    name: "John",
    city: "Paris",
  },
];

var names = document.getElementById("names");
var cityLondon = document.getElementById("city_london");
var sameCity = document.getElementById("same_city");
var firstjson = document.getElementById("firstAPI");
var secondjson = document.getElementById("secondAPI");
var thirdjson = document.getElementById("thirdAPI");

for (let index = 0; index < dummyData.length; index++) {
  names.innerHTML += dummyData[index]["name"] + "<br/>";
}

for (let index = 0; index < dummyData.length; index++) {
  if (dummyData[index]["city"] == "London") {
    cityLondon.innerHTML +=
      dummyData[index]["name"] +
      " is from " +
      dummyData[index]["city"] +
      "<br/>";
  }
}
var sameArray = [];
for (let index = 0; index < dummyData.length; index++) {
  if (dummyData[index]["city"] == "Paris") {
    sameArray.push(dummyData[index]["name"]);
  }
}

sameCity.innerHTML = sameArray + "live in the same City - Paris";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    for (let index = 0; index < json.length; index++) {
      if (json[index]["userId"] == "1") {
        firstjson.innerHTML +=
          "User ID: " +
          json[index]["userId"] +
          "<br/>" +
          "ID: " +
          json[index]["id"] +
          "<br/>" +
          "Title: " +
          json[index]["title"] +
          "<br/>" +
          "Body: " +
          json[index]["body"] +
          "<br/> <br/>";
      }
    }
  });

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    function sortAscendingProductName(title) {
      return function (a, b) {
        if (a[title] > b[title]) {
          return 1;
        } else if (a[title] < b[title]) {
          return -1;
        }
        return 0;
      };
    }

    json.sort(sortAscendingProductName("title"));

    for (let index = 0; index < json.length; index++) {
      if (json[index]["price"] > 100) {
        secondAPI.innerHTML +=
          "Name of Product: " +
          json[index]["title"] +
          "<br/>" +
          "Price of Product: " +
          json[index]["price"] +
          "<br/> <br/>";
      }
    }
  });

fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
  response.json().then((json) => {
    function sortdescendingCatName(name) {
      return function (a, b) {
        if (a[name] < b[name]) {
          return 1;
        } else if (a[name] > b[name]) {
          return -1;
        }
        return 0;
      };
    }

    json.sort(sortdescendingCatName("name"));

    for (let index = 0; index < json.length; index++) {
      if (json[index]["country_codes"] == "US") {
        thirdjson.innerHTML +=
          "Cat Name: " +
          json[index]["name"] +
          "<br/>" +
          "Country Codes: " +
          json[index]["country_codes"] +
          "<br/> <br/>";
      }
    }
  })
);
