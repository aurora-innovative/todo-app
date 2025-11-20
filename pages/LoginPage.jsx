
function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.email.value;
                    const password = e.target.password.value;
                    // handle login (replace with real handler)
                    console.log('Login', { email, password });
                }}
                className="bg-white p-6 rounded-lg shadow-md w-80"
            >
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <label className="block text-sm mb-2">Email</label>
                <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 mb-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />

                <label className="block text-sm mb-2">Password</label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="w-full px-3 py-2 pr-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <button
                        type="button"
                        aria-label="Toggle password visibility"
                        onClick={(e) => {
                            e.preventDefault();
                            const p = document.getElementById('password');
                            const btn = e.currentTarget;
                            if (!p) return;
                            if (p.type === 'password') {
                                p.type = 'text';
                                btn.innerText = '🙈';
                            } else {
                                p.type = 'password';
                                btn.innerText = '👁️';
                            }
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-0 cursor-pointer text-lg"
                    >
                        👁️
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;