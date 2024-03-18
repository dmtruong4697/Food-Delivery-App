import Realm from "realm";
import Task from "../models/Task";

const realm = new Realm({ schema: [Task]});

const TaskManager = {
    addTask: (title: string, description: string) => {
        realm.write(() => {
            realm.create('Task', {
                id: 'id',
                title: title,
                description: description,
            })
        })
    },

    getTask: () => {
        return realm.objects<Task>('Task');
    },

    getPath: () => {
        const realmFileLocation = realm.path;
        return realmFileLocation;
    }
};

export default TaskManager;