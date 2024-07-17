import "./style.css";
import { getApi } from "./fetch";
import marker from "./images/vector (4).svg";

const icon = document.getElementById("marker");
icon.src = marker;
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	getApi();
});
getApi();
