function max_number(value_1, value_2) {
    if(value_1 > value_2) {
        return value_1;
    } else if (value_2 > value_1) {
        return value_2;
    } else {
        return "Числа равны";
    }
}

function range(n, m) {
    let arr = [];
    if(n > m) {
        for(let i = n; i >= m - 1; i--) {
            arr.push(i);
        }
        return arr;
    } else if (n < m) {
        for(let i = n; i < m; i++) {
            arr.push(i);
        }
        return arr;
    } else {
        arr = [n];
        return arr;
    }
}

function num_count(number) {
    let numberStr = String(number);
    return numberStr.length;
}

function get_hypotenuse(a, b) {
    let c = (a ** 2 + b ** 2) ** 0.5;
    return c;
}