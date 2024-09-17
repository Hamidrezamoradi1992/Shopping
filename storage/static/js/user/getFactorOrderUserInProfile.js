let orderListTotal = document.querySelector("#containerOrderList")

function orderList() {
    fetch('order-list', {
            method: 'GET'
        }
    ).then(async response => {
        const ordersItem = await response.json()
        console.log(ordersItem)
        let El=""
        for (let i in ordersItem) {
          const e  = `<!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src= "http://localhost:8000/storage/static/media/factor.png"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">${ordersItem[i].date}</div>
<!--                <div class="text-sm opacity-50">United States</div>-->
              </div>
            </div>
          </td>
          <td>
            ${ordersItem[i].total_price}
            <br />
            <span class="badge badge-ghost badge-sm"> accept </span>
          </td>
          <td>${ordersItem[i].is_paid}</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>`
           El+=e
        }
        orderListTotal.innerHTML=El
    })
}

