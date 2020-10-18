export const Company =(comObj) => {
return `
<section class="agents">
<h2 class="Company__Id">ID:${comObj.id}</h2>
<div class="Company__name">
<h2>fullName: ${comObj.name}</h2>
<h2>Company: ${comObj.place}</h2>
<h2>Address: ${comObj.address}</h2>
  </div>
  </section>
  `
}