function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    const a={
        years:Math.abs(age_dt.getFullYear()-1970),
        months: age_dt.getMonth(),
        days: age_dt.getDay()
    }
    return a;
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));
