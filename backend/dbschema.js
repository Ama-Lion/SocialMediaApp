let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      email: "detailslevel9@email.com",
      handle: "detailslevel9",
      createdAt: "2019-03-15T10:59:52.798Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/screamers-38367.appspot.com/o/341698456672.jpeg?alt=media",
      bio: "Hello, my name is detailslevel9, nice to meet you",
      website: "https://detailslevel9.com",
      location: "Lonodn, UK",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "This is a sample post",
      createdAt: "2019-03-15T10:59:52.798Z",
      likeCount: 5,
      commentCount: 3,
      postImage,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "paris, FR",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa",
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO",
    },
  ],
};
