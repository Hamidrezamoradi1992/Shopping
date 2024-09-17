
document.addEventListener("DOMContentLoaded", (ev) => {
            ev.preventDefault()
            let elementsView = document.querySelector("#container-1")
            let viewForm=document.querySelector('#formEdit')
            fetch('user-profile', {
                    method: 'GET'
                }
            ).then(async response => {
                const contentUser= await response.json()
                console.log(response.city)
                console.log(contentUser)
                console.log(contentUser.account.name)
                    elementsView.innerHTML = `
<div class="h-full ">
 
  <div class="border-b-2 block md:flex">

    <div class="w-full  min-h-[80vm] md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div class="flex justify-between">
        <span class="text-xl font-semibold block">Admin Profile(super user) : ${contentUser.user.is_superuser}</span>
        <a href="#" onclick="userEdit()" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>
<!--      username-->
      <div class="flex justify-between">
        <span class="text-xl font-semibold block">Username : ${contentUser.user.username}</span>      
      </div>
<!--    avatar-->
      <div class="w-full p-8 mx-2 flex justify-center focus:outline-none ">
        <img id="showImage" class="h-full w-full rounded-full overflow-hidden shadow" src="${contentUser.account.picture}" alt="">                          
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
            <input disabled " class="border-1  rounded-r px-4 py-2 w-full" type="text" value="${contentUser.account.name}" />
          </div>
        </div>
        <!--    age-->
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">AGE</label>
          <div class="flex">
            <input disabled  class="border-1  rounded-r px-4 py-2 w-full" type="date" value="${contentUser.account.age}" />
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
          <input class="border-1  rounded-r px-4 py-2 w-full" type="email" value="${contentUser.city.name}" />
          <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
       
      </div>
    </div>

 </div>
 
</div>

`
  viewForm.innerHTML=`

    <!-- Main modal -->
    <div id="authentication-modal" aria-hidden="true" class="!hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center ">
        <div class="relative w-full max-w-md px-4 h-full md:h-auto">
            <!-- Modal content -->
            <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <div class="flex justify-end p-2">
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onclick="hiddenFunc()">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#" id="formAccontUpdate">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Update your profile</h3>
                    <!--name -->
                    <div>
                        <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.name}" required="">
                    </div>
                    <!--family -->
                    <div>
                        <label for="family" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                        <input type="text" name="family" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.family}" required="">
                    </div>     
                        <!--birtdate -->
                    <div>
                        <label for="bertdate" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">AGE</label>
                        <input type="datetime-local" name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.age}" required="">
                    </div>                 
                       <!--email -->
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.user.email}" required="">
                    </div>
                          <!--zipcode -->
                    <div>
                        <label for="zipcode" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Zip Code</label>
                        <input type="text" name="zipcode" id="zipcode" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="${contentUser.account.zipcode}" required="">
                    </div>
<!--                    city-->
                    <select onclick="getCity" class="select select-success w-full max-w-xs">
                          <option disabled selected>Pick your city </option>
                    </select>
<!--                    <div class="flex justify-between">-->
<!--                        <div class="flex items-start">-->
<!--                            <div class="flex items-center h-5">-->
<!--                                <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">-->
<!--                            </div>-->
<!--                            <div class="text-sm ml-3">-->
<!--                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>-->
<!--                    </div>-->
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">update your account</button>
<!--                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">-->
<!--                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>-->
<!--                    </div>-->
                </form>
            </div>
        </div>
    </div> 

`
            })

        })

