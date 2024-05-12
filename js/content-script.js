document.addEventListener("keydown", function(event) {
	if (event.key === "Enter" && !event.shiftKey) {
		console.log(event)
		let activeElement = document.activeElement;
		let sendButton = document.querySelectorAll("button[data-testid='send-button']")[0];
		
		if(sendButton !== undefined && sendButton !== null &&
			activeElement.tagName.toLowerCase() === 'textarea' && activeElement.id === 'prompt-textarea'){
			event.preventDefault();
			sendButton.click()
		}
	}
});