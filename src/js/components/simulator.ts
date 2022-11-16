

const Simulator = () => {

  const select = document.getElementsByClassName('js-select');
  const radio = document.getElementsByClassName('js-radio');
  const radio2 = document.getElementsByClassName('js-radio-2');
  const radioInput = document.getElementsByClassName('js-input-radio');
  const selectDiscount = document.getElementsByClassName('js-select-discount');
  const input = document.getElementsByClassName('js-select-simulator');
  const inputDiscount = document.getElementsByClassName('js-input-discount');

  const overseas = document.getElementsByClassName('js-radio-overseas');
  const nooverseas = document.getElementsByClassName('js-radio-nooverseas');;
  const overseaRadio = document.getElementsByClassName('js-oversea-radio');;
  const overseaRadio2 = document.getElementsByClassName('js-oversea-radio-2');;
  const selectPeople1 = document.getElementsByClassName('js-select-people-1');;
  const selectPeople2 = document.getElementsByClassName('js-select-people-2');;
  const selectPeople = document.getElementsByClassName('js-select-people');;

  const showDiscount = document.querySelector('.js-show-discount');
  const showDiscount2 = document.querySelector('.js-show-discount-2');
  const showImg = document.querySelector('.js-img-show');
  const toggleradio = document.querySelector('.js-radio-toggle');

  const totalAmount = document.querySelector('.js-total-amount');
  const totalAmount2 = document.querySelector('.js-total-amount-2');

  const totalDiscount = document.querySelector('.js-total-discount');
  const totalDiscount2 = document.querySelector('.js-total-discount-2');
  const totalExpense = document.querySelector('.js-total-expense');
  const advisory = document.querySelector('.js-advisory');
  const tax = document.querySelector('.js-tax');

  const totalStamp = document.querySelector('.js-total-stamp');
  const totalInsStamp = document.querySelector('.js-incstamp-total');
  const regFee = document.querySelector('.js-reg-fee');
  const totalDiscountTable = document.querySelector('.js-total-discount-table');
  const totalxpenseFee = document.querySelector('.js-total-simulator-table');
  const articlesTable = document.querySelector('.js-articles-table');
  const articlesFee = document.querySelector('.js-articles-fee');
  const totalpAmnt = document.querySelector('.js-total-pAmt');
  const totalRegtable = document.querySelector('.js-reg-table');
  const regTax = document.querySelector('.js-table-4');


  //show discount img
  showDiscount?.addEventListener('change', () => {
    showImg?.classList.add('show')

    let discnt = 20000
    let regFeeTable = regFee?.innerHTML
    let innerHtml = showDiscount.innerHTML

    innerHtml = discnt.toString()
    regFeeTable = innerHtml
    
    if (regFee != undefined) {
      regFee.innerHTML = discnt.toString()
    }

    console.log(regFeeTable);
  })

  showDiscount2?.addEventListener('change', () => {
    showImg?.classList.remove('show')
    let regFeeTable = regFee?.innerHTML
    regFeeTable === '0'
    console.log(regFeeTable);

  })

  //for radio buttons
  for (let i = 0; i < radio.length; i++) {

    radio[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = radioInput[i]
      let name = target.name

      if (name === '設⽴後の税務顧問契約') {
        advisory?.classList.add('active')
        tax?.classList.add('tax')
        inputVal.innerHTML = name

      }

      toggleradio?.addEventListener('change', () => {
        tax?.classList.remove('tax')
        advisory?.classList.remove('active')
      })

      name = target.value
      inputVal.innerHTML = name + ' 円'

      if (totalRegtable != undefined) {
        totalRegtable.innerHTML = name.toString()
      }

      getTotal()
    })
  }

  for (let i = 0; i < radio2.length; i++) {

    radio2[i].addEventListener('change', (e) => {
      console.log(regTax?.innerHTML);

      const target = e.target as HTMLInputElement;
      let inputVal = radioInput[i]
      let name = target.name

      name = target.value
      inputVal.innerHTML = name + ' 円'

      if (totalRegtable != undefined) {
        totalRegtable.innerHTML = name.toString()
      }

      getTotal()
    })
  }


  //for select fields
  for (let i = 0; i < select.length; i++) {

    select[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = input[i]
      let name = target.name
      let newName = target.name

      name = target.value
      inputVal.innerHTML = name + ' 円'

      if (newName === '定款の必要部数') {
        if (totalInsStamp != undefined) {
          totalInsStamp.innerHTML = name.toString()
        }
      }

      if (newName === '謄本の必要部数') {
        if (totalStamp != undefined) {
          totalStamp.innerHTML = name.toString()
        }
      }

      if (newName === '資本⾦') {
        if (articlesTable != undefined) {
          articlesTable.innerHTML = name.toString()
        }
      }

      getTotal()
    })
  }

  // for overseas/
  for (let i = 0; i < overseas.length; i++) {
    overseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value

      console.log('newval', name);
      if (name) {
        let newval = 10000
        inputVal.innerHTML = newval.toString() + ' 円'
      }

      getTotal()

    })
  }

  // for overseas/ item 9
  for (let i = 0; i < overseas.length; i++) {
    overseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value

      if (name) {
        let newval = 10000
        inputVal.innerHTML = newval.toString() + ' 円'
      }

      getTotal()
    })

  }

  // for no overseas
  for (let i = 0; i < nooverseas.length; i++) {

    nooverseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value
      if (name) {
        let newval = 0
        inputVal.innerHTML = newval.toString() + ' 円'
      }

      getTotal()
    })
  }

  // for no overseas item 9
  for (let i = 0; i < nooverseas.length; i++) {

    nooverseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value
      if (name) {
        let newval = 0
        inputVal.innerHTML = newval.toString() + ' 円'
      }

      getTotal()
    })
  }


  //for select people items 8
  for (let i = 0; i < selectPeople1.length; i++) {
    selectPeople1[i].addEventListener('change', (e) => {
      const item8 = document.querySelectorAll('input[name="出資者"]:checked')

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      let id = item8[i].id || 0

      if (item8) {
        name = target.value

        if (id === '0') {
          let newval = name
          inputVal.innerHTML = newval + ' 円'
        }

        if (id === '1') {
          let newval = parseInt(name) + 10000
          inputVal.innerHTML = newval.toString() + ' 円'
        }
      }

      getTotal()
    })
  }

  //for select people items 9
  for (let i = 0; i < selectPeople2.length; i++) {
    selectPeople2[i].addEventListener('change', (e) => {
      const item9 = document.querySelectorAll('input[name="役員⼈数"]:checked')

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio2[i]
      let name = target.name

      if (item9) {
        let id = item9[i].id || 0
        name = target.value

        if (id === '0') {
          let newval = name
          inputVal.innerHTML = newval + ' 円'
        }
        if (id === '1') {
          let newval = parseInt(name) + 10000
          inputVal.innerHTML = newval.toString() + ' 円'
        }
      }

      getTotal()

    })
  }

  //for selelcting number of people field //common select tags
  for (let i = 0; i < selectPeople.length && i < overseas.length; i++) {

    selectPeople[i].addEventListener('change', (e) => {

      overseas[i]
      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value
      inputVal.innerHTML = name

      getTotal()
    })
  }


  //discount inputs
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

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(' 円', '')

      if (parseInt(newStringVal)) {
        sum += parseInt(newStringVal)
        if (totalExpense != undefined) {
          totalExpense.innerHTML = sum.toString();
        }
      }
    }

    for (var i = 0; i < overseaRadio.length; i += 1) {
      let inputVal: any = overseaRadio[i] as HTMLInputElement

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(' 円', '')

      if (parseInt(newStringVal)) {
        sum += parseInt(newStringVal)
        if (totalExpense != undefined) {
          totalExpense.innerHTML = sum.toString();
        }
      }
    }

    for (var i = 0; i < radioInput.length; i += 1) {
      let inputVal: any = radioInput[i] as HTMLInputElement

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(' 円', '')

      if (parseInt(newStringVal)) {
        sum += parseInt(newStringVal)
        if (totalExpense != undefined) {
          totalExpense.innerHTML = sum.toString();
        }
      }
    }

    for (var i = 0; i < inputDiscount.length; i += 1) {
      let inputVal: any = inputDiscount[i] as HTMLInputElement

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(' 円', '')

      if (parseInt(newStringVal)) {
        sumDiscount += parseInt(newStringVal)

        if (totalDiscount != undefined) {
          totalDiscount.innerHTML = sumDiscount.toString();
        }

        if (totalDiscount2 != undefined) {
          totalDiscount2.innerHTML = sumDiscount.toString();
        }

      }
    }

    //getTotal expense with discount
    // add 10000 for the auto discount in item 3
    let newSum = sum + 10000

    let getTotalExpense = newSum - sumDiscount

    if (totalAmount != undefined && totalAmount2 != undefined ) {
      totalAmount.innerHTML = getTotalExpense.toString();
      totalAmount2.innerHTML = getTotalExpense.toString();
    }
  }
}

export default Simulator