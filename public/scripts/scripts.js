const formReg = document.querySelector('#form-reg')

formReg.addEventListener('submit', async(e)=>{
e.preventDefault();
const{name} = e.target;
const res = await fetch('/',{
method: 'POST',
headers:{
  'Content-type': 'application/json',
},
body: JSON.stringify({
name: name.value,
}),
});
const data = await res.json();
  if (data.message !== 'ok') {
    alert(data.message);
  }else{
    window.location.assign('/themes')
  }
})