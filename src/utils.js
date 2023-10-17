class utils {
    static isValidRoute(router, peticion) {
        let isValid = false;
        for (const valor of router) {
            if (valor === peticion) {
                isValid = true;
                break;
            }
        }
        return isValid;
    }
}
export default utils;