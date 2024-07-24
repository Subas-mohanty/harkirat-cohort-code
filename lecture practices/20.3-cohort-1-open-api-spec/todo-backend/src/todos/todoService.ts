import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">

// this is same as above
// export type TodoCreationParams{
//     title : string,
//     description : string
// }


export class TodoService{
    public get(todoId : string) : Todo{
        return {
            id : todoId,
            title : "work hard",
            description : "study and get a job",
            done : false

        }
    }

    public create(todoCreationParams : TodoCreationParams) : Todo{
        console.log("db call");
        
        return {
            id : "1",
            title : "work hard",
            description : "study and get a job",
            done : false

        }
    }

}