let month = prompt("Введіть число в діапазоні від 1 до 12");

if (month && !isNaN(month) && month >= 1 && month <= 12) {
    let season;
    if (month === "12" || month === "1" || month === "2") {
        season = "зима";
    } else if (month === "3" || month === "4" || month === "5") {
        season = "весна";
    } else if (month === "6" || month === "7" || month === "8") {
        season = "літо";
    } else {
        season = "осінь";
    }

    let monthName;
    switch (month) {
        case "1":
            monthName = "січень";
            break;
        case "2":
            monthName = "лютий";
            break;
        case "3":
            monthName = "березень";
            break;
        case "4":
            monthName = "квітень";
            break;
        case "5":
            monthName = "травень";
            break;
        case "6":
            monthName = "червень";
            break;
        case "7":
            monthName = "липень";
            break;
        case "8":
            monthName = "серпень";
            break;
        case "9":
            monthName = "вересень";
            break;
        case "10":
            monthName = "жовтень";
            break;
        case "11":
            monthName = "листопад";
            break;
        default:
            monthName = "грудень";
            break;
    }

    alert(`Місяць ${monthName} належить до пори року "${season}"`);
} else {
    alert("Введіть число в діапазоні від 1 до 12!");
}