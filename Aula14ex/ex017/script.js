function tabuada() {

    let selsin = document.getElementsByName('optsin')
    n = 0
    while (selsin[n].selected != true) {
        n++
    }

    selsin = selsin[n].value

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Por  favor, digite um numero!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        switch (selsin) {
            case '+':
                while (c <= 10) {
                    let item = document.createElement('option')
                    item.text = `${n} + ${c} = ${n + c}`
                    item.value = `tab${c}`
                    tab.appendChild(item)
                    c++
                }
                break
            case '-':
                while (c <= 10) {
                    let item = document.createElement('option')
                    item.text = `${n} - ${c} = ${n - c}`
                    item.value = `tab${c}`
                    tab.appendChild(item)
                    c++
                }
                break
            case '*':
                while (c <= 10) {
                    let item = document.createElement('option')
                    item.text = `${n} x ${c} = ${n * c}`
                    item.value = `tab${c}`
                    tab.appendChild(item)
                    c++
                }
                break
            case '/':
                while (c <= 10) {
                    let item = document.createElement('option')
                    item.text = `${n} / ${c} = ${n / c}`
                    item.value = `tab${c}`
                    tab.appendChild(item)
                    c++
                }
                break
        }
    }
}

