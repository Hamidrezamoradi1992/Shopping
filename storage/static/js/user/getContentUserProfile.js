let viewForm = document.querySelector('#formAccontUpdate')
document.addEventListener("DOMContentLoaded", (ev) => {
    ev.preventDefault()
    let elementsView = document.querySelector("#container-1")
    fetch('user-profile', {
            method: 'GET'
        }
    ).then(async response => {
        const contentUser = await response.json()
        console.log(contentUser)
        console.log(contentUser.account.name)
        elementsView.innerHTML = `
<div class="h-full ">
 
  <div class="border-b-2 block md:flex">

    <div class="w-full min-h-[80vm] md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div class="flex justify-between">
        <span class="text-xl font-semibold block">Admin Profile(super user) : ${contentUser.user.is_superuser}</span>
        <a href="#" onclick="userEdit()" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>
<!--      username-->
      <div class="flex justify-between">
        <span class="text-xl font-semibold block">Username : ${contentUser.user.username}</span>      
      </div>
<!--    avatar-->
<br>
<br>
<br>
<br>
      <div class="w-full  flex justify-center focus:outline-none ">
       
        <img class="rounded-full w-[32rem] h-[32rem]" src="${contentUser.account.picture}" alt="Extra large avatar">                      
        </div>
    </div>
    
    <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">

      <div class="rounded  shadow p-6">
        <!--    name-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
          <div class="flex">
            <input disabled  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.name}" />
          </div>
        </div>
        <!--    family-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Family</label>
          <div class="flex">
            <input disabled  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.family}" />
          </div>
        </div>
        <!--    age-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">AGE</label>
          <div class="flex">
            <input disabled  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.age}" />
          </div>
        </div>
        <!--        email-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Email</label>
          <div class="flex">
            <input  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.user.email}" />
          </div>
        </div>
        <!--        phone-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Phone</label>
          <div class="flex">
            <input  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.phone}" />
          </div>
        </div>
        <!--        zip codeip code-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Zip ode</label>
          <div class="flex">
            <input  class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.zipcode}" />
          </div>
        </div>
        <!--        city-->
        <div class="pb-4">
          <label for="about" class="font-semibold text-gray-700 block pb-1">City</label>
          <input class="border-1  rounded-r px-4 py-2 w-full" type="email" value="" />
          <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
       
      </div>
    </div>

 </div>
 
</div>

`
        viewForm.innerHTML += `

    <!-- Main modal -->
  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Update your profile</h3>
                    <!--name --> 
                    {% csrf_token %}
                    <div>
                        <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                        <input type="text" name="name"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.name}" required="">
                    </div>
                    <!--family -->
                    <div>
                        <label for="family" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                        <input type="text" name="family" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.family}" required="">
                    </div>     
                        <!--birtdate -->
                    <div>
                        <label for="bertdate" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">AGE</label>
                        <input type="datetime-local" name="age"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.age}" required="">
                    </div>                 
                       <!--email -->
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                        <input type="email" name="email"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.user.email}" required="">
                    </div>
                          <!--zipcode -->
                    <div>
                        <label for="zipcode" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Zip Code</label>
                        <input type="text" name="zipcode" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.zipcode}" required="">
                    </div>
                    
<!--                   phone -->
                     <div>
                        <label for="phone" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone</label>
                        <input type="text" name="phone"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.phone}" required="">
                    </div>
<!--                    city-->
                    <select  class="select select-success w-full max-w-xs" id="cityAll">
                          <option disabled selected>Pick your city </option>
                    </select>
                           <!--image -->
                    <div>
                        <label for="image" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Zip Code</label>
                        <input type="file"  name="picture"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.zipcode}" required="">
                    </div>
                    <button type="button" onclick="updateProfile()" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">update your account</button>


`

    }).catch(async err => {
        console.log(await err.text())
    }).finally(() => {
        let cityDetail = document.querySelector('#cityAll')
        fetch('city', {
                method: 'GET'
            }
        ).then(async response => {
            let cityS = await response.json()
            console.log(cityS[0].name)
            let El = ''
            for (i in cityS) {
                let e = `
            <option name="city" >${cityS[i].name}</option>
           `
                El += e
            }
            cityDetail.innerHTML = El
        }).catch(async err => {
            console.log(await err.text())
        })
    })
})

