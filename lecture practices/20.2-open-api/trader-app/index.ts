import { DefaultService } from "./generated";

async function main(){
    const res = await DefaultService.getUsers("13");
    console.log(res);
}

main();