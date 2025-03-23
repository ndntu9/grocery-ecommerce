function isEmail(value) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

function isNotEmpty(value) {
    return !!value.length;
}

function isStrongPassword(value, options = { minLength: 8, haveUpperCase: true, haveNumber: true, haveSymbol: true }) {
    const { minLength, haveUpperCase, haveNumber, haveSymbol } = options;

    if (value.length < minLength) {
        return {
            test: false,
            message: 'Password must have at least 8 characters'
        };
    }

    if (haveUpperCase && !/[A-Z]/.test(value)) {
        return {
            test: false,
            message: 'Password must have at least 1 uppercase characters'
        };
    }

    if (haveNumber && !/[0-9]/.test(value)) {
        return {
            test: false,
            message: 'Password must have at least 1 number'
        };
    }

    if (haveSymbol && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        return {
            test: false,
            message: 'Password must have at least 1 special characters'
        };
    }

    return {
        test: true,
        message: ''
    };
}

function confirmPassword(value, password) {
    return value === password;
}
