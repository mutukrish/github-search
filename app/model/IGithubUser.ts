// export interface IGithubUser {
//     user: any;
//     repos: any;
//     userName: string;
// }
export class GithubUser {
    constructor(
        public user: any,
        public repos: any,
        public userName: string
    ) { }
}