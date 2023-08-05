class Post {

  public constructor(public id: string, public usrId: string,public likes?: Number,public crtDt?: Date,public content?: string,public title?:string) {}
}

export default Post;
