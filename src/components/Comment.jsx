import ImageComponent from "./ImageComponent";

export default function Comment() {
  return (
    <div className="bg-state-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <ImageComponent
          src="user.jpg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">3 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea
          odio, eaque ipsa dolor repudiandae eum. Asperiores, soluta!
          Praesentium nisi aliquam dignissimos itaque eaque cum maxime optio
          repellat suscipit eveniet?
        </p>
      </div>
    </div>
  );
}
