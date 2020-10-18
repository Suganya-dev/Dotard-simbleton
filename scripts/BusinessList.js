import {useCompanies} from "./BusinessProvider.js";
import {Company} from "./Business.js";
const ContentElement = document.querySelector(".Companylist")

export const companyList = () => {
    const number = useCompanies()
    ContentElement.innerHTML += "<h1>Company list</h1>"

 
number.forEach(
    (companyObj) => {
        ContentElement.innerHTML +=  Company(companyObj)
    }
);
}