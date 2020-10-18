import {useCompanies} from "./BusinessProvider.js"
import {Company} from "./Business.js"
const ContentElement = document.querySelector(".Companylist")

const companyList = () => {
    const number = useCompanies()
    ContentElement.innerHTML += "<h2>name</h2>"

 
number.forEach(
    (companyObj) => {
        ContentElement.innerHTML +=  Company(companyObj)
    }
);
}