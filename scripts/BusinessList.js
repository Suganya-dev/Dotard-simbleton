import {useCompanies} from "./BusinessProvider.js";
import {Company} from "./Business.js";
const ContentElement = document.querySelector(".businessList--california")

export const companyList = () => {
    const number = useCompanies()
    ContentElement.innerHTML += "<h1>California company lists</h1>"

 
number.forEach(
    (companyObj) => {
        ContentElement.innerHTML +=  Company(companyObj)
    }
);
}