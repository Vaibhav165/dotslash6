export const errorHandler = (data, res, code = 400) => {
    res.status(code).json({
        hasError: true,
        errorMessage: data
    })
}

export const validateAllOnce = (fields) => {
    for (let key in fields) {
        if (fields[key].trim() === '') {
            `${ key } required `
        }
    }
}

export const responseHandler = (data, res, code = 200) => {
    res.status(code).json({
        hasError: false,
        user: data
    })
}

export const getValue = (obj, path, defaultVal) => {
    try {
        if (!(obj instanceof Array)) {
            let myVal = obj
            for (let key of path) {
                if (!(key in myVal)) {
                    return defaultVal
                }
                else {
                    myVal = myVal[key];
                }
            }
            return myVal
        }
    }
    catch (error) {
        console.log(error);
        return defaultVal
    }

}

