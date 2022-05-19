export class DashboardHandler {
  static addClassList(id) {
    const modal = document.getElementById(id);
    modal.classList.add("mostrar");
  }

  static removeClassList(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("mostrar");
  }

  static modalDashboard(event, data) {}

  static modalEditProduct(data) {}

  static modalDelete(event, data) {}

  static modalCrate(event) {}
}
