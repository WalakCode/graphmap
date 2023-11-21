const user = document.getElementById('user')
const pass = document.getElementById('pass')
const btn = document.getElementById('btn')


btn.addEventListener('click', handleClick)

function handleClick(){
    const data = {
        user:user.value,
        pass:pass.value
    }
    fetch('/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data:data
        })
      })

        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}





