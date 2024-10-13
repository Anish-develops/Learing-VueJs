import axios from "axios";

const id = "123";

const response = await axios.get(`http://localhost:3000/api/get-product/${id}`);

const data = response.data.data



console.log(data);


console.log(typeof data)