const firstName = document.querySelector('#name')
const surname = document.querySelector('#surname')

const street = document.querySelector('#street')
const houseNumber = document.querySelector('#hnumber')
const flatNumber = document.querySelector('#flat-number')
const cardPayment = document.querySelector('#payment')
const cashPayment = document.querySelector('#payment2')
const pack = document.querySelector('#pack')
const postcard = document.querySelector('#postcard')
const discount = document.querySelector('#discount')
const pen = document.querySelector('#pen')
const submitBtn = document.querySelector('#submit-button')
const confirmation = document.querySelector('.order-confirmation')
const shippingDetails = document.querySelector('#address-details')

const paymentContener = document.querySelector('.payment')

const checkboxesContener = document.querySelector('.checkboxes')

//error spans
const nameError = document.querySelector('#name-error')
const surnameError = document.querySelector('#surname-error')
const dateError = document.querySelector('#date-error')
const streetError = document.querySelector('#name-street-error')
const houseError = document.querySelector('#house-error')
const flatError = document.querySelector('#flat-error')
const paymentError = document.querySelector('#payment-error')
const giftError = document.querySelector('#gift-error')
const submitError = document.querySelector('#submit-error')

function buttonDisabled() {
	if (
		!nameValidation() ||
		!surnameValidation() ||
		!nameValidation() ||
		!streetValidation() ||
		!houseNumberValidation() ||
		!flatNumberValidation() ||
		!paymentType() ||
		!dateValidation()
	) {
		submitBtn.classList.add('btn-disabled')
		submitBtn.classList.remove('btn-purchase')
	} else {
		submitBtn.classList.remove('btn-disabled')
		submitBtn.classList.add('btn-purchase')
	}
}

firstName.addEventListener('focusout', buttonDisabled)
firstName.addEventListener('blur', nameValidation)
function nameValidation() {
	let name = firstName.value
	if (name.length === 0) {
		firstName.style.border = '2px solid #a4161a'
		nameError.innerHTML = 'Name is required.'
		return false
	}
	if (!name.match(/^[a-zA-Z]{4,30}$/)) {
		nameError.innerHTML = 'Write full name'
		firstName.style.border = '2px solid #a4161a'
		return false
	} else {
		firstName.style.border = '1px solid green'
		nameError.innerHTML = ''
		return true
	}
}

surname.addEventListener('focusout', buttonDisabled)
surname.addEventListener('blur', surnameValidation)
function surnameValidation() {
	let surnameValid = surname.value
	if (surnameValid.length === 0) {
		surname.style.border = '2px solid #a4161a'
		surnameError.innerHTML = 'Surname is required.'
		return false
	}
	if (!surnameValid.match(/^[a-zA-Z]{5,30}$/)) {
		surnameError.innerHTML = 'Write valid surname'
		surname.style.border = '2px solid #a4161a'
		return false
	} else {
		surname.style.border = '1px solid green'
		surnameError.innerHTML = ''
		return true
	}
}

//date validation

const date = document.querySelector('#date')
const today = new Date()
let dd = today.getDate() + 1
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()
const lastDayDate = new Date(yyyy, mm, 0).getDate()

function maxDate() {
	if (dd > lastDayDate) {
		dd = 1
		mm += 1
		if (mm === 13) {
			mm = 1
			yyyy += 1
		}
	}
	dd = dd < 10 ? '0' + dd : dd
	mm = mm < 10 ? '0' + mm : mm
	date.setAttribute('min', `${yyyy}-${mm}-${dd}`)
}

date.addEventListener('click', maxDate)

let dateProvided = date.value
let newDateUser

date.addEventListener('focusout', () => {
	newDateUser = date.value
})
date.addEventListener('focusout', buttonDisabled)
date.addEventListener('blur', dateValidation)
date.addEventListener('focusout', dateValidation)

function dateValidation() {
	if (newDateUser) {
		date.style.border = '1px solid green'
		dateError.innerHTML = ''
		return true
	}
	if (!newDateUser) {
		dateError.innerHTML = 'Choose delivery date'
		date.style.border = '2px solid #a4161a'
		return false
	}
}

function maxCheckboxes() {
	const giftBoxes = document.querySelectorAll('.choices')
	const giftBoxesArr = [...giftBoxes]
	giftBoxesArr.forEach(el => {
		el.addEventListener('change', () => {
			const length = giftBoxesArr.filter(checkbox => checkbox.checked).length
			el.checked = !(length > 2) && el.checked
		})
	})
}

