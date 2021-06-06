const messageDiv = document.querySelector('#message')
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
update.addEventListener('click', _ => {

    fetch('/quotes', { method: 'put', headers: { 'Content-type': 'application/json' }, body: JSON.stringify({ name: 'Darth Vadar', quote: 'I find your lack of faith disturbing' }) })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            console.log(response)
            window.location.reload(true)
        })
})

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No Darth Vadar quote to delete'
            }
            else {
                window.location.reload(true)
            }
        })
        .catch(error => console.error(error))
})















//   .then(response => {
//     // window.location.reload()
//     if(response === 'No quote to delete')
//     {
//         messageDiv.textContent = 'No Darth Vadar quote to delete'
//     }
//     else{
//         window.location.reload(true)
//     }
//   })