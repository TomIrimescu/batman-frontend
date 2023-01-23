/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  userErrors: Array<UserError>;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postCreate: PostPayload;
  postDelete: PostPayload;
  postUpdate: PostPayload;
  signin: AuthPayload;
  signup: AuthPayload;
};


export type MutationPostCreateArgs = {
  post: PostInput;
};


export type MutationPostDeleteArgs = {
  postId: Scalars['ID'];
};


export type MutationPostUpdateArgs = {
  post: PostInput;
  postId: Scalars['ID'];
};


export type MutationSigninArgs = {
  credentials: CredentialsInput;
};


export type MutationSignupArgs = {
  bio: Scalars['String'];
  credentials: CredentialsInput;
  name: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  user: User;
};

export type PostInput = {
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostPayload = {
  __typename?: 'PostPayload';
  post?: Maybe<Post>;
  userErrors: Array<UserError>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: Array<Post>;
  profile: Profile;
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
};
