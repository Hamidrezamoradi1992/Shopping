

function proposeView(value1,value2) {
    fetch(`api/pruductdetaile/approach/${value1}/${value2}`, {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        },
    }).then(async (response) => {
        const category_product = await response.json()
        console.log(category_product)
        let card=""
        for (let i in category_product) {
            const el = `
            <a href="${category_product[i].id}" target="_blank"> <div class="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                            <img alt="moto" src="${category_product[i].picture}" class="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
                            <div class="w-4/6">
                                <p class="mb-2 text-lg font-medium text-gray-800">
                                    ${category_product[i].name}
                                </p>
                                <p class="text-xs text-gray-400">
                                    ${category_product[i].short_description}
                                </p>
                                <p class="text-xl font-medium text-indigo-500">
                                    $${category_product[i].price}
                                </p>
                            </div>
                        </div>
                       </a>
            `
            card+=el
        }
        propose.innerHTML=card
    })
}


