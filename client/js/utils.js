export function monefy(num) {
    if (!num) return '';
   
    var partes = num.toString().split(".");
    partes[0]=partes[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return partes.join(",");
    
}



export function getRandomColor() {
    return `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${
        65 + 10 * Math.random()
    }%)`;
}

export function getMonth(dateString) {
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const date = new Date(dateString);

    return monthNames[date.getMonth()];
}

export function formatDate(date) {
    return date.split('T')[0];
}
