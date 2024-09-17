let formEdits = ""

function updateProfile() {
    console.log('open')
    const formUpdate = document.querySelector('#formAccontUpdate')
    console.log(formUpdate.name)
    let data = new FormData(formUpdate)
    console.log(formUpdate)
    fetch('user', {
            method: 'POST',
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            body:data

        }).finally(()=>{
            window.location.replace('view')
    })
}

function userEdit() {
    formEdits = document.querySelector('#authentication-modal')
    formEdits.classList.toggle("!hidden")

}

function hiddenFunc() {
    formEdits.classList.toggle("!hidden")
}
