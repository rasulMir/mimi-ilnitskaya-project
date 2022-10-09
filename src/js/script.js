
function addDelClass(el, className) {
	if (el.classList.contains(`${className}_active`)) {
		el.classList.remove(`${className}_active`)
	} else {
		el.classList.add(`${className}_active`)
	}
}

function searchOpen() {

	const searchIcon = document.querySelector('#searchIcon')
	const searchInp = document.querySelector('#searchInp')

	searchIcon.addEventListener('click', () => {
		addDelClass(searchInp, 'head-top__search-inp')
	})

}

function menuOpen() {
	
	const menuIcon = document.querySelector('#menuIcon')
	const headNavBttm = document.querySelector('.head-nav-bttm')

	if (!menuIcon) {
		return
	}

	menuIcon.addEventListener('click', () => {
		addDelClass(headNavBttm, 'head-nav-bttm')
	})

}


document.addEventListener('DOMContentLoaded', () => {
	menuOpen()
	searchOpen()
})
