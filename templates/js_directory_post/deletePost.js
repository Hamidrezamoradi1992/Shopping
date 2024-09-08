function delete_post(value) {

    if (confirm("Are you sure about this?")) {
        fetch(`api/author/delet/${value.value}`, {
            method: "DELETE",
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': '{{ csrf_token }}'
            }
        }).then(async re => {
            await re.text()
        }).catch(() => {

        }).finally(() => {
            formEL.classList.toggle("!hidden")
            diveFormPostEl.classList.toggle('!hidden')
            loadedPostAllAuthor(authorID)
        })
    }

}