Ext.define('App.controllers.ErrorController', {
    singleton: true,
    alternateClassName: '_Error',

    validateResponse(response) {
        const responseObject = Ext.decode(response.responseText);

        if (!responseObject.success) {
            Ext.MessageBox.alert(responseObject.message);
            return {success: false, message: responseObject.message };
        }

        if (responseObject.returnable) {
            Ext.MessageBox.alert(responseObject.message);
        }
        return {success: true, message: responseObject.message };
    },

    errorHandler(error, errorPlace) {
        console.warn(`${errorPlace}: ${error}`);
    },
})