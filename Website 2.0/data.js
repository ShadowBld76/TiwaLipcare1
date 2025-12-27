// data.js
const products = [
  {
    id: 1,
    name: "Full Pink Lip Kit",
    price: 10000,
    image: "/Image/product1.jpg",
    description: "High-shine, cherry-scented gloss with a non-sticky formula and Barbie-core vibes."
  },
  {
    id: 2,
    name: "Pink Lips Mini Kit",
    price: 5000,
    image: "/Image/product2.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 3,
    name: "Lip Scrub",
    price: 2000,
    image: "/Image/product3.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 4,
    name: "Lip Moisturizer",
    price: 1500,
    image: "/Image/product4.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 5,
    name: "Pink Lips Balm",
    price: 2000,
    image: "/Image/product5.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 6,
    name: "Pink Lips Balm",
    price: 2500,
    image: "/Image/product6.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 7,
    name: "Lip Gloss Fat Tube",
    price: 3000,
    image: "/Image/product7.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 8,
    name: "Lip Gloss Squeeze Tube",
    price: 2000,
    image: "/Image/product8.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 9,
    name: "Lip Gloss Baddie Pink",
    price: 7500,
    image: "/Image/product9.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 10,
    name: "Lip Gloss Choco",
    price: 7500,
    image: "/Image/product10.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 11,
    name: "Lip Gloss Glitz",
    price: 7500,
    image: "/Image/product11.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 12,
    name: "Lip Gloss Nude",
    price: 7500,
    image: "/Image/product12.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 13,
    name: "Clear Lip Gloss",
    price: 7500,
    image: "/Image/product13.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 14,
    name: "Lip Gloss Bubblegum Combo(Fat Tube)",
    price: 5000,
    image: "/Image/product14.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 15,
    name: "Lip Gloss Barbie Pink",
    price: 5000,
    image: "/Image/product15.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 16,
    name: "Creamy Combo",
    price: 5000,
    image: "/Image/product16.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 17,
    name: "Glitz Combo",
    price: 5000,
    image: "/Image/product17.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 18,
    name: "Cherry Combo",
    price: 5000,
    image: "/Image/product18.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  }
];

function getProduct(id) {
  return products.find(product => product.id === id);
}

function getAllProducts() {
  return products;
}