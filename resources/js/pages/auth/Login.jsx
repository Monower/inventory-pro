const Login = () => {
    return (
        <div
            id="login-screen"
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-indigo-600 text-white p-3 rounded-lg">
                        <i className="fas fa-boxes text-3xl"></i>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    InventoryPro
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Sign in to your account
                </p>

                <form id="login-form">
                    <div className="mb-4">
                        <label
                            for="login-email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="login-email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            for="login-password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="login-password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        Don't have an account?{" "}
                        <a
                            href="#"
                            id="show-register"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Register
                        </a>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
