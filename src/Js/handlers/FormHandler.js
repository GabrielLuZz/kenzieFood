export class FormHandler{
    static receiveData (event){
        const itensForm = [...event.target];
        const values = {};
      
        itensForm.forEach((item)=>{
          if(item.name != ""){
         values[item.name] = item.value;
        }
      })
        return values;
    }
}