Element.prototype.getFirstParentByTag = function(tagName) {
    let parent = this.parentNode
    
    while (parent !== null) {
        if (parent.tagName.toLowerCase() === tagName) {
            return parent
        }
        parent = parent.parentNode
    }
    return null
}

Element.prototype.getLastChildButton = function() {
    for (let prop of Reflect.ownKeys(this).reverse()) {
		console.log(prop)
		if(this[prop].tagName.toLowerCase() === 'button'){
			return this[prop]
		}
	}
    return undefined
}

document.addEventListener("keydown", function(event) {
	if (event.key === "Enter" && !event.shiftKey) {
		try{
			let activeElement = document.activeElement
			if(activeElement !== null && activeElement.tagName.toLowerCase() === 'textarea' && activeElement.id === 'prompt-textarea'){
				let form = activeElement.getFirstParentByTag('form')
				let button = form.getLastChildButton()

				if(button !== undefined){
					event.preventDefault()
					button.click()
				}
			}
		} catch(error) {}
	}
});