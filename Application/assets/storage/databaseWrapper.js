import * as SQLite from 'expo-sqlite';


export default class DataBase{
    constructor(){
        this.db = SQLite.openDatabase("storage.db");
    }
    
    /**
     * @param {task_type} TypeNumber
     * 
     * 1: Unsorted,
     * 2: Daily,
     * 3: Monthly
     * 
     * For getting projects use method get_projects
     */
    get_tasks(task_type_num) {
        let tasks = {};

        this.db.transaction(tx => {
            tx.executeSql(
                `SELECT types.name as type_name,
                    t.id as task_id, t.name as task_name, tags.name as tag_name,
                    t.start_date as task_start_date, t.end_date as task_end_date,
                    t.is_completed as task_is_completed
                FROM planner_types as types
                LEFT JOIN tasks as t ON types.id = t.type_id
                LEFT JOIN task_tags as t_t ON t.id = t_t.task_id
                LEFT JOIN tags ON t_t.tag_id = tags.id
                WHERE types.id = ?`, [task_type_num],
                (txObj,  { rows: { _array } }) => {
                    for (let row of _array) {
                        let task_id = row["task_id"].toString();
                        if (!(task_id in tasks)) {
                            tasks[task_id] = row;
                            tasks[task_id]["subtasks"] = [];
                            tasks[task_id]["notes"] = [];
                            tasks[task_id]["tag_name"] = [row["tag_name"]];
                        } else {
                            tasks[task_id]["tag_name"].push(row["tag_name"]);
                        }
                    }
                },
                (txObj, error) => {throw error;}
            );

            tx.executeSql(
                `SELECT t.id as task_id, st.id as subtask_id,
                    st.name as subtask_name, st.is_completed as subtask_is_completed
                FROM subtasks as st
                LEFT JOIN tasks as t ON st.task_id = t.id
                WHERE t.type_id = ?`, [task_type_num],
                (txObj, { rows: { _array } }) => {
                    for (let row of _array) {
                        let task_id = row["task_id"].toString();
                        tasks[task_id]["subtasks"].push(
                            {
                                "subtask_id": row["subtask_id"],
                                "subtask_name": row["subtask_name"],
                                "subtask_is_completed": row["subtask_is_completed"]
                            }
                        );
                    }
                },
                (txObj, error) => {throw error;}
            );

            tx.executeSql(
                `SELECT t.id as task_id, n.id as note_id, n.text as note_text
                FROM notes as n
                LEFT JOIN tasks as t ON n.task_id = t.id
                WHERE t.type_id = ?`, [task_type_num],
                (txObj, { rows: { _array } }) => {
                    for (let row of _array) {
                        let task_id = row["task_id"].toString();
                        tasks[task_id]["notes"].push(
                            {
                                "note_id": row["note_id"],
                                "note_text": row["note_text"]
                            });
                    }
                },
                (txObj, error) => {throw error;}
            );
        });
    }

    // get_projects() {

    // }

    // insert() {
    //     this.db.transaction(tx => {
    //         tx.executeSql(`INSERT INTO ${task_type} ()`, null,
    //             (txObj, { rows: { _array } }) => this.setState({ data: _array }),
    //             (txObj, error) => console.log('Error ', error)
    //         );
    //     });
    // }

    // update() {

    // }

    // migrate() {

    // }

    // delete() {
        
    // }   
}
