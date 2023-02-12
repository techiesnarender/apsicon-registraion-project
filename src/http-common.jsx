import axios from "axios";

//  Server api access
export default axios.create({
  baseURL: "https://backendapp.shiftescape.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

//  Local api access
// export default axios.create({
//   baseURL: "http://localhost:8080/api/",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });