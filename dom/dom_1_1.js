document.body.innerHTML= `
<form class="create-user-form">
<label>
    Имя<input type="text" name="userName" placeholder="Введите ваше имя">
</label> 

<label>
    Пароль<input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">Подтвердить</button>
</form>
`

const form = document.createElement('form')
const labelName = document.createElement('label')
const labelPass = document.createElement('label')
const inputName = document.createElement('input')
const inputPass = document.createElement('input')
const button = document.createElement('button')
form.classList.add('create-user-form')
inputName.setAttribute('type','text')
inputName.setAttribute('name','userName')
inputName.setAttribute('placeholder','Введите ваше имя')
inputPass.setAttribute('type','password')
inputPass.setAttribute('name','password')
inputPass.setAttribute('placeholder','Придумайте Пароль')
button.setAttribute('type','submit')
labelName.append('Имя',inputName)
labelPass.append('Пароль',inputPass)
button.insertAdjacentText("afterbegin",'Подтвердить')
form.append(labelName,labelPass,button)
document.body.append(form)