maxCheckboxes()

street.addEventListener('focusout', buttonDisabled)
street.addEventListener('blur', streetValidation)
function streetValidation() {
	let streetValid = street.value
	if (streetValid.length === 0) {
		street.style.border = '2px solid #a4161a'
		streetError.innerHTML = 'Street is required.'
		return false
	}
	if (!streetValid.match(/^[0-9a-zA-Z ]+$/)) {
		streetError.innerHTML = 'Write valid street'
		street.style.border = '2px solid #a4161a'
		return false
	} else {
		street.style.border = '1px solid green'
		streetError.innerHTML = ''
		return true
	}
}

houseNumber.addEventListener('focusout', buttonDisabled)
houseNumber.addEventListener('blur', houseNumberValidation)
function houseNumberValidation() {
	let houseNumberValid = houseNumber.value
	if (houseNumberValid.length === 0) {
		houseNumber.style.border = '2px solid #a4161a'
		houseError.innerHTML = 'House number is required.'
		return false
	}
	if (!houseNumberValid.match(/^[0-9].+$/)) {
		houseError.innerHTML = 'Write valid house number'
		houseNumber.style.border = '2px solid #a4161a'
		return false
	} else {
		houseNumber.style.border = '1px solid green'
		houseError.innerHTML = ''
		return true
	}
}

flatNumber.addEventListener('focusout', buttonDisabled)
flatNumber.addEventListener('blur', flatNumberValidation)
function flatNumberValidation() {
	let flatNumberValid = flatNumber.value
	if (flatNumberValid.length === 0) {
		flatNumber.style.border = '2px solid #a4161a'
		flatError.innerHTML = 'Flat number is required.'
		return false
	}
	if (!flatNumberValid.match(/^[1-9–]+[-0-9–]+[#0-9]*$/)) {
		flatError.innerHTML = 'Write valid flat number'
		flatNumber.style.border = '2px solid #a4161a'
		return false
	} else {
		flatNumber.style.border = '1px solid green'
		flatError.innerHTML = ''
		return true
	}
}

paymentContener.addEventListener('click', cashType)
paymentContener.addEventListener('click', cardType)
paymentContener.addEventListener('click', buttonDisabled)
paymentContener.addEventListener('blur', paymentType)

function cashType() {
	cashPayment.addEventListener('change', () => {
		if (cashPayment.checked === false) {
			return false
		} else {
			paymentError.innerHTML = ''
			return true
		}
	})
}

function cardType() {
	cardPayment.addEventListener('change', () => {
		if (cardPayment.checked === false) {
			return false
		} else {
			paymentError.innerHTML = ''
			return true
		}
	})
}

function paymentType() {
	if (cardPayment.checked === false && cashPayment.checked === false) {
		paymentError.innerHTML = 'Choose one payment type!'
		return false
	} else {
		return true
	}
}

//checboxes

let checkboxes = document.querySelectorAll('input[type=checkbox][name=gift]')
let checkedBoxes = []

checkboxes.forEach(function (checkbox) {
	checkbox.addEventListener('change', function () {
		checkedBoxes = Array.from(checkboxes).filter(i => i.checked)

		if (checkedBoxes.length > 2) {
			giftError.innerHTML = 'Only two gifts possible.'
			return false
		}
		if (checkedBoxes.length <= 2) {
			giftError.innerHTML = ''
			return true
		}
	})
})

////

function validateForm() {
	submitBtn.addEventListener('click', e => {
		if (
			!nameValidation() ||
			!surnameValidation() ||
			!nameValidation() ||
			!streetValidation() ||
			!houseNumberValidation() ||
			!flatNumberValidation() ||
			!paymentType() ||
			!dateValidation()
		) {
			submitError.style.display = 'block'
			submitError.innerHTML = 'Please fill all required fields!'
			setTimeout(function () {
				submitError.style.display = 'none'
			}, 3000)
			return false
		} else {
			confirmation.style.display = 'block'
			e.preventDefault()
			shippingDetails.innerText = `${firstName.value} ${surname.value}, ${street.value} ${houseNumber.value} / ${flatNumber.value}`
		}
	})
}

validateForm()