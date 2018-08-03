export class User {
    public id: number;
    public email: string;
    public firstLogin: boolean;
    public nom: string;
    public prenom: string;
    public photo: string;
    public roleId: number;
    public etatChangementPwd: string;
    public histo;

    constructor() {
        this.id = null;
        this.email = null;
        this.firstLogin = null;
        this.nom = null;
        this.prenom = null;
        this.photo = null;
        this.roleId = null;
        this.etatChangementPwd = null;
        this.histo=null;
    }
}

