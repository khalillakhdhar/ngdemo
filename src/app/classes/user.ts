export class User {
  nom?: string; // user name or undefined (obligatoire)
  prenom!: string; // optional null
  email: string=""; // optional  avec default ""
  password?: string;

}
