function viewpPostDetail(value) {
    if (diveFormPostEl.classList !='!hidden')
    {
        diveFormPostEl.classList.toggle('!hidden');
    }
    fetch(`api/author/delet/${value.value}`, {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        }
    }).then(async response => {
        const data = await response.json();
        mainView.innerHTML = ""
        console.log(data)
        viewDetailEL.innerHTML = `
                  <div class="pr-10 pl-10 ">
                      <h1 class="text-5xl m-auto justify-center text-center">${data.title}</h1>

                     
                      <p class="mt-4">${data.description}</p>
                      
                  <div/>
                  <div class="flex justify-center aline-center mt-40">
                       <button onclick="loadedPostAllAuthor(authorID),dddd()" class="btn btn-active btn-secondary">back</button>
                  <div/>
              `

    })
}
function dddd(){
    formEL.classList.toggle("!hidden")
}