export const Company =(comObj) => {
return `
<section class="Company">
<h2 class="Company__Id">ID:${comObj.id}</h2>
<div class="Company__name">
<h2>Name: ${comObj.name}</h2>
<h2>Place: ${comObj.place}</h2>
<h2>Address: ${comObj.address}</h2>
  </div>
  </section>
  `
}