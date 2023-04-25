export const DateTimeFormat = v => {
    // v is a `Date` object 2023-04-20T22:27:37+00:00
    if (!(v instanceof Date) || isNaN(v)) return;
    const pad = '00';
    const yy = v.getUTCFullYear().toString();
    const mm = (v.getUTCMonth() + 1).toString();
    const dd = v.getUTCDate().toString();
    const hh = v.getUTCHours().toString();
    const min = v.getUTCMinutes().toString();
    const sec = v.getUTCSeconds().toString();

    return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}T${(pad + hh).slice(-2)}:${(pad + min).slice(-2)}:${(pad + sec).slice(-2)}+00:00`;
};
