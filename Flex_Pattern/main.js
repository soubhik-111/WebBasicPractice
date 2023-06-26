const Data = [
    {
      "id": 1,
      "role": "Manager"
    },
    {
      "id": 2,
      "role": "Software Engineer"
    },
    {
      "id": 3,
      "role": "Marketing Specialist"
    },
    {
      "id": 4,
      "role": "Sales Representative"
    },
    {
      "id": 5,
      "role": "Graphic Designer"
    }
]

const container = document.getElementById("container")
const renderData = Data.map((ele,index)=>{
    return (
        `<div id="card">
            <p>${ele.id}</p>
            <p>${ele.role}</p>
        </div>`
    );
});
container.innerHTML = renderData.join("");