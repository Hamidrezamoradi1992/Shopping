function bagsProduct(value) {
    const form_bags=document.querySelector("#add_bags")
    console.log(form_bags)
    let form_bag = new FormData(form_bags)

    fetch('api/product-add-order/', {
        method: 'POST',
        body:form_bag,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
}