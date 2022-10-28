

const Simulator = () => {

  const select = document.getElementsByClassName('js-select');
  const selectDiscount = document.getElementsByClassName('js-select-discount');
  const input = document.getElementsByClassName('js-input-simulator');
  const inputDiscount = document.getElementsByClassName('js-input-discount');

  const calculate = document.querySelector('.js-simulator-button');
  const totalNumber = document.querySelector('.js-total-simulator');
  const totalDiscount = document.querySelector('.js-total-discount');
  const totalExpense = document.querySelector('.js-total-expense');


  for (let i = 0; i < select.length; i++) {

    select[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = input[i] as HTMLInputElement
      let name = target.name

      name = target.value
      inputVal.value = name

      getTotal()
    })
  }

  for (let i = 0; i < selectDiscount.length; i++) {

    selectDiscount[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = inputDiscount[i] as HTMLInputElement
      let name = target.name

      name = target.value
      inputVal.value = name

      getTotal()
    })
  }

  const getTotal = () => {

    let sum = 0
    let sumDiscount = 0

    for (var i = 0; i < input.length; i += 1) {
      let inputVal: any = input[i] as HTMLInputElement

      if (parseInt(inputVal.value)) {
        sum += parseInt(inputVal.value)
        if (totalExpense != undefined) {
          totalExpense.innerHTML = sum.toString();
        }
      }
    }

    for (var i = 0; i < inputDiscount.length; i += 1) {
      let inputVal: any = inputDiscount[i] as HTMLInputElement

      if (parseInt(inputVal.value)) {
        sumDiscount += parseInt(inputVal.value)

        if (totalDiscount != undefined) {
          totalDiscount.innerHTML = sumDiscount.toString();
        }
      }
    }

    //getTotal expense with discount
    let getTotalExpense = sum - sumDiscount

    if (totalNumber != undefined) {
      totalNumber.innerHTML = getTotalExpense.toString();
    }
  }

  // calculate?.addEventListener('click', () => {
  //   getTotal()
  // })
}

export default Simulator