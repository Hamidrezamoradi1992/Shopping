function updatePost(value) {
    diveFormPostEl.classList.toggle('!hidden')
    fetch(`api/author/delet/${value.value}`, {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        }
    })
        .then(async request => {
            const r = await request.json()
            console.log(r)
            updateEL.innerHTML=""
            updateEL.innerHTML = `<form action="" id="forms_update_post" class="grid grid-row3 flex align-center justify-center ">
                         <input
                                type="text"
                                 placeholder=""
                                 name="title"
                                 value="${r.title}""
                                 class="input input-bordered input-primary w-full max-w-xs"/>
                         <textarea class="textarea" name="description" placeholder="Description">${r.description}</textarea>
                         <input class="input input-bordered input-primary w-full max-w-xs"  disabled name="" value="${r.title}">
                         <button type="submit" onclick="update_po(this)" value="${r.id}" class="btn btn-success">update</button>
                     </form>`
           // formEL.classList.toggle("!hidden");
           updateEL.classList.toggle("!hidden");
        }).catch((error) => {
        alert(error)
    })
}

function update_po(value) {
    let formUpdateEL = document.querySelector('#forms_update_post');
    formUpdateEL.addEventListener('submit', (event) => {
        event.preventDefault()
        if (confirm("Are you sure about this?")) {
            let form = event.target;
            console.log(form.title)
            console.log(form.description)
            let data = new FormData(form);
            console.log()
            fetch(`api/author/delet/${value.value}`, {
                method: "PUT",
                body: data,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': '{{ csrf_token }}'
                },
            }).then(async result => {
                await result
            }).finally(() => {
                updateEL.classList.toggle("!hidden");
                diveFormPostEl.classList.toggle('!hidden')
                loadedPostAllAuthor(authorID);
                formEL.classList.toggle('!hidden');
            })
        } else {
            updateEL.classList.toggle("!hidden");
            diveFormPostEl.classList.toggle('!hidden')
            formEL.classList.toggle('!hidden');
        }
    })
}


