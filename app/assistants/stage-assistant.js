WOLUI = {};
WOLUI.MenuAttrs = { omitDefaultItems: true };
WOLUI.MenuModel = {
	visible: true,
	items: [
		{label: "About Wake-on-LAN...", command: "aboutApp"}
	]
};


function StageAssistant() {
	this.targetStore = new TargetStore();
}

StageAssistant.prototype.setup = function() {
	this.targetStore.loadDb(function() {
		this.controller.pushScene('main', this.targetStore);
	}.bind(this));
};

StageAssistant.prototype.handleCommand = function(event) {
	if (event.type == Mojo.Event.command) {
		switch(event.command) {
			case "aboutApp":
				this.controller.pushScene('about');
				break;
		}
	}
};
