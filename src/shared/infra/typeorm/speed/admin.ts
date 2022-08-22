import{hash} from "bcrypt"
import  createConnection  from "../index";
import{v4 as uuidV4} from "uuid";


async function create(){

    const connection = await createConnection("localhost");
    const id = uuidV4();
    const password = await hash("admin",8);
    
    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}, 'admin', 'admin@admin.com.br', '${password}, true, 'now()','XXXXXX')
        `
        );
}

create().then(() => console.log("user admin created!"));