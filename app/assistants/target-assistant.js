function TargetAssistant(target, targetStore) {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
	this.targetStore = targetStore;
	if (Object.isUndefined(target)) {
		this.target = {name: "", macAddress: ""};
	} else {
		this.target = target;
	}
}

TargetAssistant.prototype.setup = function() {
	this.controller.setupWidget(Mojo.Menu.appMenu, { omitDefaultItems: true }, {});
	this.targetNameModel = {value: this.target.name };
	this.targetMACModel = {value: this.target.macAddress };
	this.controller.setupWidget("targetName", { multiline: false }, this.model = this.targetNameModel);
	this.controller.setupWidget("targetMAC", { multiline: false }, this.model = this.targetMACModel);

	//this.controller.setupWidget("tryButton", {}, { label: "Try Magic Packet", buttonClass: "secondary"});
	//Mojo.Event.listen("tryButton", Mojo.Event.tap, this.handleTry.bind(this));
};

TargetAssistant.prototype.handleTry = function() {
};

TargetAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};


TargetAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
	target = {name: this.targetNameModel.value, macAddress: this.targetMACModel.value};
	// Ignore if both fields are blank.
	if ((target.name === "") && (target.macAddress === "")) {
		return;
	}
	this.targetStore.items.push(target);
	this.targetStore.storeDb();
};

TargetAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
