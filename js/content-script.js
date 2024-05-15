Element.prototype.findParentByTag = function(tagName) {
    let parent = this.parentNode
    
    while (parent !== null) {
        if (parent.tagName.toLowerCase() === tagName) {
            return parent
        }
        parent = parent.parentNode
    }
    return null
}

document.addEventListener("keydown", function(event) {
	if (event.key === "Enter" && !event.shiftKey) {
		let activeElement = document.activeElement

		try{
			if(activeElement !== null && activeElement.tagName.toLowerCase() === 'textarea' && activeElement.id === 'prompt-textarea'){
				let form = activeElement.findParentByTag('form')
				let svg = form.querySelector('.icon-2xl')
				let sendButton = svg.findParentByTag('button')

				if(!sendButton.disabled){
					event.preventDefault()
					sendButton.click()
				}
			}
		} catch(error) {}
	}
});