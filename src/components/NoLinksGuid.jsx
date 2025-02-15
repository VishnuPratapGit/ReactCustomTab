import { Plus, Edit2, Trash2, Move } from "lucide-react";

const NoLinksGuid = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8 font-quicksand">
        Quick Guide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add Link Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
          <div className="mb-4 p-3 bg-amber-100 rounded-full">
            <Plus className="text-amber-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Add Links
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Click the{" "}
            <span className="text-amber-600 font-semibold">Add Link</span>{" "}
            button to create your first entry
          </p>
        </div>

        {/* Edit/Delete Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
          <div className="mb-4 p-3 bg-blue-100 rounded-full">
            <div className="flex gap-2">
              <Edit2 className="text-blue-600 w-5 h-5" />
              <Trash2 className="text-red-600 w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Manage Links
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Right-click to{" "}
            <span className="text-blue-600 font-semibold">edit</span> or{" "}
            <span className="text-red-600 font-semibold">delete</span> any link
          </p>
        </div>

        {/* Drag & Drop Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
          <div className="mb-4 p-3 bg-purple-100 rounded-full">
            <Move className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Organize Links
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Drag and drop to rearrange your links in any order you prefer
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoLinksGuid;
