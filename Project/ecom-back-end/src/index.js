import app from "./app.js";

import dotenv from "dotenv";
// import bodyParser from "body-parser";

const products = [
    {
        id: "123",
        name: "Running Shoes",
        price: "60.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-1.jpg",
        averageRating: "5.0",
    },
    {
        id: "234",
        name: "Basketball Shoes",
        price: "120.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-2.jpg",
        averageRating: "5.0",
    },
    {
        id: "345",
        name: "Bright Red Shoes",
        price: "90.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-3.jpg",
        averageRating: "5.0",
    },
    {
        id: "456",
        name: "Fancy Shoes",
        price: "190.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-4.jpg",
        averageRating: "5.0",
    },
    {
        id: "567",
        name: "Skateboard Shoes",
        price: "75.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-5.jpg",
        averageRating: "5.0",
    },
    {
        id: "678",
        name: "High Heels",
        price: "200.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-6.jpg",
        averageRating: "5.0",
    },
    {
        id: "789",
        name: "Dark Shoes",
        price: "100.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-7.jpg",
        averageRating: "5.0",
    },
    {
        id: "890",
        name: "Classic Shoes",
        price: "40.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-8.jpg",
        averageRating: "5.0",
    },
    {
        id: "901",
        name: "Plain Shoes",
        price: "54.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-9.jpg",
        averageRating: "5.0",
    },
    {
        id: "112",
        name: "Teal Dress Shoes",
        price: "330.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-10.jpg",
        averageRating: "5.0",
    },
    {
        id: "223",
        name: "Fancy Boots",
        price: "230.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-11.jpg",
        averageRating: "5.0",
    },
    {
        id: "334",
        name: "Gold Shoes",
        price: "180.00",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
        imageUrl: "/images/shoes-12.jpg",
        averageRating: "5.0",
    },
];



export let cartItems = [products[0], products[2], products[3]];

dotenv.config();

const p = process.env.PORT

import connectDB from "./db/index.js";
connectDB().then(
    app.listen(p, () => {
        console.log("app is running on port " , p);
    })
).catch((error) => {
    console.log("MongoDb connection failed", error);
});

app.get('/api/products', (req, res) => {

    res.status(200).json(products);

});


app.get('/api/user/:userId/cart', (req, res) => {

    res.status(200).json(cartItems);
})

app.get('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;

    const product = products.find((product) => product.id == productId);
    

    if (!product) {
        res.status(404).json({ message: "Product not found" });
    } else {
        res.status(200).json(product);
    }
})

app.post("/api/user/:userId/cart", (req, res) => {
    const {productId} = req.body;

    const product = products.find(product => product.id === productId);

   

    if (!product) {
        res.status(404).json({ message: "Product not found" });
    } else {
        cartItems.push(product);
        res.status(200).json(cartItems);
    }   
})







app.delete("/api/user/:userId/cart/:productId", (req, res) => {
    const {productId} = req.params;
    cartItems = cartItems.filter((product) => product.id !== productId);
    res.status(200).json(cartItems);
})

// import { Router } from "express";

// import { postProducts } from "./controllers/product.controller.js";

// const router = Router();

// const productrouter = router.route("/products").post(postProducts);
// app.use("/api/user", productrouter);




import postProducts from "./controllers/product.controller.js";
import postUsers from "./controllers/user.controller.js";

app.post("/api/products", postProducts);

app.post("/api/users", postUsers);
const users = [
   { id: "12345",
    name: "Anish",
    cartItems: ["123", "456", "789"],}
];
fetch(
    "http://localhost:5000/api/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user:users }),        
    }
).then((response) => response.text())
.catch((error) => console.error("Error:", error));

// fetch("http://localhost:5000/api/products", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ products }),
// })
//     .then((response) => response.text())
//     .catch((error) => console.error("Error:", error));




