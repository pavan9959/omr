import { BlockComponent } from "../../../framework/src/BlockComponent";

interface Props{
    classes:any
    navigation: any;
}

interface s{
    newPassword:any
    confirmPassword:any
}

interface ss{}


export class ResetPasswordControll extends BlockComponent<Props,s,ss>{


    constructor(props:Props){
        super(props)
        this.state={
            newPassword:"",
            confirmPassword:""
        }
    }

}