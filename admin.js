function openSection(id) {


    let sections =
        document.querySelectorAll(".box");



    sections.forEach(section => {

        section.classList.add("hidden");

    });



    document.getElementById(id)
        .classList.remove("hidden");


}




// نمایش تعداد پست‌ها

let posts =
    JSON.parse(localStorage.getItem("posts")) || [];



let count =
    document.getElementById("postCount");



if (count) {

    count.innerHTML = posts.length;

}