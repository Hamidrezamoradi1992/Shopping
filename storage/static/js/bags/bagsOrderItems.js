        document.addEventListener("DOMContentLoaded", (ev) => {
            ev.preventDefault()
            let order = document.querySelector("#cardOrderItems")
            fetch('api/order-items/', {
                    method: 'GET'
                }
            ).then(async response => {
                const ordersItem = await response.json()
                console.log(ordersItem)
                let elements = ''
                let total_price = 0
                for (i in ordersItem) {

                    const el = `
         <div class="justify-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-center">
          <img src="${ordersItem[i].imge}" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">${ordersItem[i].product_name}</h2>
              <p class="mt-1 text-xs text-gray-700">${ordersItem[i].product_price}</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input disabled class="h-8 w-8 border bg-white text-center text-xs outline-none disabled" type="number"  value="${ordersItem[i].count}" min="1" />
                <span disabled class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p  id='total' class="text-sm">${ordersItem[i].total}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
                    `
                    elements += el
                    total_price+=ordersItem[i].total
                     document.querySelector("#totalAllPrice").innerHTML=total_price
                     document.querySelector("#totalPrice").innerHTML=total_price
                }
                order.innerHTML = elements
            }).catch(async err => {
                if (err.status!==406) {
                    Swal.fire({
                        title: 'Error',
                        text:'Your shopping cart is empty',
                        icon: 'error',
                    })
                }
            })


        })