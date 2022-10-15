const scriptURL = 'https://script.google.com/macros/s/AKfycbwCLP3FtIcbCL5SG2yIg2Yg_JCFlg6RaPZLQ6o06ihNKYUGl9Hg3M_Wsd65kgws3LvY/exec'
const form = document.forms['ice-coconut-jelly']
const btnInput = document.querySelector(".btn-input")
const btnLoading = document.querySelector(".btn-loading")
const alert = document.querySelector(".alert")
const text = document.getElementById('text')


text.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value
    btnInput.disabled = false;

    if (value === "") {
        btnInput.disabled = true;
    }
})


form.addEventListener('submit', e => {
    e.preventDefault()

    // ketika tombol masukkan data  diklik
    // hilangkan tombol masukkan data kemudian munculkan tombol loading
    btnInput.classList.toggle("d-none")
    btnLoading.classList.toggle("d-none")


    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // hilangkan tombol loading kemudian munculkan tombol masukkan data
            btnInput.classList.toggle("d-none")
            btnLoading.classList.toggle("d-none")

            // ketika sukses dikirim tampilkan alert nya
            alert.classList.toggle("d-none")

            // reset form nya
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})