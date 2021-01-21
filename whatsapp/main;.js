import Request from 'https://cdn.jsdelivr.net/npm/@schirrel/request@1.2.0/Request.js';

const url = 'http://api.mercadoalencar.com.br/api/newsletter';

var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '(00)00000-0000'
  });
		
		const submitedForm = (event) => {
			event.preventDefault()
		const number = event.target[0].value;
    Request.post(url', {
    body: {
        number: number
    }
})
.then((res) => console.log)
.catch((err) => console.log);
		}
		
		
		document.querySelector('form').onsubmit = submitedForm;


