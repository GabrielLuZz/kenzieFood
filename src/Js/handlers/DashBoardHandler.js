export class Mostrar {
    static addClassList(id){
    const modal = document.getElementById(id);
    modal.classList.add("mostrar");
}

    static removeClassList (id){
    const modal = document.getElementById(id);
    modal.classList.remove("mostrar");
}
}