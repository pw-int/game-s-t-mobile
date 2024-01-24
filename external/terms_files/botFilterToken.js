function getBotFilterToken(botFilterAlias, callback)
{
    switch (botFilterAlias) {
        case 'empello':
        case 'empello_v2':
            this.getEmpelloToken(callback);
            return true;
        case 'opticks':
            setTimeout(function send()
            {
                if (typeof opticksClickId === 'undefined') {
                    return setTimeout(send, 100);
                }

                callback(new URLSearchParams({
                    opticksClickId: opticksClickId,
                }).toString());

            }, 100);
            return true;
        default:
            return false;
    }
}

function validateBotFilterToken(botFilterAlias)
{
    this.getBotFilterToken(botFilterAlias, function (result) {
        $.get('/botfilter/validate_token?' + result).success(function (response) {
            if (response.status === 'blocked') {
                $(location).attr('href', response.url);
            }

            if (response.status === 'success') {
                hideLoader();
            }
        });
    })
}