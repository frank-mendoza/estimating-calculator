

const Simulator = () => {

  //common
  const select = document.getElementsByClassName('js-select');
  const radio = document.getElementsByClassName('js-radio');
  const radio2 = document.getElementsByClassName('js-radio-2');
  const radioInput = document.getElementsByClassName('js-input-radio');
  const input = document.getElementsByClassName('js-select-simulator');

  //for radio overseas and no-overseas
  const overseas = document.getElementsByClassName('js-radio-overseas');
  const nooverseas = document.getElementsByClassName('js-radio-nooverseas');;
  const overseaRadio = document.getElementsByClassName('js-oversea-radio');;
  const overseaRadio2 = document.getElementsByClassName('js-oversea-radio-2');;
  const selectPeople1 = document.getElementsByClassName('js-select-people-1');;
  const selectPeople2 = document.getElementsByClassName('js-select-people-2');;
  const selectPeople = document.getElementsByClassName('js-select-people');
  const togggleSelect = document.getElementsByClassName('js-select-toggle');;
  const selectWrap = document.getElementsByClassName('js-select-wrap');

  //discount
  const tablevalue = document.getElementsByClassName('js-table-value');
  const expertFee = document.getElementsByClassName('js-table-expert');
  const showImg = document.querySelector('.js-img-show');

  const totalvalue = document.querySelector('.js-total-value');
  const totalAmount = document.querySelector('.js-total-amount');

  const totalDiscount = document.querySelector('.js-total-discount');
  const advisory = document.querySelector('.js-advisory');
  const tax = document.querySelector('.js-tax');

  //table values
  const stampCertificate = document.querySelector('.js-stamp');
  const matters = document.querySelector('.js-matters');
  const incstampFee = document.querySelector('.js-incstamp');
  const articlesTable = document.querySelector('.js-articles-table');
  const totalRegtable = document.querySelector('.js-reg-table');
  const founder = document.querySelector('.js-founder');
  const investor = document.querySelector('.js-investor');
  const investment = document.querySelector('.js-investment');
  const officers = document.querySelector('.js-officers');
  const signStamp = document.querySelector('.js-sign-stamp');
  const establishment = document.querySelector('.js-establishment');
  const regliscence = document.querySelector('.js-reg-liscence');

  const taxItem3 = document.querySelector('.js-discount-3');
  const notifTax = document.querySelector('.js-notif-discount');
  const registration = document.querySelector('.js-registration');
  const getdiscountTotal = document.querySelector('.js-discount-amount');


  // items 10 & 11
  const discountvalue = document.querySelector('.js-discount-value');
  const discountvalue2 = document.querySelector('.js-discount-value2');
  const discount = document.getElementsByClassName('js-discount');
  const discount2 = document.getElementsByClassName('js-discount2');

  const disc = document.getElementById('disc')
  const disc2 = document.getElementById('disc2')
  const disc3 = document.getElementById('disc3')
  const disc4 = document.getElementById('disc4')

  // for discount radio buttons
  for (let i = 0; i < discount.length; i++) {

    discount[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let name = target.name

      if (name === '設⽴後の税務顧問契約') {
        taxItem3?.classList.add('show')
        tax?.classList.add('tax')
        advisory?.classList.add('active')

        name = target.value
      }

      if (name === '設⽴後の税務署等への届出') {
        showImg?.classList.remove('show')
      }

      getTaxDiscount()
      getTotal()
    })
  }

  for (let i = 0; i < discount2.length; i++) {

    discount2[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let name = target.name

      if (name === '設⽴後の税務顧問契約') {
        advisory?.classList.remove('active')
        tax?.classList.remove('active')
        taxItem3?.classList.remove('show')
        showImg?.classList.remove('show')

        name = target.value

      }

      if (name === '設⽴後の税務署等への届出') {
        showImg?.classList.add('show')
      }


      getTaxDiscount()
      getTotal()
    })
  }


  const getTaxDiscount = () => {

    let dcnt = disc as HTMLInputElement
    let dcnt2 = disc2 as HTMLInputElement
    let dcnt3 = disc3 as HTMLInputElement
    let dcnt4 = disc4 as HTMLInputElement
    let notif = notifTax as HTMLInputElement

    let newText = notif?.innerHTML

    if (dcnt2.checked && dcnt4.checked) {
      newText = '20,000'
      notif.innerHTML = newText

      showImg?.classList.remove('show')

      if (discountvalue2 != undefined) {
        discountvalue2.innerHTML = '20,000'
      }

      if (totalDiscount != undefined) {
        totalDiscount.innerHTML = '0'
      }
      if (registration != undefined) {
        registration.innerHTML = notif.innerHTML
      }
    }

    if (dcnt.checked && dcnt4.checked) {
      newText = '20,000'
      notif.innerHTML = newText

      showImg?.classList.add('show')
      if (totalDiscount != undefined) {
        totalDiscount.innerHTML = '30,000'
      }

      if (discountvalue != undefined && discountvalue2 != undefined) {
        discountvalue.innerHTML = '10,000'
        discountvalue2.innerHTML = '20,000'
      }
      if (registration != undefined) {
        registration.innerHTML = notif.innerHTML
      }
    }

    if (dcnt.checked && dcnt3.checked) {
      newText = '0'
      notif.innerHTML = newText

      if (totalDiscount != undefined) {
        totalDiscount.innerHTML = '10,000'
      }

      if (discountvalue != undefined && discountvalue2 != undefined) {
        discountvalue2.innerHTML = '20,000'
      }
      if (registration != undefined) {
        registration.innerHTML = notif.innerHTML
      }
    }

    if (dcnt2.checked && dcnt3.checked) {
      newText = '0'
      notif.innerHTML = newText

      taxItem3?.classList.remove('show')

      if (totalDiscount != undefined) {
        totalDiscount.innerHTML = '0'
      }

      if (discountvalue != undefined && discountvalue2 != undefined) {
        discountvalue.innerHTML = '10,000'
        discountvalue2.innerHTML = '20,000'
      }
      if (registration != undefined) {
        registration.innerHTML = notif.innerHTML
      }
    }
  }


  //for radio buttons
  for (let i = 0; i < radio.length; i++) {

    radio[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = radioInput[i]
      let name = target.name
      let newName = target.name

      name = target.value
      inputVal.innerHTML = parseInt(name).toLocaleString()

      if (newName === '定款作成方法' && incstampFee != undefined) {
        incstampFee.innerHTML = parseInt(name).toLocaleString()
      }

      if (newName === '法⼈形態' && totalRegtable != undefined) {
        totalRegtable.innerHTML = parseInt(name).toLocaleString()
      }

      if (newName === '印鑑' && signStamp != undefined) {
        signStamp.innerHTML = parseInt(name).toLocaleString()
      }


      getTotal()
    })
  }

  for (let i = 0; i < radio2.length; i++) {

    radio2[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = radioInput[i]
      let name = target.name
      let newName = target.name

      name = target.value
      inputVal.innerHTML = parseInt(name).toLocaleString()

      if (newName === '定款作成方法' && incstampFee != undefined) {
        incstampFee.innerHTML = parseInt(name).toLocaleString()
      }

      if (newName === '法⼈形態' && totalRegtable != undefined) {
        totalRegtable.innerHTML = parseInt(name).toLocaleString()
      }

      if (newName === '印鑑' && signStamp != undefined) {
        signStamp.innerHTML = parseInt(name).toLocaleString()
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
      inputVal.innerHTML = parseInt(name).toLocaleString()

      if (newName === '現物出資') {
        if (investment != undefined) {
          investment.innerHTML = parseInt(name).toLocaleString()
        }
      }

      if (newName === '株主・発起⼈') {
        if (founder != undefined) {
          founder.innerHTML = parseInt(name).toLocaleString()
        }
      }
      if (newName === '謄本の必要部数') {
        if (stampCertificate != undefined) {
          stampCertificate.innerHTML = parseInt(name).toLocaleString()
        }
      }

      if (newName === '資本⾦') {
        if (articlesTable != undefined) {
          articlesTable.innerHTML = parseInt(name).toLocaleString()
        }
      }

      if (newName === '定款の必要部数' && matters != undefined) {
        matters.innerHTML = parseInt(name).toLocaleString()
      }

      if (newName === '設⽴までの希望⽇数' && establishment != undefined) {
        establishment.innerHTML = parseInt(name).toLocaleString()
      }

      getTotal()
    })
  }

  // for overseas/ 8
  for (let i = 0; i < overseas.length; i++) {
    overseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      const reset = togggleSelect[i] as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name
      let newName = target.name

      name = target.value

      if (name) {
        let newval = 10000
        inputVal.innerHTML = newval.toLocaleString()
      }

      if (newName === '出資者') {
        if (investor != undefined) {
          investor.innerHTML = inputVal.innerHTML
        }
      }

      reset.value = '0'
      togggleSelect[i].classList.add('active')
      selectWrap[i].classList.add('active')

      getTotal()
    })
  }

  // for no overseas 8
  for (let i = 0; i < nooverseas.length; i++) {

    nooverseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      const reset = togggleSelect[i] as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name
      let newName = target.name

      name = target.value
      if (name) {
        let newval = 0
        inputVal.innerHTML = newval.toLocaleString()
      }

      if (newName === '出資者') {
        if (investor != undefined) {
          investor.innerHTML = inputVal.innerHTML
        }
      }

      reset.value = '0'
      togggleSelect[i].classList.add('active')
      selectWrap[i].classList.add('active')

      getTotal()
    })
  }

  // for overseas/ item 9
  for (let i = 0; i < overseas.length; i++) {
    overseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      const reset = selectPeople2[i] as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name
      let newName = target.name

      name = target.value

      if (name) {
        let newval = 10000
        inputVal.innerHTML = newval.toLocaleString()
      }

      if (newName === '役員⼈数') {
        if (officers != undefined) {
          officers.innerHTML = inputVal.innerHTML
        }
      }
      // reset.value = '0'
      togggleSelect[i].classList.add('active')
      selectWrap[i].classList.add('active')

      getTotal()
    })

  }

  // for no overseas item 9
  for (let i = 0; i < nooverseas.length; i++) {

    nooverseas[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      const reset = selectPeople2[i] as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name
      let newName = target.name

      name = target.value
      if (name) {
        let newval = 0
        inputVal.innerHTML = newval.toLocaleString()

      }

      if (newName === '役員⼈数') {
        if (officers != undefined) {
          officers.innerHTML = inputVal.innerHTML
        }
      }
      // reset.value = '0'
      togggleSelect[i].classList.add('active')
      selectWrap[i].classList.add('active')

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
      let newName = target.name

      let id = item8[i].id || 0

      if (item8) {
        name = target.value

        if (id === '0') {
          let newval = name
          inputVal.innerHTML = parseInt(newval).toLocaleString()
          if (newName === '出資者') {
            if (investor != undefined) {
              investor.innerHTML = inputVal.innerHTML
            }
          }
        }

        if (id === '1') {
          let newval = parseInt(name) + 10000
          inputVal.innerHTML = newval.toLocaleString()
          if (newName === '出資者') {
            if (investor != undefined) {
              investor.innerHTML = inputVal.innerHTML
            }
          }
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
      let newName = target.name

      if (item9) {
        let id = item9[i].id || 0
        name = target.value

        if (id === '0') {
          let newval = name
          inputVal.innerHTML = parseInt(newval).toLocaleString()
          if (newName === '役員⼈数') {
            if (officers != undefined) {
              officers.innerHTML = inputVal.innerHTML
            }
          }
        }

        if (id === '1') {
          let newval = parseInt(name) + 10000
          inputVal.innerHTML = newval.toLocaleString()
          if (newName === '役員⼈数') {
            if (officers != undefined) {
              officers.innerHTML = inputVal.innerHTML
            }
          }
        }

      }

      getTotal()

    })
  }

  //for selecting number of people field //common select tags
  for (let i = 0; i < selectPeople.length && i < overseas.length; i++) {

    selectPeople[i].addEventListener('change', (e) => {

      const target = e.target as HTMLInputElement;
      let inputVal = overseaRadio[i]
      let name = target.name

      name = target.value
      inputVal.innerHTML = parseInt(name).toLocaleString()

      getTotal()
    })
  }

  const getTotal = () => {

    let tablesumTotal = 0
    let subtotalDiscount = 0
    let minusDiscount = 0
    let getSubtotal = 0
    let liscenceTaxTotal = 0

    let subTotal = 0
    let getTotalExpense = 0

    //get registration liscence tax total
    if (founder != undefined &&
      investment != undefined &&
      investor != undefined &&
      officers != undefined) {
      let founderVal = founder.innerHTML
      let investmentVal = investment.innerHTML
      let investorVal = investor.innerHTML
      let officersVal = officers.innerHTML

      let newinvestment = investmentVal.replace(',', '')
      let newinvestor = investorVal.replace(',', '')
      let newofficers = officersVal.replace(',', '')
      let newfounder = founderVal.replace(',', '')

      liscenceTaxTotal = parseInt(newfounder) + parseInt(newinvestment) + parseInt(newinvestor) + parseInt(newofficers)
    }

    if (regliscence != undefined) {
      regliscence.innerHTML = liscenceTaxTotal.toLocaleString()
    }

    // how to get the total discount
    for (var i = 0; i < expertFee.length; i += 1) {
      let inputVal: any = expertFee[i] as HTMLInputElement

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(',', '')

      if (parseInt(newStringVal)) {
        subtotalDiscount += parseInt(newStringVal)
        if (getdiscountTotal != undefined) {
          getdiscountTotal.innerHTML = subtotalDiscount.toLocaleString();
        }
      }
    }

    for (var i = 0; i < tablevalue.length; i += 1) {
      let inputVal: any = tablevalue[i] as HTMLInputElement

      let newString = inputVal.innerHTML
      let newStringVal = newString.replace(',', '')

      if (parseInt(newStringVal)) {
        tablesumTotal += parseInt(newStringVal)
        if (totalvalue != undefined) {
          totalvalue.innerHTML = tablesumTotal.toLocaleString();
        }
      }
    }

    // how to get the subtotal
    if (totalvalue != undefined) {
      let newTextAmount = totalvalue?.innerHTML
      let newTotal = newTextAmount.replace(",", "")

      subTotal = parseInt(newTotal)
    }

    // how to get the total discount to be subtracted
    if (totalDiscount != undefined) {
      let newTextAmount = totalDiscount?.innerHTML
      let newTotal = newTextAmount.replace(",", "")

      minusDiscount = parseInt(newTotal)
    }

    // main formula
    getSubtotal = tablesumTotal + subtotalDiscount
    getTotalExpense = getSubtotal - minusDiscount

    if (totalAmount != undefined) {
      totalAmount.innerHTML = getTotalExpense.toLocaleString()
    }
  }

}

export default Simulator