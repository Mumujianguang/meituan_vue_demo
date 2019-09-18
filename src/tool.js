function changeCity(item) {
    const provinceName = item.provinceName;
    let newArr = [];
    let index = '';
    for (let i = 0; i < this.provinceList.length; i++) {
        if (this.provinceList[i].provinceName === provinceName) {
            newArr = this.provinceList[i].cityInfoList;
        }
    }
    newArr = newArr.slice();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].name === item.name) {
            index = i;
        }
    }
    newArr.splice(index, 1);
    const len = newArr.length;
    const curCity = {
        name: '',
        nearCity: []
    };
    curCity.name = item.name;
    console.log(newArr);
    if (len === 0) {
        curCity.nearCity.push({name: item.name});
    } else if (len < 3 && len > 0) {
        for (let i = 0; i < len; i++) {
            curCity.nearCity.push({name: newArr[i].name || ''});
            newArr.splice(flag, 1);
        }
    } else {
        for (let i = 0; i < 3; i++) {
            const flag = parseInt(Math.random() * (len - 1));
            curCity.nearCity.push({name: newArr[flag].name || ''});
            newArr.splice(flag, 1);
        }
    }
    
    this.setCurCity(curCity);
}

export { changeCity }