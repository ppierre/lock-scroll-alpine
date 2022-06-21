import Alpine from "alpinejs";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import "@fontsource/advent-pro";
import "./index.css";
// window.Alpine = Alpine;
Object.assign(window, {
  Alpine,
  //   disablePageScroll,
  //   enablePageScroll,
});

Alpine.store("menu", {
  visible: false,
  init() {
    Alpine.effect(() => {
      if (this.visible) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
    });
  },
});

Alpine.start();
