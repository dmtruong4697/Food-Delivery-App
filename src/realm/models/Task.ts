import Realm, {BSON, ObjectSchema} from 'realm';

class Task extends Realm.Object<Task> {
    id!: string;
    title!: string;
    description!: string;

    static schema: ObjectSchema = {
        name: 'Task',
        properties: {
            id: 'string',
            title: 'string',
            description: 'string',
        }
    }
}

export default Task;
