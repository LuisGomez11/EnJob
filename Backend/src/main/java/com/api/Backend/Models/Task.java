
package com.api.Backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Tasks")
public class Task {

    @Id
    @Column(name = "idTask")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idTask;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "department")
    private String department;
    @Column(name = "assigned")
    private String assigned;
    @Column(name = "stateTask")
    private String stateTask;
    @Column(name = "changeDate")
    private String changeDate;
    @Column(name = "term")
    private String term;
    @Column(name = "value")
    private String value;

    public String getIdTask() {
        return idTask;
    }

    public void setIdTask(String idTask) {
        this.idTask = idTask;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAssigned() {
        return assigned;
    }

    public void setAssigned(String assigned) {
        this.assigned = assigned;
    }

    public String getStateTask() {
        return stateTask;
    }

    public void setStateTask(String stateTask) {
        this.stateTask = stateTask;
    }

    public String getChangeDate() {
        return changeDate;
    }

    public void setChangeDate(String changeDate) {
        this.changeDate = changeDate;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }



}
