export const Company =(comObj) => {
return `
<section class="Company">
<h2 class="Company__Id">ID:${comObj.id}</h2>
<div class="Company__name">
Name: ${comObj.name}
Place: ${comObj.place}
Address: ${comObj.address}
  </div>
  </section>
  `
}