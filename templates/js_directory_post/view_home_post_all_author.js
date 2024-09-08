let authorID = 0

function loadedPostAllAuthor(value) {
    if (formEL.classList != "!hidden") {
        formEL.classList.toggle("!hidden")
    }
    diveFormPostEl.innerHTML = ""
    //formPostEL.title.value = "";
    //formPostEL.description.value = ""
    viewDetailEL.innerHTML = ""
    mainView.clear
    fetch(`api/author/post/${value}`, {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        },
    }).then(async request => {
        const recipies = await request.json();
        console.log(recipies);
        let c = ""
        let d = ""
        authorID = recipies[2]
        for (const r in recipies[0]) {
            console.log(recipies[0][r].title);
            const el = `


                    <div class="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"/>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${recipies[0][r].title}</h2>
                            <div class="card-actions justify-end grid grid-cols-4  ">
                                    <button onclick="updatePost(this)" id='update'class="btn btn-success " value="${recipies[0][r].id}">update</button>
                                    <button   onclick="delete_post(this)" id='delete' class="btn btn-error" value="${recipies[0][r].id}">delete</button>
                                    <button onclick="viewpPostDetail(this)" value="${recipies[0][r].id}" class="btn btn-info">view post</button>   
                                    <button onclick="loaded()" value="${recipies[0][r].id}" class="btn btn-active">back</button>   
                            </div>
                        </div>
                    </div>
                    `
            c += el
        }
        mainView.innerHTML = c
        diveFormPostEl.innerHTML = `

                   <form action="" id="forms_post_author_all_post" class="grid grid-row3 flex align-center justify-center ">
                       <input
                               type="text"
                               placeholder="title"
                               name="title"
                               class="input input-bordered input-primary w-full max-w-xs"/>

                       <textarea class="textarea" name="description" placeholder="description"></textarea>
                        <input
                               type="text"
                               value="${recipies[1]}"
                               name=''
                               disabled
                               class="input input-bordered input-primary w-full max-w-xs"/>
                       <button type="submit" class="btn btn-wide">Create</button>
                    </form>
                    `
    }).finally(() => {
        if (diveFormPostEl.classList == "!hidden") {
            diveFormPostEl.classList.toggle("!hidden")
        }
        hamids(authorID)
    })

}