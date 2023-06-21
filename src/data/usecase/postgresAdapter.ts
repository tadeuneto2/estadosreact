import { UserModel } from "../../domain/usecase/useCase";

class PostgresAdapter implements UserModel {
   
    public getUser() {
        return Promise.resolve({
            nome: "string",
            email: "string",
            imagem: "string",
        })
    };

}

export default PostgresAdapter;