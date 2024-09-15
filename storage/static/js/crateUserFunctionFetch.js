function createUser() {
    const formDate = document.querySelector('#signInform')
    let data = new FormData(formDate)
    console.log(data)
    fetch('accounts/api/createUser', {
        method: 'POST',
        body: data,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }}).then(async res => {
                    if (res.status !== 201) throw res

                    Swal.fire({
                        title: 'Success',
                        text: 'Registration has been successfully !',
                        icon: 'success',
                        willClose: () => {
                           container.classList.remove("right-panel-active");
                        }
                    })
                })
                .catch(async err => {
                    Swal.fire({
                        title: 'Error',
                        text: await err.text(),
                        icon: 'error',
                    })
                })
}