const products = document.querySelector("#product")
const technical = document.querySelector("#technical")
const propose = document.querySelector('#propose_product')
const comment = document.querySelector("#comment")
let pkCategory=0
let pkProduct=0

document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault()
    fetch(`api/pruductdetaile/${id}`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}'
        },
    }).then(async (response) => {
        const productes = await response.json()
        console.log(productes.product_data)
        let descriptionss = ""
        pkProduct=productes.product_data.id
        pkCategory=productes.product_data.category
        console.log(pkCategory,pkProduct)
        if (productes.product_data.short_description != null) {
            descriptionss = productes.product_data.short_description
        } else {
            descriptionss = ""
        }
        products.innerHTML = `
                        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
       
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
<!--                    <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">Home / Furniture / Wooden Stool</p>-->
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">${productes.product_data.name}</h2>
      
                    <div class="flex flex-row justify-between mt-5">
                       <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg" alt="stars">
                       <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg" alt="stars">
                        <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">brand : ${productes.brand}</p>
                    </div>
<!--  serch and fibished -->
                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">  ${descriptionss}</p> 
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">ریال ${productes.product_data.price}</p>

                   <form  id="add_bags" class="mt-10">
                                    {% csrf_token %}
                             <div class="flex flex-row justify-between">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                            <div class="flex">
                                <span onclick="minus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                                <input id="counter" name="count" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                                <span onclick="plus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                            </div>
                        </div>   
                            <input type="text" class="!hidden" value="${productes.product_data.id}" name="product_id" >
                            <button onclick="bagsProduct()" class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Add to shopping bag</button>
                    </form>
                            
                       
                       
                </div>
      
                <!-- Preview Images Div For larger Screen-->
      
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src="${productes.product_data.picture}" alt="Wooden Chair Previw" />
                    </div>

                </div>
            </div>
<!--button view-->
             <div class="flex justify-center items-center w-full">
                  <button onclick="technicalProduct(${productes.product_data.id})" class="mx-2 my-2 bg-white transition 
                  duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-indigo-700 px-8 py-3 text-sm
                   focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"> technical description </button>
                  <button onclick="commentProduct(${productes.product_data.id}" class="mx-2 my-2 bg-white transition
                   duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-indigo-700 px-8 py-3 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"> coment </button>
             </div>
        </div>
      
        `

    }).catch((error)=>{console.log(error)
    }).finally(()=>{ proposeView(pkCategory,pkProduct)})


})


//
// select quantity
//               <div class="lg:mt-11 mt-10">
// <!--                        <div class="flex flex-row justify-between">-->
// <!--                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>-->
// <!--                            <div class="flex">-->
// <!--                                <span onclick="minus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>-->
// <!--                                <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />-->
// <!--                                <span onclick="plus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <hr class="bg-gray-200 w-full my-2" />-->
// <!--                        <div class="flex flex-row justify-between items-center mt-4">-->
// <!--                            <p class="font-medium text-base leading-4 text-gray-600 ">Dimensions</p>-->
// <!--                            <img onclick="rotate()" id="rotateSVG" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100  dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg4.svg" alt="dropdown">-->
// <!--                            <img onclick="rotate()" id="rotateSVG" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100 hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg4dark.svg" alt="dropdown">-->
// <!--                        </div>-->
// <!--                        <hr class="bg-gray-200 w-full mt-4" />-->
// <!--                    </div>-->