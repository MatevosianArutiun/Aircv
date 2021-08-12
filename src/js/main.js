"use strict";

import { showLoading } from "./scripts/preloader";
import { scroll } from "./scripts/scroll";

document.addEventListener("DOMContentLoaded", () => {
    showLoading();
    scroll();
  });



  let name = "Denis";
  console.log(name);
  const nameTwo = "Bogdan";
  console.log(nameTwo);
  // nameTwo = "Gogi";
  // console.log(nameTwo);
