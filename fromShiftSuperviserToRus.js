function engtoRu(c) {
    if(c == 'q' || c == 'Q') {
        return 'й';
    } else if (c == 'w' || c == 'W') {
        return 'ц';
    } else if (c == 'e' || c == 'E') {
        return 'у';
    } else if (c == 'r' || c == 'R') {
        return 'к';
    } else if (c == 't' || c == 'T') {
        return 'е';
    } else if (c == 'y' || c == 'Y') {
        return 'н';
    } else if (c == 'u' || c == 'U') {
        return 'г';
    } else if (c == 'i' || c == 'I') {
        return 'ш';
    } else if (c == 'o' || c == 'O') {
        return 'щ';
    } else if (c == 'p' || c == 'P') {
        return 'з';
    } else if (c == '[' || c == '{') {
        return 'х';
    } else if (c == ']' || c == '}') {
        return 'ъ';
    } else if (c == 'a' || c == 'A') {
        return 'ф';
    } else if (c == 's' || c == 'S') {
        return 'ы';
    } else if (c == 'd' || c == 'D') {
        return 'в';
    } else if (c == 'f' || c == 'F') {
        return 'а';
    } else if (c == 'g' || c == 'G') {
        return 'п';
    } else if (c == 'h' || c == 'H') {
        return 'р';
    } else if (c == 'j' || c == 'J') {
        return 'о';
    } else if (c == 'k' || c == 'K') {
        return 'л';
    } else if (c == 'l' || c == 'L') {
        return 'д';
    } else if (c == ';' || c == ':') {
        return 'ж';
    } else if (c == '\'' || c == '\"') {
        return 'э';
    } else if (c == 'z' || c == 'Z') {
        return 'я';
    } else if (c == 'x' || c == 'X') {
        return 'ч';
    } else if (c == 'c' || c == 'C') {
        return 'с';
    } else if (c == 'v' || c == 'V') {
        return 'м';
    } else if (c == 'b' || c == 'B') {
        return 'и';
    } else if (c == 'n' || c == 'N') {
        return 'т';
    } else if (c == 'm' || c == 'M') {
        return 'ь';
    } else if (c == ',' || c == '<') {
        return 'б';
    } else if (c == '.' || c == '>') {
        return 'ю';
    } else if (c == ' ') {
        return ' ';
    } else {
        return '?';
    }
}

function translatePhrase(s) {
    var translated = "";
    for(let i = 0; i < s.length; i++) {
        translated += engtoRu(s[i]);
    }

    return translated;
}
