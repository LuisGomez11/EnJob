
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

    /**
     * @return the idTask
     */
    public String getIdTask() {
        return idTask;
    }

    /**
     * @param idTask the idTask to set
     */
    public void setIdTask(String idTask) {
        this.idTask = idTask;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the department
     */
    public String getDepartment() {
        return department;
    }

    /**
     * @param department the department to set
     */
    public void setDepartment(String department) {
        this.department = department;
    }

    /**
     * @return the assigned
     */
    public String getAssigned() {
        return assigned;
    }

    /**
     * @param assigned the assigned to set
     */
    public void setAssigned(String assigned) {
        this.assigned = assigned;
    }

    /**
     * @return the stateTask
     */
    public String getStateTask() {
        return stateTask;
    }

    /**
     * @param stateTask the stateTask to set
     */
    public void setStateTask(String stateTask) {
        this.stateTask = stateTask;
    }

    /**
     * @return the changeDate
     */
    public String getChangeDate() {
        return changeDate;
    }

    /**
     * @param changeDate the changeDate to set
     */
    public void setChangeDate(String changeDate) {
        this.changeDate = changeDate;
    }

    /**
     * @return the term
     */
    public String getTerm() {
        return term;
    }

    /**
     * @param term the term to set
     */
    public void setTerm(String term) {
        this.term = term;
    }



}
