function bagsProduct(value) {
    if (hamid22 == 1) {
        alert()
        const form_bags = document.querySelector("#add_bags")
        console.log(form_bags)
        let form_bag = new FormData(form_bags)

        fetch('api/product-add-order/', {
                method: 'POST',
                body: form_bag,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }
            },
        )
    } else {
        alert('please login to account and add product to bag')

    }


}