const input = "status:all,applied_date:2019-04-15--to--2019-04-15,screen_status:SR|NS";

function transformKey(key) {
    return key.replace(/_/g, '.');
}

function transformValue(value) {
    let op = '';
    let ret_value = '';

    if (value.indexOf('--to--') >= 0) {
        op = 'between';
        ret_value = value.split('--to--');
        if (!isNaN(Number(ret_value[0]))) {
            ret_value = ret_value.map(Number);
            return {
                [op]: ret_value
            };
        } else if (typeof ret_value[0] === 'string') {
            if (new Date(ret_value[0]) !== 'Invalid Date') {
                ret_value = ret_value.map(x => new Date(x).toISOString());
            }
            return {
                [op]: ret_value
            };

        }
    } else if (value.indexOf('|') >= 0) {
        op = 'inq';
        ret_value = value.split('|');
        if (!isNaN(Number(value[0]))) {
            ret_value = ret_value.map(Number);
        }
        return {
            [op]: ret_value
        };
    } else {
        op = 'eq';
        ret_value = value;
        if (!isNaN(Number(ret_value))) {
            ret_value = Number(ret_value);
        }

        if (ret_value === 'all') {
            return undefined;
        }
        return {
            [op]: ret_value
        };
    }
}

function parse(input) {
    const arr = input.split(',');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(":") == -1) {
            return undefined;
        }

    }

    const output = {
        and: {

        }
    }

    arr.forEach(val => {
        key = transformKey(val.substr(0, val.indexOf(":")));
        value = transformValue(val.substr(val.indexOf(":") + 1));
        if (value) {
            output.and[key] = value;

        }
    });

    return output;
}

const output = parse(input);

console.log(output);