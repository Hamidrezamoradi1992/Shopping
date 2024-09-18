      const containers_1=document.querySelector('#container')
        document.addEventListener('DOMContentLoaded', function () {
            fetch('api/product', {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': '{{ csrf_token }}'
                },
            }).then(async data=>{
                const products=await data.json()
                let el=""

                   console.log(products)
                for(let r in products){


                   const card=`
                   
                       <a href="product/detail/${products[r].id}" target="_blank"> <div class="relative w-64 h-36 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                            <img alt="moto" src="${products[r].picture}" class="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
                            <div class="w-4/6">
                                <p class="mb-2 text-lg font-medium text-gray-800">
                                    ${products[r].name}
                                </p>
                                <p class="text-xs text-gray-400">
                                    ${products[r].short_description}
                                </p>
                                <p class="text-xl font-medium text-indigo-500">
                                    $${products[r].price}
                                </p>
                            </div>
                        </div>
                       </a>
                   `
                   el+=card
                }
               containers_1.innerHTML=el
            })

        })