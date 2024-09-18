function proposeView(value1, value2) {
    fetch(`api/pruductdetaile/approach/${value1}/${value2}`, {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        },
    }).then(async (response) => {
        const category_product = await response.json()
        console.log(category_product)
        let card = ""
        for (let i in category_product) {
            const el = `
            <a href="${category_product[i].id}"  class="data-theme=light"> 
<div className="card glass w-96 min-h-[15rem]">
    <figure>
        <img
            src="${category_product[i].picture}"
            alt="car!"/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">${category_product[i].name}</h2>
        <p>${category_product[i].short_description}</p>
        <div class="grid grid-cols-2">
        <p className="text-xl font-medium text-indigo-500">
            $${category_product[i].price}
        </p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
        </div>
        </div>
    </div>
</div>

                       </a>
            `
            card += el
        }
        propose.innerHTML = card
    }).catch(async err => {
        alert()
                    Swal.fire({
                        title: 'Error',
                        text: await err.text(),
                        icon: 'error',
                    })
                })
}

