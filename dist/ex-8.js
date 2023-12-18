// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest". 
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen. 
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng
// 1. Definerier enums för UserRoles Adming, Member och Guest
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Member"] = "Member";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
// 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
function assignBadgeColor(user) {
    // Här...
    if (user.role == "Admin") {
        return "Red";
    }
    else if (user.role == "Member") {
        return "Blue";
    }
    else if (user.role == "Guest") {
        return "Green";
    }
    else {
        return "Unknown";
    }
}
// Testa funktionen
var user1 = { name: "Alice", role: UserRole.Admin };
console.log(assignBadgeColor(user1)); // Ska skriva ut "Red".
