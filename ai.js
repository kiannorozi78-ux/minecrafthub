let posts = [];


fetch("data/posts.json")
    .then(res => res.json())
    .then(data => {
        posts = data;
    });



function askAI() {


    let q = document
        .getElementById("question")
        .value
        .toLowerCase();



    let result =
        posts.find(post =>

            q.includes(post.type) ||
            q.includes(post.title.toLowerCase()) ||
            q.includes(post.version)

        );



    let answer =
        document.getElementById("answer");



    if (result) {

        answer.innerHTML =
            `
<h3>${result.title}</h3>
<p>${result.description}</p>
<p>نسخه: ${result.version}</p>
`;

    }

    else {

        answer.innerHTML =
            "چیزی پیدا نکردم. بعداً اطلاعات بیشتری به من اضافه کن.";

    }


}