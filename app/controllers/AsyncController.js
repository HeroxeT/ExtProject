Ext.define('App.controllers.AsyncController', {
    singleton: true,
    alternateClassName: '_Async',

    saveRecord(record) {
        const controller = this;

        return new Promise((resolve, reject) => {
            record.save({
                success: controller.recordCallback(resolve, reject),
                failure: controller.recordCallback(resolve, reject),
            })
        });
    },

    privates: {
        recordCallback(resolve, reject) {
            return(record, operation) => {
                const validateResponse = _Error.validateResponse(operation._response);

                if(!validateResponse.success) {
                    reject(new Error(validateResponse.message));
                    return;
                }

                resolve(record);
            }
        }
    }
})