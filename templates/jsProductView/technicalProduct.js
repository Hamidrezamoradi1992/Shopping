function technicalProduct(value) {
    if (technical.innerText == '') {
        console.log('hamid')
        fetch(`api/pruductdetaile/technical/${value}`, {
            method: "GET",
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': '{{ csrf_token }}'
            }
        }).then(async (response) => {
            const dataTechnical = await response.json()
            let string=dataTechnical.description
            console.log(string)
            technical.innerHTML = `
                <div class="flex w-full flex-col items-center justify-center content-center">
                    <div class=" w-[90vw] card bg-base-300 rounded-box grid h-20 place-items-center p-51 h-auto">
                       <textarea class="w-[90vw] min-h-[24rem]  rounded-box p-10" style="direction: rtl"> ${string} </textarea>
                      </div>
               </div>
            `
        })
    } else {
        console.log('reza')
        technical.classList.toggle('!hidden')
    }


}

//
//<div className="flex w-full flex-col">
//    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
//    <div className="divider"></div>
//    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
//</div>