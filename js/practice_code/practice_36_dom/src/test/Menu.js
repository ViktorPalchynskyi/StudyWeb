export class Menu {
   constructor(elem) {
      this.elem = elem;
      this.elem.addEventListener('click', this.onClick);
   }

   onClick = (event) => {
      const action = event.target.dataset.action;

      if (action) this[action]();
   }

   save() {
      alert('save');
   }

   load() {
      alert('load');
   }

   search () {
      alert('search');
   }
}