let person = {
    name : "Mg Mg",
    age : 20,
    address : "Yangon"
}

let data = `
<h5>${person.name} Resume</h5>
<ul>
<li>${person.age} year old </li>
<li>live in ${person.address} </li>
</ul>
`;

document.querySelector('.para').innerHTML = data