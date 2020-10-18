import {useCompanies} from "./BusinessProvider.js";
import {Company} from "./Business.js";
const ContentElement = document.querySelector(".businessList--california")

export const companyList = () => {
    
    const number = useCompanies()
    ContentElement.innerHTML += Company(number)

 
  number.filter
    (companyObject => {
       if(companyObject.place="california"){
    return true
   }
   return false
    
    })
}
   