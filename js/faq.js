{
  const main = $("main");

  $.ajax({
    url: "https://click.ecc.ac.jp/ecc/msatou/Gifcle/js/faq.php",
    method: "GET",
    dataType: "json",
    timeout: 3000,
    cache: false,
  }).done(function (res) {
    // res.forEach((el) => {
    //   const wrap = `<section class="faq__wrap"></section>`;
    //   main.append(wrap); //箱作る
    // });
		// console.log(document.querySelectorAll(`.faq__wrap`).length);
    for (let i = 0; i < res.length; i++) {
      const wrap = `<section class="faq__wrap"></section>`;
			main.append(wrap); //箱作る
			let num = i + 1;
			const box = $(`.faq__wrap:nth-child(${num})`);
      const headData = res[i].headline;
      const qLength = res[i].contents;
			const head = `<h3 class="faq__wrap--headline">${headData}</h3>`;
      box.append(head);
      for (let i2 = 0; i2 < qLength.length; i2++) {
				// let num2 = i + 1;
				// const faqBox = `<div class="faq__wrap--wrap"></div>`;
        const qData = res[i].contents[i2].question;
				const aData = res[i].contents[i2].answer;
				const q = `<div class="faq__wrap--question">${qData}</div>`;
				const a = `<div class="faq__wrap--answer">${aData}</div>`;
				box.append(q,a);
				// box.append(faqBox);
				// $(`.faq__wrap:nth-child(${num}) .faq__wrap--wrap:nth-child(${num2})`).append(q,a);
      }
    }
  });
}
