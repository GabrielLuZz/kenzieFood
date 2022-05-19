export class DashboardHandler {
  static addClassList(id) {
    const modal = document.getElementById(id);
    modal.classList.add("mostrar");
  }

  static removeClassList(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("mostrar");
  }

  static modalDashboard(event, data) {
    console.log(event);
    const modal = document.querySelector("aside");
    modal.style.display = "flex";
    // if (event) {
    //   this.modalEditProduct(data);
    // } else if (event) {
    //   this.modalCrate(event);
    // } else if (event) {
    //   this.modalDelete(event, data);
    // }
  }

  static modalEditProduct(data) {}

  static modalDelete(event, data) {}

  static modalCrate(event) {}

  static closeModal(event) {
    const modal = document.querySelector("aside");
    modal.style.display = "none";
  }
}
