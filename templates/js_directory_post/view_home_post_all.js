function loaded() {
    if (formEL.classList !== "!hidden") {
        formEL.classList.toggle("!hidden")
    }
    formPostEL.name.value = "";
    formPostEL.bio.value = ""
    formPostEL.email.value = ""
    viewDetailEL.innerHTML = ""
    mainView.clear
    fetch("{% url 'get_post' %}", {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        },
    }).then(async request => {
        const recipies = await request.json();
        console.log(recipies);
        let c = ""
        for (const r in recipies) {
            console.log(recipies[r].name);
            const el = `


                    <div class="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"/>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${recipies[r].name}</h2>
                            <div class="card-actions justify-end grid grid-cols-4  ">
                                    <button onclick="update_author(this)" id='update'class="btn btn-success " value="${recipies[r].id}">update</button>
                                    <button   onclick="delete_author(this)" id='delete' class="btn btn-error" value="${recipies[r].id}">delete</button>
                                    <button onclick="viewAuthorDetail(this)" value="${recipies[r].id}" class="btn btn-info">view author</button>   
                                    <button onclick="view(this)" value="${recipies[r].id}" class="btn btn-active">view all post</button>   
                            </div>
                        </div>
                    </div>
                    `
            c += el
        }
        mainView.innerHTML = c

    })

}