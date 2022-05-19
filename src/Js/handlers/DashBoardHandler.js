export class DashboardHandler {
    static addClassList(id){
    const modal = document.getElementById(id);
    modal.classList.add("show");
}

    static removeClassList (id){
    const modal = document.getElementById(id);
    modal.classList.remove("show");
}
}



