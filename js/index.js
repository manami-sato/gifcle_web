{
  const fadeInDelay = (el, cls, count) => {
    const delay = () => {
      el[count].style.transition = "1s opacity,0.8s transform";
      el[count].classList.remove(cls);
      count++;
      console.log(count, el.length);
      if (!count == el.length) {
        console.log(count, "ok");
        setTimeout(delay, 1000);
      }
    };
    setTimeout(delay, 1000);
  };
  const fadeIn = (wrap, num) => {
    let el = document.querySelector(wrap);
    el.classList.add("index__add");
    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;
      let height = el.getBoundingClientRect().top;
      let elHeight = scrollY + height;
      if (scrollY > elHeight - num) {
        el.style.transition = "1s opacity,0.8s transform";
        el.classList.remove("index__add");
      }
    });
  };
  const itemsFadeIn = (wrap, cls, trg, trgCls) => {
    console.log(document.querySelector(trg).classList.contains(trgCls));
    const el = document.querySelectorAll(wrap);
    for (let i = 0; i < el.length; i++) {
      el[i].classList.add(cls);
    }
    window.addEventListener("scroll", () => {
      if (!document.querySelector(trg).classList.contains(trgCls)) {
        fadeInDelay(el, cls, 0);
      }
    });
  };

  fadeIn(".index__about", 400);
  // itemsFadeIn(
  //   ".index__about--logo",
  //   `index__add--1`,
  //   ".index__about",
  //   "index__add"
  // );
  // itemsFadeIn(
  //   ".index__about--txt>span",
  //   `index__add--2`,
  //   ".index__about--logo",
  //   "index__add--1"
  // );
  fadeIn(".index__system", 700);
  fadeIn(".index__list", 500);
  fadeIn(".index__tips", 500);
  fadeIn(".index__faq", 600);

  const scrollTop = document.querySelector(".index__scrollTop");
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const num = 300;
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    let bottomHeight = scrollHeight - scrollY - num;
    if (scrollY > scrollHeight - clientHeight - num) {
      console.log(bottomHeight + `px`);
      scrollTop.style.marginBottom = clientHeight - bottomHeight + `px`;
    } else {
      scrollTop.style.marginBottom = "";
    }
  });
}
