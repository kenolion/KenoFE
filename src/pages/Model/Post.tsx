class Post {

  public constructor(public id: String, public usrId: String,public likes?: Number,public crtDt?: Date,public content?: string,public title?:string) {}
}

export default Post;
