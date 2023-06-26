const item = document.getElementById("container");
const body = document.querySelector("body");
item.addEventListener("mouseenter", (ele) => {
    item.addEventListener("wheel", function (e) {
        if (e.deltaY > 0)
            item.scrollLeft += 50;
        else
            item.scrollLeft -= 50;

        let maxScrollLeft = item.scrollWidth - item.clientWidth;

        if(maxScrollLeft==item.scrollLeft || item.scrollLeft == 0)
            body.style.overflowY = "scroll";
    });
    body.style.overflowY = "hidden";
});
item.addEventListener("mouseleave",(ele)=>{
    body.style.overflowY = "scroll";
})