function signIn() {
    const forms = document.querySelector("#signInform")
    let data = new FormData(forms)
    fetch(`accounts/api/login`, {
        method: "POST",
        body: data,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    }).then(async request => {
        if (request.status !== 201) throw request
        Swal.fire({
            title: 'Success',
            text: 'Registration has been successfully !',
            icon: 'success',
            willClose: () => {
                window.location.replace("/")
            }
        })

    }).catch(async err => {
        Swal.fire({
            title: 'Error',
            text: await err.text(),
            icon: 'error',
        })
    })
}