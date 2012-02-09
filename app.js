// Set up loader
Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('studentenrollment', 'app');

// Required source files
Ext.Loader.require('studentenrollment.view.Viewport');
Ext.application({
	name : 'studentenrollment',
	autoCreateViewport : true,
	//height:'80',
	//appFolder: 'app',
	launch : function() {
		
	}
	
}


);
//Ext.Loader.setConfig({enabled:true});