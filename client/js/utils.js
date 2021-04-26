export function monefy(num) {
    if (!num) return '';

    const numStr = String(num);
    const points = numStr.length / 3;
    const result = [];

    for (let i = 0; i < points; i++) {
        const s = -3 * (i + 1);
        const e = -3 * i || undefined;
        const chunk = numStr.slice(s, e);

        result.push(chunk);
    }

    return result.reverse().join('.');
}

export function getRandom() {
    return Math.floor(Math.random() * 255);
}

export function getMonth(dateString) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const date = new Date(dateString);

    return monthNames[date.getMonth()];
}
