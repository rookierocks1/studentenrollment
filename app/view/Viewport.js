Ext.define('studentenrollment.view.Viewport', {
	extend : 'Ext.container.Viewport',	
	layout : 'fit',
	requires:['studentenrollment.view.quarterView'],
	initComponent : function() {
		 this.items =[
                {
                    xtype: 'quarterView'
                }
            ];
           this.callParent(); 
	}
});
