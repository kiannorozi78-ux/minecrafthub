let posts =
    JSON.parse(localStorage.getItem("posts")) || [];


function showPosts(list = posts) {

    let box = document.getElementById("posts");

    box.innerHTML = "";


    list.forEach(post => {

        box.innerHTML += `

<div class="card">

<img src="${post.image}">

<h2>${post.title}</h2>

<p>📂 ${post.category}</p>

<p>🎮 نسخه: ${post.version}</p>

<p>${post.description}</p>

<a class="download" href="${post.download}">
⬇ دانلود
</a>

</div>

`;

    });

}



function filterPosts(category) {

    if (category == "همه") {
        showPosts();
        return;
    }


    showPosts(
        posts.filter(p => p.category == category)
    );

}


showPosts();