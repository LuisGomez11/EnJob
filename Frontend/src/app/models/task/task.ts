export class Task {

  constructor(idTask = '', title = '', description = '', assigned = '',
    stateTask = '', changeDate = '', term = '', department = '', value = '') {
    this.idTask = idTask;
    this.title = title;
    this.description = description;
    this.department = department;
    this.assigned = assigned;
    this.stateTask = stateTask;
    this.changeDate = changeDate;
    this.term = term;
    this.value = value;
  }

  idTask: String;
  title: String;
  description: String;
  department: String;
  assigned: String;
  stateTask: String;
  changeDate: String;
  term: String;
  value: String;

}
