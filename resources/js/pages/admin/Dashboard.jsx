const Dashboard = () => {
    return (
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div id="dashboard" className="page active"></div>

            <div id="products" className="page"></div>

            <div id="categories" className="page">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Categories
                    </h2>
                    <button
                        onclick="showCategoryModal()"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <i className="fas fa-plus mr-2"></i> Add Category
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card bg-white rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Product Categories
                        </h3>
                        <div id="categories-list" className="space-y-2"></div>
                    </div>

                    <div className="card bg-white rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Add New Category
                        </h3>
                        <form id="category-form">
                            <div className="mb-4">
                                <label
                                    for="category-name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Category Name
                                </label>
                                <input
                                    type="text"
                                    id="category-name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="e.g., Pens"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    for="category-parent"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Parent Category
                                </label>
                                <select
                                    id="category-parent"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">None (Top Level)</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save Category
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
