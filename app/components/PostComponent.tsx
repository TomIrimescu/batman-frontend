interface IProps {
  title: string;
  content: string;
  published: boolean;
  isMyProfile: boolean;
  date: string;
  user: string;
}

export default function PostComponent({
  title,
  content,
  published,
  isMyProfile,
  date,
  user,
}: IProps) {
  const formatedDate = new Date(Number(date));
  return (
    <div
      className="bg-green-300 bg-opacity-40 mb-5 p-4 relative"
      style={published === false ? { backgroundColor: "#FFC6D3" } : {}}
    >
      {isMyProfile && published === false && (
        <p
          className="absolute right-3 text-sm font-bold text-green-600 cursor-pointer"
          onClick={() => {
            console.log("Publish this post");
          }}
        >
          publish
        </p>
      )}
      {isMyProfile && published === true && (
        <p
          className="absolute right-3 text-sm font-bold text-red-500 cursor-pointer"
          onClick={() => {
            console.log("Unpublish this post");
          }}
        >
          unpublish
        </p>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium">{title}</h2>
        <h4 className="text-xs p-6">
          Created on {`${formatedDate}`.split(" ").splice(0, 4).join(" ")} by{" "}
          {user}
        </h4>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}
