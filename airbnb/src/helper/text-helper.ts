export const toBoolean = (val: any) => {
    if (typeof val === 'boolean') return val;
    if (val === 'true') return true;
    if (val === 'false') return false;
    return Boolean(val);
};
export const isPassword = (value: string) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(value);

}