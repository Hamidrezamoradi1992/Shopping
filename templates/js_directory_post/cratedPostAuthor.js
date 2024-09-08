function hamids(value) {

    let formsPostAuthorAllPostEL =  document.querySelector("#forms_post_author_all_post")
    formsPostAuthorAllPostEL.addEventListener('submit', (event) => {
        event.preventDefault();
        let form = event.target;
        let data = new FormData(form)
        // console.log(form.name)
        // console.log(form.email)
        fetch(`api/author/post/create/${value}`, {
            method: "POST",
            body: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': '{{ csrf_token }}'
            },
        }).then(async result => {
            await result
        }).finally(() => {
            formEL.classList.toggle("!hidden")
            loadedPostAllAuthor(authorID)
        })

    })

}

