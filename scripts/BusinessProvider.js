const companies = [
    {
        id: 1,
        name: "Yeskitchen",
        place: "Minneapolis",
        address: "8417 Franklin court"
    },
    {
        id: 2,
        name: "GMC",
        place: "Atlanta",
        address: "2916 Franklin court"
    },
    {
        id: 3,
        name: "Tarunika shop",
        place: "california",
        address: "8555 Moore's lane"
    },
    {
        id: 4,
        name: "Divashini shop",
        place: "california",
        address: "8555 Moore's lane"
    },
    {
        id: 5,
        name: "Jpcs shop",
        place: "california",
        address: "8555 Moore's lane"
    },
]
 export const useCompanies = companies.map(companyObject =>{
     return companyObject.address
 })
 
    
 


    