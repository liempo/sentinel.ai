function Login() {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center">
      <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div class="py-12 p-10 bg-white rounded-xl">
          <div class="mb-6">
            <label
              class="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Email address
            </label>
            <input
              type="email"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="@email"
            />
          </div>
          <div class="">
            <label
              class="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Password
            </label>
            <input
              type="password"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Password"
            />
          </div>
          <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
            forget password
          </span>
          <button class="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
